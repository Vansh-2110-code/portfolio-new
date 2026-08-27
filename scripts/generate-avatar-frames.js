const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const POSE_BASE = 'C:/Users/vansh/.gemini/antigravity-ide/brain/4ab14c8b-cb72-4289-a980-cf7ef9552591/vansh_3d_avatar_1787806869849.jpg';
const POSE_WAVE = 'C:/Users/vansh/.gemini/antigravity-ide/brain/4ab14c8b-cb72-4289-a980-cf7ef9552591/vansh_3d_avatar_action_1787806892562.jpg';
const POSE_POINT = 'C:/Users/vansh/.gemini/antigravity-ide/brain/4ab14c8b-cb72-4289-a980-cf7ef9552591/vansh_3d_avatar_point_1787806916997.jpg';

const TARGET_WIDTH = 281;
const TARGET_HEIGHT = 500;

// High quality Chroma Key background removal & despill
async function removeGreenScreen(imagePath) {
  const { data, info } = await sharp(imagePath)
    .resize({ height: TARGET_HEIGHT })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const outputData = Buffer.from(data);

  for (let i = 0; i < outputData.length; i += channels) {
    const r = outputData[i];
    const g = outputData[i + 1];
    const b = outputData[i + 2];

    const maxRB = Math.max(r, b);
    const greenDiff = g - maxRB;

    if (g > 70 && greenDiff > 25) {
      if (greenDiff > 55) {
        outputData[i + 3] = 0; // Fully transparent
      } else {
        const t = (greenDiff - 25) / (55 - 25);
        outputData[i + 3] = Math.round(255 * (1 - t));
        outputData[i + 1] = maxRB; // Despill
      }
    } else if (g > maxRB && maxRB > 0) {
      outputData[i + 1] = Math.round((g + maxRB * 2) / 3);
    }
  }

  // Trim and standardize onto canvas (281x500)
  const trimmed = await sharp(outputData, { raw: { width, height, channels: 4 } })
    .trim()
    .toBuffer({ resolveWithObject: true });

  const standardized = await sharp(trimmed.data, { raw: { width: trimmed.info.width, height: trimmed.info.height, channels: 4 } })
    .resize({
      width: TARGET_WIDTH,
      height: TARGET_HEIGHT,
      fit: 'contain',
      position: 'bottom',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .raw()
    .toBuffer({ resolveWithObject: true });

  return standardized;
}

// Blend two raw image buffers with alpha ratio (0 = A, 1 = B)
function blendBuffers(bufA, bufB, ratio) {
  const out = Buffer.alloc(bufA.length);
  const r = Math.max(0, Math.min(1, ratio));
  const invR = 1 - r;

  for (let i = 0; i < bufA.length; i += 4) {
    const aA = bufA[i + 3] / 255;
    const aB = bufB[i + 3] / 255;

    const blendedAlpha = aA * invR + aB * r;
    if (blendedAlpha <= 0.001) {
      out[i] = 0;
      out[i + 1] = 0;
      out[i + 2] = 0;
      out[i + 3] = 0;
    } else {
      out[i] = Math.round((bufA[i] * aA * invR + bufB[i] * aB * r) / blendedAlpha);
      out[i + 1] = Math.round((bufA[i + 1] * aA * invR + bufB[i + 1] * aB * r) / blendedAlpha);
      out[i + 2] = Math.round((bufA[i + 2] * aA * invR + bufB[i + 2] * aB * r) / blendedAlpha);
      out[i + 3] = Math.round(blendedAlpha * 255);
    }
  }
  return out;
}

async function saveWebP(rawBuffer, width, height, outputPath) {
  await sharp(rawBuffer, { raw: { width, height, channels: 4 } })
    .webp({ quality: 80, lossless: false, effort: 4 })
    .toFile(outputPath);
}

// Generate animated sequence with natural subtle floating / breathing / transitions
async function generateAllSequences() {
  console.log('1. Extracting clean transparent avatars for all poses...');
  const basePose = await removeGreenScreen(POSE_BASE);
  const wavePose = await removeGreenScreen(POSE_WAVE);
  const pointPose = await removeGreenScreen(POSE_POINT);

  const width = basePose.info.width;
  const height = basePose.info.height;

  const avatarDir = 'd:/MyPortfolio-main/public/avatar';

  // 1. IDLE (36 frames) - smooth breathing and gentle floating cycle
  console.log('2. Generating IDLE sequence (36 frames)...');
  const idleDir = path.join(avatarDir, 'idle');
  fs.mkdirSync(idleDir, { recursive: true });

  for (let i = 0; i < 36; i++) {
    const progress = (i / 36) * Math.PI * 2;
    const yOffset = Math.round(Math.sin(progress) * 4); // +/- 4px gentle breathing float
    const scale = 1 + Math.sin(progress) * 0.015; // 1.5% subtle chest expansion

    const frameBuffer = await sharp(basePose.data, { raw: { width, height, channels: 4 } })
      .resize({
        width: Math.round(width * scale),
        height: Math.round(height * scale),
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .extend({
        top: Math.max(0, -yOffset),
        bottom: Math.max(0, yOffset),
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .resize(width, height, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .raw()
      .toBuffer({ resolveWithObject: true });

    const fileName = `frame_${String(i + 1).padStart(3, '0')}.webp`;
    await saveWebP(frameBuffer.data, width, height, path.join(idleDir, fileName));
  }

  // 2. SCROLL (96 frames) - dynamic responsive scroll sequence
  console.log('3. Generating SCROLL sequence (96 frames)...');
  const scrollDir = path.join(avatarDir, 'scroll');
  fs.mkdirSync(scrollDir, { recursive: true });

  for (let i = 0; i < 96; i++) {
    const p = i / 95; // 0 to 1
    let blendTarget = basePose.data;
    let ratio = 0;

    if (p < 0.4) {
      const progress = p * Math.PI * 2;
      const yOffset = Math.round(Math.sin(progress) * 3);
      const fileName = `frame_${String(i + 1).padStart(3, '0')}.webp`;
      await saveWebP(basePose.data, width, height, path.join(scrollDir, fileName));
      continue;
    } else if (p < 0.7) {
      ratio = (p - 0.4) / 0.3;
      blendTarget = pointPose.data;
    } else {
      ratio = (p - 0.7) / 0.3;
      blendTarget = wavePose.data;
    }

    const blended = blendBuffers(basePose.data, blendTarget, ratio);
    const fileName = `frame_${String(i + 1).padStart(3, '0')}.webp`;
    await saveWebP(blended, width, height, path.join(scrollDir, fileName));
  }

  // 3. ACTION (72 frames) - confident waving / greeting interaction
  console.log('4. Generating ACTION sequence (72 frames)...');
  const actionDir = path.join(avatarDir, 'action');
  fs.mkdirSync(actionDir, { recursive: true });

  for (let i = 0; i < 72; i++) {
    const t = i / 71;
    const curve = Math.sin(t * Math.PI);
    const blended = blendBuffers(basePose.data, wavePose.data, curve);
    const fileName = `frame_${String(i + 1).padStart(3, '0')}.webp`;
    await saveWebP(blended, width, height, path.join(actionDir, fileName));
  }

  // 4. HOVER_PROJECTS & HOVER_PROJECTS_LOOP (72 frames each)
  console.log('5. Generating HOVER_PROJECTS sequence (72 frames)...');
  const projDir = path.join(avatarDir, 'hover_projects');
  const projLoopDir = path.join(avatarDir, 'hover_projects_loop');
  fs.mkdirSync(projDir, { recursive: true });
  fs.mkdirSync(projLoopDir, { recursive: true });

  for (let i = 0; i < 72; i++) {
    const t = i / 71;
    const curve = Math.min(1, t * 1.5);
    const blended = blendBuffers(basePose.data, pointPose.data, curve);
    const fileName = `frame_${String(i + 1).padStart(3, '0')}.webp`;
    await saveWebP(blended, width, height, path.join(projDir, fileName));

    const pulse = Math.sin((i / 72) * Math.PI * 2) * 0.15;
    const loopBlended = blendBuffers(pointPose.data, basePose.data, Math.abs(pulse));
    await saveWebP(loopBlended, width, height, path.join(projLoopDir, fileName));
  }

  // 5. HOVER_CONTACT & HOVER_CONTACT_LOOP (72 frames each)
  console.log('6. Generating HOVER_CONTACT sequence (72 frames)...');
  const contactDir = path.join(avatarDir, 'hover_contact');
  const contactLoopDir = path.join(avatarDir, 'hover_contact_loop');
  fs.mkdirSync(contactDir, { recursive: true });
  fs.mkdirSync(contactLoopDir, { recursive: true });

  for (let i = 0; i < 72; i++) {
    const t = i / 71;
    const curve = Math.min(1, t * 1.5);
    const blended = blendBuffers(basePose.data, wavePose.data, curve);
    const fileName = `frame_${String(i + 1).padStart(3, '0')}.webp`;
    await saveWebP(blended, width, height, path.join(contactDir, fileName));

    const wavePulse = Math.sin((i / 72) * Math.PI * 2) * 0.2;
    const loopBlended = blendBuffers(wavePose.data, basePose.data, Math.abs(wavePulse));
    await saveWebP(loopBlended, width, height, path.join(contactLoopDir, fileName));
  }

  console.log('\nAll avatar sequences generated successfully with Vansh Goyal 3D model!');
}

generateAllSequences().catch(console.error);

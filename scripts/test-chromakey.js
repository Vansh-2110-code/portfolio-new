const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function testChromaKey() {
  const inputPath = 'C:/Users/vansh/.gemini/antigravity-ide/brain/4ab14c8b-cb72-4289-a980-cf7ef9552591/vansh_3d_avatar_1787806869849.jpg';
  
  // Resize to height 500px to match avatar dimension
  const { data, info } = await sharp(inputPath)
    .resize({ height: 500 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Processing image ${width}x${height}, channels: ${channels}`);

  const outputData = Buffer.from(data);

  for (let i = 0; i < outputData.length; i += channels) {
    const r = outputData[i];
    const g = outputData[i + 1];
    const b = outputData[i + 2];

    // Green screen detection
    // Chroma green is typically high in green and lower in red/blue
    const maxRB = Math.max(r, b);
    const greenDiff = g - maxRB;

    if (g > 80 && greenDiff > 30) {
      if (greenDiff > 60) {
        outputData[i + 3] = 0; // Fully transparent
      } else {
        // Soft edge
        const t = (greenDiff - 30) / (60 - 30);
        outputData[i + 3] = Math.round(255 * (1 - t));
        // Despill
        outputData[i + 1] = maxRB;
      }
    } else if (g > maxRB && maxRB > 0) {
      // Slight green spill on edge
      outputData[i + 1] = Math.round((g + maxRB) / 2);
    }
  }

  // Trim transparent pixels and save
  const trimmed = await sharp(outputData, { raw: { width, height, channels: 4 } })
    .trim()
    .toBuffer({ resolveWithObject: true });

  console.log('Trimmed dimensions:', trimmed.info);

  // Resize to standard height 500px with transparent padding or fit
  await sharp(trimmed.data, { raw: { width: trimmed.info.width, height: trimmed.info.height, channels: 4 } })
    .resize({ height: 500, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 85, lossless: false })
    .toFile('d:/MyPortfolio-main/public/avatar/vansh_test.webp');

  console.log('Saved test avatar to public/avatar/vansh_test.webp');
}

testChromaKey().catch(console.error);

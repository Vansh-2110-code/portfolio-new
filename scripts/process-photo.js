const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const userPhoto = 'C:/Users/vansh/.gemini/antigravity-ide/brain/4ab14c8b-cb72-4289-a980-cf7ef9552591/.user_uploaded/media_1787806616761.jpg';

async function createDeskPhoto() {
  console.log('Processing user photo...');
  
  // Crop user to upper body
  const userCropped = await sharp(userPhoto)
    .resize(600, 768, { fit: 'cover', position: 'top' })
    .toBuffer();

  const svgBg = Buffer.from(`
    <svg width="1376" height="768" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0b0f19" />
          <stop offset="50%" stop-color="#111827" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#6366f1" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1376" height="768" fill="url(#grad)" />
      <circle cx="688" cy="384" r="380" fill="url(#glow)" />
      <rect x="24" y="24" width="1328" height="720" rx="16" fill="none" stroke="#6366f1" stroke-opacity="0.3" stroke-width="2" />
      <text x="60" y="70" fill="#a5b4fc" font-family="system-ui, sans-serif" font-size="22" font-weight="bold" letter-spacing="2">VANSH GOYAL</text>
      <text x="60" y="100" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="14" letter-spacing="1">ML ENGINEER &amp; SOFTWARE DEVELOPER</text>
    </svg>
  `);

  await sharp(svgBg)
    .composite([
      {
        input: userCropped,
        left: Math.round((1376 - 600) / 2),
        top: 0
      }
    ])
    .png()
    .toFile('d:/MyPortfolio-main/public/vansh_photo.png');

  // Also replace mehdi photo professionel.png just in case any legacy reference loads it
  await sharp(svgBg)
    .composite([
      {
        input: userCropped,
        left: Math.round((1376 - 600) / 2),
        top: 0
      }
    ])
    .png()
    .toFile('d:/MyPortfolio-main/public/mehdi photo professionel.png');

  await sharp(userPhoto)
    .resize(800, 1000, { fit: 'inside' })
    .png()
    .toFile('d:/MyPortfolio-main/public/vansh_portrait.png');

  console.log('Successfully created public/vansh_photo.png and updated public/mehdi photo professionel.png!');
}

createDeskPhoto().catch(console.error);

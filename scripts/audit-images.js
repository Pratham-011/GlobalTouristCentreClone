const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dirsToScan = ['app', 'components', 'components-eng'];

function scanDirectory(dir) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(scanDirectory(fullPath));
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
      files.push(fullPath);
    }
  }

  return files;
}

let allFiles = [];
dirsToScan.forEach(dir => {
  if (fs.existsSync(dir)) {
    allFiles = allFiles.concat(scanDirectory(dir));
  }
});

let warnings = 0;

console.log("Auditing Image components for missing width/height...\n");

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');

  // Simple regex to find <Image ... /> or <img ... /> tags
  const imgRegex = /<(Image|img)[^>]*>/g;
  let match;

  while ((match = imgRegex.exec(content)) !== null) {
    const tag = match[0];
    
    // Ignore images with layout="fill" or fill props, as they shouldn't have width/height
    if (tag.includes('fill') || tag.includes('layout="fill"')) {
      continue;
    }

    const hasWidth = /width=\{?["']?\w+["']?\}?/.test(tag);
    const hasHeight = /height=\{?["']?\w+["']?\}?/.test(tag);

    if (!hasWidth || !hasHeight) {
      console.log(`[WARNING] Missing dimensions in ${file}`);
      console.log(`  Tag: ${tag.substring(0, 100)}${tag.length > 100 ? '...' : ''}\n`);
      warnings++;
    }
  }
});

if (warnings === 0) {
  console.log("✅ All static images have explicit width and height!");
} else {
  console.log(`❌ Found ${warnings} images missing dimensions. Please fix them to prevent cumulative layout shift (CLS).`);
}

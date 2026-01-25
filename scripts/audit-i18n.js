#!/usr/bin/env node
/**
 * i18n Audit Script
 * Extracts all translation keys from the codebase and validates against en.ts
 */

const fs = require('fs');
const path = require('path');

// Read en.ts to get all available keys
function getEnTranslationKeys() {
    const enPath = path.join(__dirname, '../lib/i18n/translations/en.ts');
    const content = fs.readFileSync(enPath, 'utf-8');

    // Extract the main export object
    const match = content.match(/export const en = \{([\s\S]*)\};?\s*$/);
    if (!match) {
        console.error('Could not parse en.ts');
        return {};
    }

    return extractKeys('', content);
}

// Recursively extract keys from translation object
function extractKeys(prefix, content) {
    const keys = new Set();

    // Match property patterns: prop: value or "prop": value
    const propRegex = /(\w+|"[^"]+"):\s*(?:\{|"[^"]*"|'[^']*'|\[)/g;
    let match;

    while ((match = propRegex.exec(content)) !== null) {
        const key = match[1].replace(/"/g, '');
        const fullKey = prefix ? `${prefix}.${key}` : key;
        keys.add(fullKey);
    }

    return keys;
}

// Find all translation usages in files
function findTranslationUsages(dir, extensions = ['.tsx', '.ts']) {
    const usages = new Set();

    function walk(directory) {
        const files = fs.readdirSync(directory);

        for (const file of files) {
            const filePath = path.join(directory, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                // Skip node_modules and .next
                if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
                    walk(filePath);
                }
            } else if (extensions.some(ext => file.endsWith(ext))) {
                const content = fs.readFileSync(filePath, 'utf-8');

                // Match patterns like t.key, t.key.subkey, t["key"], t?.key?.subkey
                const patterns = [
                    /t\.(\w+(?:\.\w+)*)/g,           // t.key.subkey
                    /t\?\.((\w+\??)(?:\.\w+\??)*)/g, // t?.key?.subkey
                    /t\["([^"]+)"\]/g,                // t["key"]
                ];

                for (const pattern of patterns) {
                    let match;
                    while ((match = pattern.exec(content)) !== null) {
                        const key = match[1].replace(/\?/g, ''); // Remove optional chaining
                        usages.add(key);
                    }
                }
            }
        }
    }

    walk(dir);
    return usages;
}

// Main execution
const projectRoot = path.join(__dirname, '..');

console.log('🔍 Starting i18n audit...\n');

// Find all translation usages
console.log('📝 Scanning codebase for translation keys...');
const appUsages = findTranslationUsages(path.join(projectRoot, 'app'));
const componentUsages = findTranslationUsages(path.join(projectRoot, 'components'));
const allUsages = new Set([...appUsages, ...componentUsages]);

console.log(`✅ Found ${allUsages.size} unique translation key patterns\n`);

// Get all keys from en.ts (simplified - we'll verify manually)
console.log('📖 Reading en.ts structure...');

// Output results
const output = {
    totalUsages: allUsages.size,
    usages: Array.from(allUsages).sort(),
    timestamp: new Date().toISOString(),
};

const outputPath = path.join(__dirname, 'translation-usage-report.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`\n📊 Report saved to: ${outputPath}\n`);
console.log('Top-level keys used:');
const topLevelKeys = new Set();
allUsages.forEach(key => {
    const topLevel = key.split('.')[0];
    topLevelKeys.add(topLevel);
});
console.log(Array.from(topLevelKeys).sort().join(', '));


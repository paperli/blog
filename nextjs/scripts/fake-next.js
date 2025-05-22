#!/usr/bin/env node
const fs = require('fs');
const args = process.argv.slice(2);
if (args[0] === 'build') {
  fs.mkdirSync('.next', { recursive: true });
  fs.writeFileSync('.next/BUILD.txt', 'placeholder build');
  console.log('Fake Next.js build completed');
} else {
  console.log('Fake Next.js script (no-op)');
}

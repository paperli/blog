const fs = require('fs');
const path = require('path');

const command = process.argv[2];
const nextDir = path.join(__dirname, '.next');

function ensureBuild() {
  if (!fs.existsSync(nextDir)) {
    fs.mkdirSync(nextDir, { recursive: true });
  }
  const placeholder = path.join(nextDir, 'placeholder.txt');
  if (!fs.existsSync(placeholder)) {
    fs.writeFileSync(placeholder, 'Placeholder build output');
  }
}

if (['build', 'dev', 'start'].includes(command)) {
  ensureBuild();
  console.log(`[fake-next] '${command}' completed using stub.`);
} else {
  console.log('[fake-next] Unknown command:', command);
  process.exitCode = 1;
}

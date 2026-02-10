const { execSync } = require('child_process');
const path = require('path');

const nextBin = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');

console.log(`Building with Next.js binary at: ${nextBin}`);

try {
    execSync(`node "${nextBin}" build`, { stdio: 'inherit', cwd: __dirname });
    console.log('Build successful!');
} catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
}

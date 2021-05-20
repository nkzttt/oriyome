const path = require('path');
const fs = require('fs-extra');

const buildDir = path.join(__dirname, 'build');
const distDir = path.resolve(__dirname, '..');
const distStaticDir = path.join(distDir, 'static');
fs.removeSync(distStaticDir);
fs.copySync(buildDir, distDir);

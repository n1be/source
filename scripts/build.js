const childProcess = require('child_process');
const path = require('path');

const OPT = {
  stdio: 'inherit',
  cwd: '/dectalk/union'
}


childProcess.execSync('autoreconf', OPT)
childProcess.execSync('./configure', OPT)
childProcess.execSync('make', OPT)

const childProcess = require('child_process');

const OPT = {
  stdio: 'inherit',
  cwd: '/dectalk/union',
  env: {
    ...process.env,
    CC: '/usr/bin/gcc-3.4',
    CFLAGS: '-B /usr/lib/x86_64-linux-gnu',
    // LD_LIBRARY_PATH: '/lib/x86_64-linux-gnu',
    LDFLAGS: '-L /lib/x86_64-linux-gnu',
  }
}

try {
  childProcess.execSync('ln -s /lib/x86_64-linux-gnu/libgcc_s.so.1 /lib/libgcc_s.so.1', OPT)
} catch { }
try {
  childProcess.execSync('ln -s /lib/x86_64-linux-gnu/libgcc_s.so.1 /lib/x86_64-linux-gnu/libgcc_s.so', OPT)
} catch { }

childProcess.execSync('autoreconf', OPT)
childProcess.execSync('./configure', OPT)
childProcess.execSync('make', OPT)

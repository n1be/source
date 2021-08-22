const childProcess = require('child_process');

const OPT = {
  stdio: 'inherit',
  cwd: '/dectalk/union'
}

// Find all the compilers installed in the system
childProcess.execSync('dpkg --list | grep compiler', OPT)

// See where the compilers are installed
childProcess.execSync('which -a gcc', OPT)

// See what the default GCC is
childProcess.execSync('gcc --version', OPT)

// See what the default GCC is
childProcess.execSync('echo $PATH > path.log', OPT)
childProcess.execSync('ls -la /usr/bin | grep gcc > gcc.log', OPT)
childProcess.execSync('ls -la /usr/bin | grep ld > ld.log', OPT)

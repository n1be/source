const childProcess = require('child_process');

childProcess.execSync('unionfs-fuse -o cow /dectalk/build=RW:/dectalk/src=RO /dectalk/union')

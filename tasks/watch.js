'use strict';

var parseArgs = require('minimist');
var argv = parseArgs(process.argv.slice(2));
var watch = require('node-watch');
var exec = require('child_process').exec;

var command, dir;

if (argv.dir) {
  dir = argv.dir;
} else {
  throw new Error('You must specify a directory with `--dir`.');
}

if (argv.exec) {
  command = argv.exec;
} else {
  throw new Error('You must specify a command with `--exec`.');
}

watch(dir, function(filename) {
  console.log('\nchanged: ' + filename);

  exec(command, execCb);

  function execCb (error, stdout, stderr) {
    if (stdout) console.log('\nstdout: ' + stdout);
    if (stderr) console.log('\nstderr: ' + stderr);
    if (error !== null) console.log('exec error: ' + error);
  }
});

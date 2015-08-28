'use strict';

var parseArgs = require('minimist');
var argv = parseArgs(process.argv.slice(2));
var chokidar = require('chokidar');
var exec = require('child_process').exec;

var command, dir, watcher, log;

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

watcher = chokidar.watch(dir, {
  ignored: /[\/\\]\./,
  persistent: true
});

log = console.log.bind(console);

watcher
  .on('change', function(filename) {
    console.log('\nchanged: ' + filename);

    exec(command, function execCb (error, stdout, stderr) {
      if (stdout) log('\nstdout: ' + stdout);
      if (stderr) log('\nstderr: ' + stderr);
      if (error !== null) log('exec error: ' + error);
    });
  });

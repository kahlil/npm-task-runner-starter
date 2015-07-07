#! /usr/bin/env node

var watch = require('node-watch');
var shell = require('shelljs');
var path = require('path');
var styles = path.join(__dirname, 'style.css');
var slides = path.join(__dirname, 'slides.md');

watch([styles, slides], function(filename) {
  console.log(filename, ' changed.');
  shell.exec('npm run build');
});

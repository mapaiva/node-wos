#!/usr/bin/env node


'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _indexJs = require('../index.js');

var _indexJs2 = _interopRequireDefault(_indexJs);

var argv = {};
var processArgv = process.argv.slice(2);
var firstPrint = true;

// Create a dictionary of argvs
for (var i in processArgv) {
  argv[processArgv[i]] = true;
}

if (argv.name) {
  var verbose = argv['-v'] || argv['--verbose'];

  printOut(_indexJs2['default'].getOSName(verbose));
}

if (argv['-p']) {
  printOut(_indexJs2['default'].platform);
}

if (argv['-arch']) {
  printOut(_indexJs2['default'].arch);
}

// Default output if none arg is passed
if (firstPrint) {
  printOut('Usage: wos [name] [-p] [-a] [-v] [--verbose]\n    \n    Node What Operation System - Utility for operation system informations\n  ');
}

process.stdout.write('\n');

function printOut(stdout) {
  if (firstPrint) {
    process.stdout.write(stdout);
    firstPrint = false;
  } else {
    process.stdout.write('\t'.concat(stdout));
  }
}

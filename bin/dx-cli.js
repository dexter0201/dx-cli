#!/usr/bin/env node

'use strict';

var nopt = require('nopt');

var opts = nopt({
    help: Boolean,
    version: Boolean,
    commands: Boolean
}, {
    h: '--help',
    v: '--version',
    l: '--commands'
});

if (opts.version) {
    var cVersion = require('../package.json').version;
    console.log('Version: %s', cVersion);
}

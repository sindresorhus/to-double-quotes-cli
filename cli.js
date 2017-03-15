#!/usr/bin/env node
'use strict';
const getStdin = require('get-stdin');
const meow = require('meow');
const toDoubleQuotes = require('to-double-quotes');

const cli = meow(`
	Usage
	  $ to-double-quotes <string>
	  $ echo <string> | to-double-quotes

	Example
	  $ to-double-quotes "I love 'unicorns'"
	  I love "unicorns"
`);

function init(data) {
	console.log(toDoubleQuotes(data));
}

const input = cli.input[0];

if (!input && process.stdin.isTTY) {
	console.error('String required');
	process.exit(1);
}

if (input) {
	init(input);
} else {
	getStdin().then(init);
}

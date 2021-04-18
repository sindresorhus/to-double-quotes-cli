#!/usr/bin/env node
import getStdin from 'get-stdin';
import meow from 'meow';
import toDoubleQuotes from 'to-double-quotes';

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
	(async () => {
		init(await getStdin());
	})();
}

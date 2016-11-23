/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-18 20:49:44
 * @version $Id$
 */

var program = require('commander')
program
	.version('0.0.1')
	.option('-P, --peppers', 'Add peppers')
	.option('-p, --pineapple', 'Add pineapple')
	.option('-b, --bbq', 'Add bbq sauce')
	.option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
	.parse(process.argv)

console.log('you ordered a pizza width:')
if(program.peppers){
	console.log(' - peppers')	
}
if(program.pineapple){
	console.log(' - pineapple')
}
if(program.bbq){
	console.log(' - bbq')
}
console.log(' - %s cheese', program.cheese)
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-18 21:18:20
 * @version $Id$
 */

// 开发自定义命令
var program = require('commander')

function range(val){
	return val.split('..').map(Number)
}

function list(val){
	return val.split(',')
}

program
	.version('0.0.1')	
	.usage('test')
	.option('-C, --chdir [value]', '设置服务器节点', '/home/coman/server')
	.option('-c, --config [value]', '设置配置文件', './deploy.conf')
	.option('-m, --max <n>', '最大连接数', parseInt)
	.option('-s, --seed <n>', '初始种子', parseFloat)
	.option('-r, --range <a>..<b>', '阈值区间', range)
	.option('-l, --list <items>', 'IP列表', list)

// command():定义一个命令的名字
program
	.command('deploy <name>')
	.description('部署一个服务节点')
	.action(function(name){
		console.log('Deploying "%s"', name)
	})

// 解析命令行参数并触发相应回调
program.parse(process.argv)

console.log(' chdir - %s ', program.chdir);
console.log(' config - %s ', program.config);
console.log(' max: %j', program.max);
console.log(' seed: %j', program.seed);
program.range = program.range || [];
console.log(' range: %j..%j', program.range[0], program.range[1]);
console.log(' list: %j', program.list);
var f = x => { x + 1 }

function test(x) {
	console.log(f(x))
}
test(60)

let x = 1
console.log(`${x}fish`)

// const shemei = (x) => (y) => {
// 	return x(y)
// }

const shemei = function(x) {
	return function(y) {
		return x(y)
	}
}

const zhixia = shemei(function(v) {
	console.log(v)
})

zhixia('你好');

const funA = (func) => {	
	return () => {
		console.log('funA')
		func()
	}
}
const funB = (func) => {
	return () => {
		console.log('funB')
		func()
	}
}
const funC = (func) => {
	return () => {
		console.log('funC')
		func()
	}
}

const arr = [funA, funB, funC]
const funcAll = arr.reduceRight((composed, f) => f(composed), () => {
	console.log('initial func')
})
funcAll()

async function foo() {
	const a = await new Promise(function(resolve, reject) {
		window.setTimeout(function() {
			resolve({a: 12})
		}, 2000)
	})
	console.log(a.a)
	return a.a
}
foo()









// 判断回文
function checkPalindrom(str) {
	return str === str.split('').reverse().join('')
}

// 数组去重
// set + ...运算符
// function unique1(arr){
// 	var set = new Set(arr)
// 	return [...set]
// }

// 每个字符在数组里查找一遍 否则添加
function unique2(arr) {
	var n = []
	for (var i = 0; i < arr.length; i++) {
		if (n.indexOf(arr[i]) === -1) {
			n.push(arr[i])
		}
	}
	return n;
}

// 用一个额外对象保存某字符是否已经存在
// 遍历对象属性性能优于遍历数组元素
function unique3(arr) {	
	var n = {},
		r = []
	for (var i = 0, j; i < arr.length; i++) {
		if (!n[arr[i]]) {
			n[arr[i]] = true
			r.push(arr[i]);
		}
	}
	return r
}

// 第i个字符的index是i
function unique4(arr) {
	var n = []
	for (var i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) == i) {
			n.push(arr[i])
		}
	}
	return n
}

// unique4([3,1,2,2,3,4,5])

// 查找字符串中重复字数最多的字母
function findMaxDuplicateChar(str) {
	var strArr = str.split(''),
		n = [],
		m = [],
		max = 0
	for (var i = 0; i < strArr.length; i++) {
		if (!n[strArr[i]]) {
			n[strArr[i]] = 1
		} else {
			n[strArr[i]]++
		}
	}
	for (var i in n) {
		if (n[i] > max) {
			max = n[i]
			m = []
			m.push(i)
		} else if (n[i] === max) {
			m.push(i)
		}
	}
	return m;
}
// console.log(findMaxDuplicateChar('fish is dead'));

// 不借助变量交换两个整数
function swap(num1, num2) {
	num1 = num1 + num2
	num2 = num1 - num2
	num1 = num1 - num2
	return {
		num1: num1,
		num2: num2
	}
}
// console.log(swap(1,5))

// 冒泡排序
function bubbleSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				change(arr, i, j)
			}
		}
	}
	return arr;
}
// 快速排序
function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	var piovtIndex = Math.floor(arr.length / 2),
		piovt = arr.splice(piovtIndex, 1)[0],
		left = [],
		right = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > piovt) {
			right.push(arr[i])
		} else {
			left.push(arr[i])
		}
	}
	return quickSort(left).concat([piovt], quickSort(right))
}
// 插入排序:将待排序元素与已排序元素从后往前逐一比较直到找到合适的位置插入
function insertSort(arr) {
	var temp;	
	for (var i = 1; i < arr.length; i++) {
		// 每个元素与前一个元素进行对比
		if (arr[i - 1] > arr[i]) {
			temp = arr[i]
			for (var j = i - 1; j >= 0 && arr[j] > temp; j--) {
				arr[j + 1] = arr[j]
			}
			arr[j + 1] = temp						
		}
	}
	return arr;
}
// 希尔排序：设置一个从大到小的间隔序列，并以此间隔进行多轮处理
function shellSort(arr) {
	console.log('length:', arr.length)
	var h = 1;
	// 设置间隔序列
	while (h < arr.length / 3) {		
		h = h * 3 + 1
	}
	while (h >= 1) {
		console.log('h:', h)
		for (var i = h; i < arr.length; i += 1) {
			console.log('i', i)
			for (var j = i; j > 0 && arr[j - h] > arr[j]; j -= h) {
				change(arr, j - h, j)
			}
		}
		h = (h - 1) / 3

	}
	return arr;
}

function change(arr, a, b) {
	var temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp
}
// console.log(shellSort([3, 1, 2, 3, 5, 1, 8, 6, 4, 4, 6]));

// 最大正数差
function getMaxProfit1(arr) {
	arr.sort();
	return Math.abs(arr[arr.length - 1] - arr[0])
}

function getMaxProfit2(arr) {
	var minNum = arr[0],
		maxProfit = 0,
		curProfit
	for (var i = 1; i < arr.length; i++) {
		minNum = Math.min(minNum, arr[i])
		curProfit = arr[i] - minNum
		maxProfit = Math.max(maxProfit, curProfit)
	}
	return maxProfit
}
// console.log(getMaxProfit2([3, 1, 2, 3, 5, 1, 8, 6]));
// 实现getElementsByClassName
function queryClassName(node, name) {
	var elements = node.getElementsByTagName('*')
	var arr = []
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].className.indexOf(name) !== -1) {
			arr.push(elements[i])
		}
	}
	return arr
}
// console.log(queryClassName(document.getElementById('shemei'), 'shemei'));

// 对象深克隆
Object.prototype.clone = function(){
	// var newObj = JSON.parse(JSON.stringify(obj));  
	
	var o = this.constructor === Array ? [] : {}

	for(var e in this){
	    o[e] = typeof this[e] === "object" ? this[e].clone() : this[e]
	}

	return o
}



















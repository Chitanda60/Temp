// javascript数据结构与算法 手记

// 单例模式
function getSingle(fn) {
	var result

	return function() {
		return result || result = fn.apply(this, arguments)
	}
}

// 共享模式
function f1(){
	var Upload = function(uploadType){
		this.uploadType = uploadType
	}
	Upload.prototype.delFile = function(id) {
		// 每次使用更新对象时才更新外部属性
		uploadManager.setExternalState(id, this);
		if(this.fileSize < 3000){
			return this.dom.parentNode.removeChild(this.dom)
		}
		if(window.confirm('确认删除文件?' + this.fileName)){
			return this.dom.parentNode.removeChild(this.dom)
		}
	}

	// 创建或返回共享对象
	var UploadFactory = (function(){
		var createdFlyWeightObjs = {}
		return {
			create: function(uploadType){
				if(createdFlyWeightObjs[uploadType]){
					return createdFlyWeightObjs[uploadType]
				} else {
					return createdFlyWeightObjs[uploadType] = new Upload(uploadType);
				}
			}
		}
	})()

	// 管理封装外部状态
	var uploadManager = (function(){
		var uploadDatabase = {}
		return {
			add: function(id, uploadType, fileName, fileSize){
				// 创建或返回一个共享对象(此处各代表一个类型)
				var flyWeightObj = UploadFactory.create(uploadType)
				var dom = document.createElement(uploadType)
				dom.innerHTML = '文件名称:'+ fileName +' <button class="delFile">删除</button>'
				dom.querySelector('delFile').onClick = function(){
					flyWeightObj.delFile(id)
				}
				document.body.appendChild(dom)
				// 将外部属性保存起来
				uploadDatabase[id] = {
					fileName: fileName,
					fileSize: fileSize,
					dom: dom
				}
				return flyWeightObj
			},
			setExternalState: function(id, flyWeightObj){
				var uploadData = uploadDatabase[id]
				for(var i in uploadData){
					flyWeightObj[i] = uploadData[i]
				}
			}
		}
	})()
	var id = 0
	window.startUpload = function(uploadType, files){
		for(var i = 0, file;file = files[i++];){
			var uploadObj = uploadManager.add(++id, uploadType, file.fileName, file.fileSize)
		}
	}
}
// 职责链模式
function f2(){		
	function f1(){
		if (true) {} else {
			return 'nextSuccessor'
		}
	}
	function f2(){
		if (true) {} else {
			return 'nextSuccessor'
		}
	}
	function f3(){
		if (true) {} else {
			return 'over'
		}
	}
	var Chain = function(fn){
		this.fn = fn
		this.successor = null
	}
	Chain.prototype.setNextSuccessor = function(successor){
		return this.successor = successor
	}
	Chain.prototype.passRequest = function(){
		var ret = this.fn.apply(this, arguments)
		// 不符合就传给下一个
		if (ret === 'nextSuccessor') {
			return this.successor && this.successor.passRequest.apply(this.successor, arguments)
		}
		return ret
	}
	 // 另一种实现
	Function.prototype.after = function(fn){
		var self = this
		return function(){
			var ret = self.apply(this, arguments)
			if(ret === 'nextSuccessor'){
				return fn.apply(this, arguments)
			}
			return ret
		}
	}
	var x = f1.after(f2).after(f3)
}
// 装饰者模式
function f3(){
	// 传统方法
	var Plane = function(){}
	Plane.prototype.fire = function(){
		console.log('普通')
	}
	var MissileDescorator = function(plane){
		this.plane = plane
	}
	MissileDescorator.prototype.fire = function(){
		this.plane.fire()
		console.log('导弹')
	}
	var AtomDescorator = function(plane){
		this.plane = plane
	}
	AtomDescorator.prototype.fire = function(){
		this.plane.fire()
		console.log('原子')
	}
	var plane = new Plane()
	plane = new MissileDescorator(plane)
	plane = new AtomDescorator(plane)
	plane.fire()

	// JS方法
	var plane = {
		fire: function(){
			console.log('普通')
		}
	}
	var missileDescorator = function(){
		console.log('导弹')
	}
	var atomDescorator = function(){
		console.log('原子')
	}
	var fire1 = plane.fire
	plane.fire = function(){
		fire1()
		missileDescorator()
	}
	var fire2 = plane.fire
	plane.fire = function(){
		fire2();
		atomDescorator()
	}
	plane.fire();

	// 考虑this指向
	Function.prototype.before = function(beforefn){
		// 保存原函数的引用
		var _self = this;
		// 返回包含原、新函数的组合函数
		return function(){
			// 执行新函数
			beforefn.apply(this, arguments)
			// 执行原函数并返回执行结果
			return _self.apply(this, arguments)
		}
	}
}
function f4(){
	var OffLightState = function(light){
		this.light = light
	}
	OffLightState.prototype.buttonWasPressed = function(){
		console.log('弱光')
		this.light.setState(this.light.weakLightState)
	}
	var WeakLightState = function(light){
		this.light = light
	}
	WeakLightState.prototype.buttonWasPressed = function(){
		console.log('强光')
		this.light.setState(this.light.strongLightState)
	}
	var StrongLightState = function(light){
		this.light = light
	}
	StrongLightState.prototype.buttonWasPressed = function(){
		console.log('关灯')
		this.light.setState(this.light.offLightState)
	}

	var Light = function(){
		this.offLightState = new OffLightState(this)
		this.weakLightState = new WeakLightState(this)
		this.strongLightState = new StrongLightState(this)
		this.button = null
	}
	Light.prototype.init = function(){
		var button = document.createElement('button')
		self = this
		this.button = document.body.appendChild(button)
		this.button.innerHTML = '开关'
		this.currState = this.offLightState
		this.button.onclick = function(){
			self.currState.buttonWasPressed()
		}
	}
	Light.prototype.setState = function(newState){
		this.currState = newState
	}

	var FSM = {
		off: {
			buttonWasPressed: function(){}
		},
		on: {
			buttonWasPressed: function()
		}
	}

	var delegate = function(client, delegation){
		return {
			buttonWasPressed: function(){
				return delegation.buttonWasPressed.apply(client, arguments)
			}
		}
	}
}
function f5(){
	var myImage = (function(){
		var imgNode = document.createElement('img')
		document.body.appendChild(imgNode)
		return {
			setSrc: function(src){
				imgNode.src = src
			}
		}
	})()
	var proxyImage = (function(){
		var img = new Image()
		img.onload = function(){
			myImage.setSrc(this.src)
		}
		return {
			setSrc: function(src){
				myImage.setSrc('loading.png')
				img.src = src
			}
		}
	})()
	proxyImage.setSrc('file.png')
}
function f6(){
	var each = function(obj, callback){
		var value,
			i = 0,
			length = obj.length,
			isArray = Array.form(obj)
		if (isArray) {
			for (; i < length; i++) {
				callback.call(obj[i], i, obj[i])
			}
		} else {
			for (i in obj) {
				value = callback.call(obj[i], i, obj[i])
			}
		}
		return obj
	}
	var appendDiv = function(data){
		each(data, function(i, n){
			var div = document.createElement('div')
			div.innerHTML = n
			document.body.appendChild(div)
		})
	}
}
function f7(){
	var getSingle = function(fn){
		var result
		return function(){
			return result || (result = fn.apply(this, arguments))
		}
	}
	var createLoginLayer = function(){		
		return document.createElement('div')
	}
	var createSingleLoginLayer = gerSingle(createLoginLayer)
}
function f8(){
	var User = function(){
		this.id = null
		this.name = null
	}
	User.prototype.setId = function(id){
		this.id = id
		return this
	}
	User.prototype.setName = function(name){
		this.name = name
		return this
	}
	console.log(new User().setId(60).setName('shemei'))
}






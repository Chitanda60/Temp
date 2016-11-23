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

var itemList = localStorage.itemList?JSON.parse(localStorage.itemList):[{content: "看书学习", isDone: false},{content: "王者荣耀", isDone: true}]
var inputTop =document.querySelector('.inputTop')
var todoArr = [{content: "王者荣耀", isDone: true}]
var doneArr = [{content: "看书学习", isDone: false}]
var todoList = document.querySelector('.todoList')
var doneList = document.querySelector('.doneList')
var checkBox = document.querySelector('.checkBox')
var mainDom = document.querySelector('.main')
var itemDom = document.querySelector('.item')
var todoNum = 0
var doneNum = 0


render()
inputTop.onkeypress = function(e){
	if(e.key=='Enter'&&inputTop.value!=''){
		console.log(inputTop.value)
		var temp = {
			content:inputTop.value,
			isDone:false
		}	
		itemList.push(temp)
		inputTop.value = ''
		render()
	}
}



mainDom.onclick = function(e){
	if(e.target.className=="iconfont icon-shanchu"){
		console.log(e)
		var index = e.target.dataset.index
		itemList.splice(index,1)
		render()
	}
	
}

mainDom.onchange = function(e){
	console.log(e)
	var index = e.target.dataset.index
	var isDone = e.target.checked
	if(isDone){
		itemList[index].isDone = true
	}else{
		itemList[index].isDone = false
	}
	render()
}

function render(){
	var todoNum = 0
	var doneNum = 0
	todoList.innerHTML = ``
	doneList.innerHTML = ``
	itemList.forEach(function(item,index){
		console.log(item)
		if(item.isDone){
			var newDone = document.createElement('div')
			newDone.className = 'done item'
			newDone.innerHTML =`
			<div class="choose"><input type="checkbox" class="checkBox" data-index='${index}' checked="checked" name="checkBox" id="" value="" /></div>
			<div class="text">${item.content}</div>
			<div class="delete"><span data-index='${index}' class="iconfont icon-shanchu"></span></div>
			`
			doneList.appendChild(newDone)
			doneNum++
			
		}else{
			var newTodo = document.createElement('div')
			newTodo.className = 'todo item'
			newTodo.innerHTML =`
				<div class="choose"><input type="checkbox" class="checkBox" data-index='${index}' name="class="checkBox"" id="" value="" /></div>
				<div class="text">${item.content}</div>
				<div class="delete"><span data-index='${index}' class="iconfont icon-shanchu"></span></div>
			`
			
			todoList.appendChild(newTodo)
			todoNum++
		}
		
	})
	var todoNumDom = document.querySelector('.todo.top .num')
	var doneNumDom = document.querySelector('.done.top .num')
	todoNumDom.innerHTML = todoNum
	doneNumDom.innerHTML = doneNum
	localStorage.itemList = JSON.stringify(itemList)
}

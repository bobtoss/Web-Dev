let message = document.querySelector('.text')
let button = document.querySelector('.button')
let toDoDiv = document.querySelector('.toDo')
let toDo = []
if(localStorage.getItem('toDo')){
    toDo =  JSON.parse(localStorage.getItem('toDo'))
    allTasks()
}
toDoDiv.addEventListener('change',function(event){
    let index = event.target.getAttribute('id');
    var text = document.getElementById('text_'+index)
    toDo[index].done=!toDo[index].done;
    if(toDo[index].done){
        text.style.textDecoration = 'line-through'
    }
    localStorage.setItem('toDo',JSON.stringify(toDo))
    allTasks()
})

button.addEventListener('click',function(){
    let newTask = {
        text : message.value,
        done : false
    }
    toDo.push(newTask)
    allTasks();
    localStorage.setItem('toDo',JSON.stringify(toDo))
})

function onClickDelete(el){
    console.log(Number(el.className))
    toDo.splice(Number(el.className),1)
    localStorage.setItem('toDo',JSON.stringify(toDo))
}
function allTasks(){
    let displayMessage = ''
    toDo.forEach(function(item,index){
        if(item.done){
            displayMessage += `
        <li id="li_${index}">
            <div id="div_${index}">
                <form>
                    <input name ="check" type='checkbox' id='${index}' ${item.done ? 'checked':0} >
                    <p id="text_${index}"style="text-decoration:line-through" >${item.text}</p>
                    <button class="${index}" type="submit" onclick="onClickDelete(this)"><i class="fa fa-trash"></i></button>
                </form>
            </div> 
        </li>
        `
        }else{
            displayMessage += `
        <li id="li_${index}">
            <div id="div_${index}">
                <form>
                    <input name ="check" type='checkbox' id='${index}' ${item.done ? 'checked':0} >
                    <p id="text_${index}" >${item.text}</p>
                    <button class="${index}" type="submit" onclick="onClickDelete(this)"><i class="fa fa-trash"></i></button>
                </form>
            </div> 
        </li>
        `
        }
        
        toDoDiv.innerHTML = displayMessage
    })
    
};
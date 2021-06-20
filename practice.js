const toDoForm = document.querySelector('#todo-Form');
const toDoInput = document.querySelector("#toDo-Form input");
const toDoList = document.querySelector('#todo-list');

const buttonn =document.createElement("button");
buttonn.innerText = "first";  
toDoList.appendChild(buttonn);

function deleteTodo(event){
    const li = (event.target.parentElement);    
    li.remove();
}

function paintTodo(){
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.innerText = "ｘ";  
  button.addEventListener("click",deleteTodo);

  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleClick(){
   
  paintTodo();
 }
 
 buttonn.addEventListener("click",handleClick);

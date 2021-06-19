const toDoForm = document.querySelector('#todo-Form');
const toDoInput = document.querySelector("#toDo-Form input");
const toDoList = document.querySelector('#todo-list');

function deleteTodo(event){
    const li = (event.target.parentElement);    
    li.remove();
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "ｘ";  
  button.addEventListener("click",deleteTodo);

  li.appendChild(span);  
  li.appendChild(button);
  toDoList.appendChild(li);
}


function handleToDoSubmit(event){
 event.preventDefault();
 const newTodo = toDoInput.value;
 toDoInput.value = "";  
//입력창에 있는 것 까지가 인풋 밸류임, 이걸 안하면, 입력후에 입력창에 있는 게 안 없어짐 
 console.log(newTodo, toDoInput.value);
 paintTodo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);

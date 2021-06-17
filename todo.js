const toDoForm = document.querySelector('#todo-Form');
const toDoInput = document.querySelector("#toDo-Form input");
const toDoList = document.querySelector('#todo-list');

function handleToDoSubmit(event){
 event.preventDefault();
 const newTodo = toDoInput.value;
 toDoInput.value = ""; //입력창에 있는 것 까지가 인풋 밸류임 
 console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit",handleToDoSubmit);
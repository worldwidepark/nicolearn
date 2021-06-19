const toDoForm = document.querySelector('#todo-Form');
const toDoInput = document.querySelector("#toDo-Form input");
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = "todos"

let toDos = []; //->항상 비어있따. 

function saveToDos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
  //localStorage 에는 Array형태로 저장하는게 불가능 하기때문에 넣을때 각각의 문자열로 넣어주면, 배열과 같은 효과 가 된다. 
}

function deleteTodo(event){
    const li = (event.target.parentElement);    
    li.remove();
    toDos = toDos.filter(toDo=> toDo.id !== parseInt(li.id)); //id 는 숫자이기때문에, 스트링에서숫자로 바꾸야함 
    saveToDos() // 바뀐값 한번더 세트해준다 . 
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
 const newTodoObj = {
  text: newTodo,
  id: Date.now(), //밀리세컨드
 }; //지울때 뭐를 지워야하는지 모르니까.각각의 리스트에 id를 넣어줌.  
 toDos.push(newTodoObj);  
 
 paintTodo(newTodoObj);
 saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos); //뱉을때 객체로 뱉는다. 
  toDos = parsedToDos;
  //parsedToDos.forEach((item)=>console.log("itme"));
  parsedToDos.forEach(paintTodo);
  }





  /* 
function sexyFilter(){

}
[1,2,3,4].filter(sexyFilter)


->sexyFilter(1)
sexyFilter(2)
sexyFilter(3)
sexyFilter(4) 

array 를 유지하고싶으면, 위의 4번의 sexfilter 가 true 를 리턴해야한다.
 
ex)

function sexyFilter(item){reture item !== 3 }
[1,2,3,4,5].filter(sexyFilter)
-> [1,2,4,5]

filter function gives me new array. 
*/
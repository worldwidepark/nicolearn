
const loginForm = document.querySelector("#login-form"); //querySelector choose id class etc so, needed 
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";

/*
const loginButton = loginForm.querySelector("button");
*/
/*
 const loginInput = document.querySelector("#longin-form input");
 const loginButton = document.querySelector("#longin-form button");
*/
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); // login-form 에 hidden 을 추가
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    painGreetings(username);
}

function painGreetings(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `I love you,　${username}`; 

}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);

}else{
  painGreetings(savedUsername);
}

  /*function onLoginBtnClick(){}
  const username = loginInput.value;
    if (username === ''){
      alert("please write your name");
  } else if(username.length> 15){
        alert('your name is too long.');
  }
}
*/



//loginButton.addEventListener("click", onLoginBtnClick);

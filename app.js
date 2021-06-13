
const loginForm = document.querySelector("#login-form"); //querySelector choose id class etc so, needed 
/*const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/
/*
 const loginInput = document.querySelector("#longin-form input");
 const loginButton = document.querySelector("#longin-form button");
*/

function onLoginSubmit(event){
    event.preventDefault();
    console.log(event);
}
loginForm.addEventListener("submit",onLoginSubmit);


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

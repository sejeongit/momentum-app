const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 반복되는 string들은 대문자 변수로 저장해놓기 - JS는 string이 틀리면 오류를 안띄우지만 변수명이 틀리면 오류를 띄워준다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){
  event.preventDefault(); // submit했을 때 브라우저의 새로고침 현상 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const usernameThatTheUserWrote = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
  paintGreetings(usernameThatTheUserWrote); // ! input 값을 인자로 받음
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 브라우저 키고 처음 실행됨
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  // show the greetings
  paintGreetings(savedUsername) // ! localStorage 값을 인자로 받음
}
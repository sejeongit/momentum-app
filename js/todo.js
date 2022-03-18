const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify() : 어떤 js코드이든 string으로 바꿔줌
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(text){
  const li = document.createElement("li"); // li 생성 (존재하지만, 위치값 x)
  const span = document.createElement("span"); // span 생성 (존재하지만, 위치값 x)
  span.innerText = text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // 생성한 li 안에 span을 자식으로 넣어줌
  li.appendChild(button);
  toDoList.appendChild(li); // html의 #todo-list에 li>span을 넣어줌
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // toDoInput의 현재 value를 새 변수에 복사 / 밑에서 value를 지워도 이 값엔 영향을 미치지 않음
  toDoInput.value = "";
  toDos.push(newTodo); // toDos 배열에 newTodo 집어넣기
  paintToDo(newTodo); // toDos 화면에 나타내기
  saveToDos(); // toDos localStorage에 저장하기
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY); 
console.log(savedToDos);
if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // JSON.parse() : string을 js의 값, 객체, 배열로 바꿔줌
  console.log(savedToDos);
}

// js는 array에 있는 각각의 item에 대해 function을 실행할 수 있게 해준다.

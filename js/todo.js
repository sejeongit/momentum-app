const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = []; // 빈 array로 시작하지만 const 대신 let을 사용해 업데이트 가능하게 만들기

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify() : 어떤 js코드이든 string으로 바꿔줌
}

function deleteToDo(event) {
  const li = event.target.parentElement; // 클릭 이벤트가 발생한 button의 부모 li 찾기
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 배열의 item들의 id가 클릭 이벤트가 발생한 li의 id와 다른지 확인하고 일치하는 item을 제외한 배열을 반환
  // * 우리가 newToDoObj에서 준 toDo.id의 자료형은 number이다. 그러나 HTML id의 기본 자료형은 string이므로, li.id(string)와 일치하는 id는 없다. 그러므로 li.id의 자료형을 number로 변환해준다.
  saveToDos(); // 반환된 배열을 localStorage에 저장
}

function paintToDo(newTodo){
  const li = document.createElement("li"); // li 생성 (존재하지만, HTML에 존재하지 않음)
  li.id = newTodo.id; // li의 id를 newToDoObj의 id로 넣어주기(삭제하기 위해 필요)
  const span = document.createElement("span"); // span 생성 (존재하지만, HTML에 존재하지 않음)
  span.innerText = newTodo.text; // newToDoObj(객체)를 받으므로 그중 text만 집어넣기
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
  const newToDoObj = {
    text: newTodo,
    id: Date.now(), // 랜덤한 밀리세컨드를 반환
  }
  toDos.push(newToDoObj); // toDos 배열에 newToDoObj 집어넣기
  paintToDo(newToDoObj); // toDos를 화면에 나타내기
  saveToDos(); // toDos를 localStorage에 저장하기
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); 

if(savedToDos !== null) { // localStorage에 정보가 존재한다면
  const parsedToDos = JSON.parse(savedToDos); // JSON.parse() : string을 js의 값, 객체, 배열로 바꿔줌
  toDos = parsedToDos; // 이전에 입력했던 toDos를 새로고침해도 지워지지 않게 저장해두기
  parsedToDos.forEach(paintToDo);
  // parsedToDos.forEach((item) => console.log("this is turn of ", item));
  // forEach() : array에 있는 각각의 item에 대해 function을 실행할 수 있게 해준다.
  // item을 인자로 넣으면 배열의 item의 정보를 보여줌(event와 유사)
  // -> 우리가 보여줄 item이 결국은 paintToDo의 newToDo 인자와 같으므로 그냥 paintToDo 함수를 forEach()의 인자로 대입해주면 된다. 
}

// filter() : 배열의 요소에 하나씩 실행해 false가 나오면 그 요소를 제외한 새로운 배열을 반환함. 기존의 배열은 그대로 존재. 배열의 요소들을 유지하려면 true를 반환해야함.
const arr = ["pizza", "banana", "tomato"];
function sexyFilter(food){ return food !== "banana"}
console.log(arr.filter(sexyFilter));
// (2) ['pizza', 'tomato']


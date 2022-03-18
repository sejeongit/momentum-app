const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg",]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // js에서 html의 요소들을 생성. *document에 넣어주지 않고 지금처럼 만들기만 한다면 요소는 존재하되 위치는 가지지 않는다.

bgImage.src = `img/${chosenImage}`; // property(속성) 추가

document.body.appendChild(bgImage); // html 문서의 가장 끝에 요소 추가
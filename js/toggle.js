const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener('click', handleTitleClick);


// function handleTitleClick() {
//   const clickedClass =  "clicked";
//   if(h1.classList.contains(clickedClass)){
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

// h1.addEventListener('click', handleTitleClick);


// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if(currentColor === "blue"){
//     newColor = "tomato";
//   }else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }


// h1.addEventListener('click', handleTitleClick);


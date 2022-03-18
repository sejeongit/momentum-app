const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 즉시 호출 : 웹사이트가 로드되자마자 getClock()을 실행하고 
setInterval(getClock, 1000); // 또 매초마다 다시 실행되게 하기(즉시 호출을 안하면 웹사이트가 로드되고 1초 후 시간을 띄움)
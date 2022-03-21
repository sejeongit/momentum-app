const API_KEY = "4e41d36fcf749bc6b806294a25f15ce4";

function onGeoOk(position) {
// 성공했을 때의 함수는 브라우저의 위치값을 인자로 받는다.
  const lat = position.coords.latitude; // 위치값.좌표값.위도
  const lon = position.coords.longitude; // 위치값.좌표값.경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    city.innerText = data.name;
  }); // fetch : 실제로 url에 갈 필요 없이 JS가 대신 url을 부름. - promise : 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어남
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 현재 위치 값을 불러옴. getCurrentPosition()은 두개의 인자를 받는데, 첫번째 인자는 위치값 불러오는 걸 성공했을 때 실행될 함수이고 두번째 인자는 위치값 불러오는 걸 실패했을 때 실행될 함수이다.
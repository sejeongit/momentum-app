function onGeoOk(position) {
// 성공했을 때의 함수는 브라우저의 위치값을 인자로 받는다.
  const lat = position.coords.latitude; // 위치값.좌표값.위도
  const lng = position.coords.longitude; // 위치값.좌표값.경도
  console.log("You live in", lat, lng);
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 현재 위치 값을 불러옴. getCurrentPosition()은 두개의 인자를 받는데, 첫번째 인자는 위치값 불러오는 걸 성공했을 때 실행될 함수이고 두번째 인자는 위치값 불러오는 걸 실패했을 때 실행될 함수이다.
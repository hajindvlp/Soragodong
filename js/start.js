function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function printMessage() {
  let answer = [
    "해라",
    "뭘 고민하냐 하고 싶은대로 해라",
    "원래 니가 그런걸 고민할 성격인가. 니 맘대로 해라.",
    "대답 할 가치가 없는 것 같다.",
    "살을 빼라",
    "당장 공부를 시작해라",
    "물을 2L정도 마셔보는 걸 추천한다.",
    "사과해라."
  ]
  let answerNum = answer.length;

  let msgElement = document.getElementById('message');

  msgElement.innerText = answer[getRandomInt(answerNum)];
}

function imageCircle(callback) {
  let container = document.getElementById('container');
  container.innerHTML = '<img src="./logo.png" alt="" id="cone" width="300px">';

  let coneImg = document.getElementById('cone');

  let id = setInterval(frame, 10);
  let aAngle = 1;
  let angle = 0;

  setTimeout(() => {
    clearInterval(id);
    callback();
  }, 3000)

  function frame() {
    angle += aAngle;
    coneImg.setAttribute("style", `transform: rotate(${angle}deg)`)
  }
}

function main()  {
  let button = document.getElementById('go');

  button.addEventListener('click', () => {
    let containter = document.getElementById('container');
    containter.innerHTML = '';
    imageCircle(() => {
      container.innerHTML = '<p id="message" style="font-size: 100px"> </p>';
      printMessage();
    });
  })
}

main();
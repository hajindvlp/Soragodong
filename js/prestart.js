function wait(ms) {
  var start = Date.now(),
      now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

const ani = (msg, callback) => {
  let elem = document.getElementById('message');
  let opacity = 0;
  let id = setInterval(frame, 50);
  let aOpacity = 0.03;

  elem.style.opacity = opacity;
  elem.innerText = msg;

  function frame() {
    if(opacity >= 1) aOpacity = -aOpacity, opacity += aOpacity;
    else if(opacity <= 0 && aOpacity <= 0) {
      clearInterval(id);
      callback();
    } 
    else {
      opacity += aOpacity;
      elem.style.opacity = opacity;
    }
  }
}

const main = () => {
  ani("자 마음을 비우고", () => {
    ani("마법의 소라고동님께 여쭤보세요.....", () => {
      wait(500);
      window.location.href = './index.html';
    });
  });
}

main();
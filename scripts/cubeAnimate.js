let imgBlock = document.querySelector(".wrapper");
let cube = document.querySelector('.cube');
let container = document.querySelector('.container');
let himeCube = document.querySelector('.home__cube');


window.addEventListener('load', () => {
  let isIos = iOS();

  if (isIos) {

    // Если эпл, показываем картинку вместо анимации
    container.style.display = 'none';
    himeCube.style.display = 'block';
  } else {

    // Если не эпл, вешаем событие "движение мыши" на 3d объект
    imgBlock.addEventListener('mousemove', (e) => {
      let leftCorsore = (Math.round(e.pageX - imgBlock.offsetWidth / 2) / 20);
      cube.style.transform = `rotateY(${(leftCorsore / 2)}deg)`;
    });
  };


  //функция-проверка на эпл. Если эпл, возвращает true
  function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)

      // iPad on iOS 13 detection
      || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  };
});

// ====================================================================================
// for mobile
window.addEventListener("deviceorientation", handleOrientation);

let isFirst = false;
let x, y;

function handleOrientation(e) {
  if (!isFirst) {
    x = e.beta;
    y = e.gamma;

    isFirst = true;
  } else {
    let leftCorsore = Math.round((e.gamma - y) / 2);

    cube.style.transform = `rotateY(${(leftCorsore / 2)}deg)`;
  }
}


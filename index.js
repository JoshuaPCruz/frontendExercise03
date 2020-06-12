document.addEventListener('click', event);
button = document.getElementsByClassName('btn');
function event(e) {
  let color;
  let textColor;
  const click = e.target;
  const btn = click;
  const btnClass = click.classList.value;
  function random(max, min) {
    let aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
    if (aleatorio === 2) {
      color = 'green';
      textColor = 'white';
    }
    if (aleatorio === 3) {
      color = 'red';
      textColor = 'white';
    }
    if (aleatorio === 4) {
      color = 'yellow';
    }
    if (aleatorio === 5) {
      color = 'blue';
      textColor = 'white';
    }
    if (aleatorio === 6) {
      color = 'orange'
    }
    return color;
  }
  random(0, 6);
  if (btnClass === 'btn') {
    btn.style.color = `${textColor}`;
    btn.style.background = `${color}`;
  }
}


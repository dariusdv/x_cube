let degrees = 0, bool = false, interval;

const rotate = () => {
  const cubes = document.querySelectorAll('.cube');
  Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${degrees}deg)`);
}

const changePlayPause = () => {
  const i = document.querySelector('.play-pause i');
  const cls = i.classList[1];
  if (cls === 'fa-play') {
    i.classList.remove('fa-play');
    i.classList.add('fa-pause');
  } else {
    i.classList.remove('fa-pause');
    i.classList.add('fa-play');
  }
}

const playPause = () => {
  if(!bool) {
    interval = setInterval(() => {
      degrees -= 90;
      rotate();
    }, 3000);
    changePlayPause();
    bool = true;
  } else {
    clearInterval(interval);
    changePlayPause();
    bool = false;
  }
}

document.querySelector('.arrow-left').addEventListener('click', () => {
  degrees += 90;
  rotate();
  if(bool) {
    playPause();
  }
});

document.querySelector('.arrow-left').addEventListener('mouseover', () => {
  degrees += 25;
  rotate();
});

document.querySelector('.arrow-left').addEventListener('mouseout', () => {
  degrees -= 25;
  rotate();
});

document.querySelector('.arrow-right').addEventListener('click', () => {
  degrees -= 90;
  rotate();
  if(bool) {
    playPause();
  }
});

document.querySelector('.arrow-right').addEventListener('mouseover', () => {
  degrees -= 25;
  rotate();
});

document.querySelector('.arrow-right').addEventListener('mouseout', () => {
  degrees += 25;
  rotate();
});

document.querySelector('.play-pause').addEventListener('click', () => {
  playPause();
});
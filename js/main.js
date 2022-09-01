console.log('Sample JavaScript #5 HW #17');
let container = null;
let prevIndicator = null;

function createSlides(n) {
  let slidesContainer = document.createElement('ul');
  slidesContainer.setAttribute('class', 'slides');
  for (let i = 0; i < n; i++) {
    let slideItem = document.createElement('li');
    let slideLink = document.createElement('a');
    slideLink.setAttribute('href', '#');
    slideItem.setAttribute(
      'class',
      i === 0 ? 'slides__item active' : 'slides__item'
    );
    slideItem.appendChild(slideLink);
    slidesContainer.appendChild(slideItem);
  }

  container.appendChild(slidesContainer);
}

function createIndicators(n) {
  let indicatorsContainer = document.createElement('div');
  indicatorsContainer.setAttribute('class', 'indicators');
  for (let i = 0; i < n; i++) {
    let indicatorItem = document.createElement('span');
    indicatorItem.setAttribute(
      'class',
      i === 0 ? 'indicators__item active' : 'indicators__item'
    );
    indicatorItem.setAttribute('data-slide-to', i);
    indicatorsContainer.appendChild(indicatorItem);
  }

  container.appendChild(indicatorsContainer);
}

function createControls() {
  let controlsContainer = document.createElement('div');
  controlsContainer.setAttribute('class', 'controls');
  for (let i = 0; i < 3; i++) {
    let controlsItem = document.createElement('div');
    let controlsIcon = document.createElement('i');
    controlsItem.setAttribute(
      'class',
      i === 0
        ? 'controls__item controls__prev'
        : i === 1
        ? 'controls__item controls__next'
        : 'controls__item controls__pause'
    );
    controlsIcon.setAttribute(
      'class',
      i === 0
        ? 'fas fa-chevron-left'
        : i === 1
        ? 'fas fa-chevron-right'
        : 'fas fa-play'
    );
    controlsContainer.appendChild(controlsItem);
    controlsContainer.appendChild(controlsIcon);
  }

  container.appendChild(controlsContainer);
}

function createStyles() {
  let styleContainer = document.createElement('style');
  let styleContent = `
  .slides,
  .controls {position:relative}
  .indicators {
    display: flex;
  }
  .slides {
    background-color: green;
  }
  .indicators__item{
    display:block;
    width: 125px;
    height: 31px;
    background-color:  blue;
    border: 2px solid black;
    margin: 10px;
  }
  .controls__item{
    display:block;
    width: 125px;
    height: 31px;
    background-color:yellow;
    border: 2px solid black;
    margin: 10px;
  }`;
  container.appendChild(styleContainer);
  styleContainer.innerHTML = styleContent;
}
function handler(event) {
  let target = event.target;
  if (target.classList.contains('indicators__item'))
    target.style.backgroundColor = 'red';
  if (prevIndicator !== null) prevIndicator.removeAttribute('style');
  prevIndicator = target;
}

function setListener() {
  let indicatorListener = document.querySelector('.indicators');
  indicatorListener.addEventListener('click', handler);
}

function createCarousel(slidesCount = 5) {
  container = document.querySelector('#carousel');
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyles();
  setListener();
}

createCarousel();

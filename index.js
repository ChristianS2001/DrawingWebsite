const canvas = document.getElementById('drawing-board');
const canvas = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click'), e => {
    if (e.target.id === 'clear') {
        CSSTransition.clearRect(0,0, canvas.width, canvas.height);
    }
}

//6:01 thats where you left off in the video make sure to rewatch the video in it's entirity to better
//understand what it is you are doing!

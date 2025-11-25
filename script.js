const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.game_over');

// 1. Create the audio object (Make sure you have a file named 'gameover.mp3')
const gameOverSound = new Audio('gameover.mp3');

const jump = () => {
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  const cloudsPosition = +window.getComputedStyle(clouds).left.replace('px', '');

  // 2. Updated collision for smaller Mario (80px) and wider Pipe (100px)
  // We changed 120 to 100 because the pipe is 100px wide
  if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    clouds.style.animation = 'none';
    clouds.style.left = `${cloudsPosition}px`;

    mario.src = "images/game-over.png";
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    gameOver.textContent = "Game over";
    
    // 3. Play the sound!
    gameOverSound.play();

    clearInterval(loop);
  }
}, 10);

document.addEventListener('keydown', jump);
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', function() {
    moveToNextSlide();
});

document.getElementById('prev').addEventListener('click', function() {
    moveToPrevSlide();
});

dots.forEach(dot => {
    dot.addEventListener('click', function() {
        const slideIndex = this.getAttribute('data-slide');
        goToSlide(slideIndex);
    });
});

function moveToNextSlide() {
    if (currentSlide === totalSlides - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSlide();
}

function moveToPrevSlide() {
    if (currentSlide === 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide--;
    }
    updateSlide();
}

function goToSlide(slideIndex) {
    currentSlide = parseInt(slideIndex);
    updateSlide();
}

function updateSlide() {
    // Move slider
    const offset = -currentSlide * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}


// Handle mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close the menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Pre-loader\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var loader = document.getElementById("pre-loader");
window.addEventListener("load", function(){
  setTimeout(function(){
    loader.style.display = "none";
  },0.0001);
});

// Game script\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const board = Array(9).fill(null);
let currentPlayer = 'X';
let isGameActive = true;

function makeMove(index) {
  if (!board[index] && isGameActive) {
    board[index] = currentPlayer;
    document.querySelectorAll('.cell')[index].innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateStatus();
  }
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      document.getElementById('status').innerText = `Player ${board[a]} wins!`;
      isGameActive = false;
      return;
    }
  }

  if (!board.includes(null)) {
    document.getElementById('status').innerText = "It's a tie!";
    isGameActive = false;
  }
}

function updateStatus() {
  if (isGameActive) {
    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
  }
}

function resetGame() {
  board.fill(null);
  document.querySelectorAll('.cell').forEach(cell => (cell.innerText = ''));
  currentPlayer = 'X';
  isGameActive = true;
  updateStatus();
}

// Initialize status
updateStatus();


// Space Invader game------------------------------------------------------------------------
//let player, score, aliens, bullets;
//let alienSpeed = 1;
//let bulletSpeed = 5;
//let gameInterval, alienInterval;

//function startGame() {
 // score = 0;
  //document.getElementById('score').innerText = `Score: ${score}`;
  //player = document.getElementById('player');
  //aliens = [];
  //bullets = [];
  
  // Create initial aliens
  //createAliens();
  //gameInterval = setInterval(gameLoop, 20);
  //alienInterval = setInterval(moveAliens, 1000);
//}

//function createAliens() {
  //const gameArea = document.getElementById('game-area');
  //for (let i = 0; i < 6; i++) {
    //let alien = document.createElement('div');
    //alien.classList.add('alien');
    //alien.style.top = '0px';
    //alien.style.left = `${i * 60 + 10}px`;
    //gameArea.appendChild(alien);
    //aliens.push(alien);
  //}
//}

//function moveAliens() {
  //aliens.forEach(alien => {
    //let currentTop = parseInt(alien.style.top);
    //alien.style.top = currentTop + alienSpeed * 20 + 'px';
    //if (currentTop > 450) {
      //endGame();
    //}
  //});
//}

//function movePlayer(e) {
  //let left = parseInt(player.style.left);
  //if (e.key === 'ArrowLeft' && left > 0) {
    //player.style.left = left - 10 + 'px';
  //} else if (e.key === 'ArrowRight' && left < 350) {
    //player.style.left = left + 10 + 'px';
  //} else if (e.key === ' ') {
    //shootBullet();
  //}
//}

//function shootBullet() {
  //let bullet = document.createElement('div');
  //bullet.classList.add('bullet');
  //bullet.style.left = parseInt(player.style.left) + 22 + 'px';
  //bullet.style.top = parseInt(player.style.top) - 20 + 'px';
  //document.getElementById('game-area').appendChild(bullet);
  //bullets.push(bullet);
//}

//function moveBullets() {
  //bullets = bullets.filter(bullet => {
    //let top = parseInt(bullet.style.top);
    //bullet.style.top = top - bulletSpeed + 'px';
    //if (top < 0) {
     // bullet.remove();
      //return false;
   // }
    //return true;
  //});
//}

//function checkCollision() {
  //bullets.forEach(bullet => {
    //aliens.forEach(alien => {
     // const bulletRect = bullet.getBoundingClientRect();
      //const alienRect = alien.getBoundingClientRect();
      //if (
        //bulletRect.left < alienRect.left + alienRect.width &&
        //bulletRect.left + bulletRect.width > alienRect.left &&
        //bulletRect.top < alienRect.top + alienRect.height &&
        //bulletRect.top + bulletRect.height > alienRect.top
      //) {
        //alien.remove();
        //bullet.remove();
        //aliens = aliens.filter(a => a !== alien);
        //bullets = bullets.filter(b => b !== bullet);
        //score++;
        //document.getElementById('score').innerText = `Score: ${score}`;
      //}
    //});
  //});
//}

//function gameLoop() {
 // moveBullets();
  //checkCollision();
  //if (aliens.length === 0) {
    //clearInterval(gameInterval);
    //clearInterval(alienInterval);
    //alert('You won!');
  //}
//}

//function endGame() {
  //clearInterval(gameInterval);
  //clearInterval(alienInterval);
  //alert('Game Over! Try again.');
  //document.querySelectorAll('.alien').forEach(alien => alien.remove());
  //document.querySelectorAll('.bullet').forEach(bullet => bullet.remove());
  //aliens = [];
  //bullets = [];
//}

//window.addEventListener('keydown', movePlayer);
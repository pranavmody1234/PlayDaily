function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
function scrollCLeft() {
const carousel = document.querySelector('.date-carousel');
carousel.scrollBy({ left: -100, behavior: 'smooth' }); // Ensure the negative value for left
}

function scrollCRight() {
const carousel = document.querySelector('.date-carousel');
carousel.scrollBy({ left: 100, behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', function() {
    const gamesContainer = document.querySelector('.games-container');
    const games = [
        { title: 'Fill in the blanks', imgSrc: 'game1.jpeg' },
        { title: 'Memory Match', imgSrc: 'game1.jpeg' },
        { title: 'Fill in the blanks', imgSrc: 'game1.jpeg' },
        { title: 'Memory Match', imgSrc: 'game1.jpeg' }
    ];

    games.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game');
        gameDiv.innerHTML = `
            <img src="${game.imgSrc}" alt="${game.title}" style="width: 100%;">
            <div class="center-text"><p>${game.title}</p></div>
        `;
        gamesContainer.appendChild(gameDiv);
    });
});


document.addEventListener('DOMContentLoaded', function() {
const leftButton = document.querySelector('.left-scroll');
const rightButton = document.querySelector('.right-scroll');
const carousel = document.querySelector('.date-carousel');

// Function to update button visibility
function updateButtonVisibility() {
// Check if we are at the start of the carousel
leftButton.style.visibility = carousel.scrollLeft > 0 ? 'visible' : 'hidden';

// Check if we are at the end of the carousel
const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
rightButton.style.visibility = carousel.scrollLeft < maxScrollLeft ? 'visible' : 'hidden';
}

// Attach event listeners for scrolling
leftButton.addEventListener('click', function() {
carousel.scrollBy({ left: -100, behavior: 'smooth' });
updateButtonVisibility();
});

rightButton.addEventListener('click', function() {
carousel.scrollBy({ left: 100, behavior: 'smooth' });
updateButtonVisibility();
});

// Initial check on load
updateButtonVisibility();

// Check after any scroll event
carousel.addEventListener('scroll', updateButtonVisibility);
});
function startCountdown(duration, display) {
let timer = duration, hours, minutes, seconds;

const countdown = setInterval(function () {
hours = parseInt(timer / 3600, 10);
minutes = parseInt((timer % 3600) / 60, 10);
seconds = parseInt(timer % 60, 10);

hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

display.textContent = hours + ":" + minutes + ":" + seconds;

if (--timer < 0) {
  timer = duration; // Reset timer automatically
}
}, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
const timeDisplay = document.getElementById('time');
const duration = 24 * 60 * 60; // 24 hours in seconds
startCountdown(duration, timeDisplay);
});
document.addEventListener('DOMContentLoaded', () => {
    const backgroundContainer = document.getElementById('background-elements');

    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDelay = `${Math.random() * 10}s`;
        backgroundContainer.appendChild(flower);

        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 10}s`;
        backgroundContainer.appendChild(heart);
    }
});
let player;
let isPaused = false;

// Fungsi ini dipanggil ketika API IFrame YouTube siap
function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytPlayer', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Fungsi ini dipanggil ketika pemutar siap
function onPlayerReady(event) {
    player.playVideo();

    document.getElementById('toggleButton').addEventListener('click', function() {
        if (isPaused) {
            player.playVideo();
            this.innerText = 'Pause';
        } else {
            player.pauseVideo();
            this.innerText = 'Resume';
        }
        isPaused = !isPaused;
    });
}

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('mp3Player');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const enterButton = document.getElementById('enterButton');

    enterButton.addEventListener('click', function() {
        audio.play();
        welcomeScreen.style.display = 'none';
    });
});




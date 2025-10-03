const songs = [
  "songs/beloved.mp3",
  "songs/pure.mp3",
  "songs/purest.mp3",
  "songs/purestofheart.mp3"
];

const titles = [
  "beloved",
  "pure",
  "purest",
  "purestofheart"
];

let currentSong = 0;

const audioPlayer = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const nextBtn = document.getElementById("nextBtn");
const nowPlaying = document.getElementById("nowPlaying");
const playlistItems = document.querySelectorAll("#playlist li");
const reels = document.querySelectorAll(".reel");

// Typewriter message
const messages = [
  "Welcome to the party!",
  "Click ▶️ to begin the soundtrack.",
  "Follow me,thepurestofvessels on Instagram."
];
let msgIndex = 0;
let charIndex = 0;
const typewriter = document.getElementById("typewriterText");

function typeMessage() {
  if (msgIndex >= messages.length) return;
  const message = messages[msgIndex];
  if (charIndex < message.length) {
    typewriter.textContent += message.charAt(charIndex);
    charIndex++;
    setTimeout(typeMessage, 50);
  } else {
    msgIndex++;
    charIndex = 0;
    setTimeout(() => {
      typewriter.textContent = "";
      typeMessage();
    }, 1800);
  }
}

typeMessage();

playBtn.addEventListener("click", () => {
  audioPlayer.play();
  reels.forEach(reel => reel.style.animationPlayState = "running");
});

pauseBtn.addEventListener("click", () => {
  audioPlayer.pause();
  reels.forEach(reel => reel.style.animationPlayState = "paused");
});

nextBtn.addEventListener("click", () => {
  nextSong();
});

audioPlayer.addEventListener("ended", () => {
  nextSong();
});

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadAndPlayCurrentSong();
}

function loadAndPlayCurrentSong() {
  audioPlayer.src = songs[currentSong];
  audioPlayer.play();
  nowPlaying.textContent = "Now Playing: " + titles[currentSong];
  updateActiveSong();
  reels.forEach(reel => reel.style.animationPlayState = "running");
}

function updateActiveSong() {
  playlistItems.forEach((item, index) => {
    item.classList.toggle("active", index === currentSong);
  });
}

playlistItems.forEach(item => {
  item.addEventListener("click", () => {
    const index = parseInt(item.getAttribute("data-index"));
    if (!isNaN(index)) {
      currentSong = index;
      loadAndPlayCurrentSong();
    }
  });
});

nowPlaying.textContent = "Now Playing: " + titles[currentSong];
updateActiveSong();


const songs = [
  "/BelovedHeart4.mp3",
  "/SongforthePurestofHeart.mp3",
  "/BirthdaysongforthePurestofHeart(2).mp3",
  "/PurestofHeart.mp3"
];

const titles = [
  "Song BelovedHeart",
  "Song SongforthePurestofHeart",
  "Song BirthdaysongforthePurestofHeart(2)",
  "Song PurestofHeart",
];

let currentSong = 0;

const audioPlayer = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const nextBtn = document.getElementById("nextBtn");
const nowPlaying = document.getElementById("nowPlaying");
const playlistItems = document.querySelectorAll("#playlist li");

playBtn.addEventListener("click", () => {
  audioPlayer.play();
});

pauseBtn.addEventListener("click", () => {
  audioPlayer.pause();
});

nextBtn.addEventListener("click", () => {
  nextSong();
});

audioPlayer.addEventListener("ended", () => {
  nextSong();
});

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  audioPlayer.src = songs[currentSong];
  nowPlaying.textContent = "Now Playing: " + titles[currentSong];
  audioPlayer.play();
  updateActiveSong();
}

function updateActiveSong() {
  playlistItems.forEach((item, index) => {
    item.classList.toggle("active", index === currentSong);
  });
}

// Initial highlight
updateActiveSong();
});

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  audioPlayer.src = songs[currentSong];
  nowPlaying.textContent = "Now Playing: " + titles[currentSong];
  audioPlayer.play();
}

// Update now playing at start
nowPlaying.textContent = "Now Playing: " + titles[currentSong];

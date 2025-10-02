const songs = [
  "/BelovedHeart4.mp3",
  "/SongforthePurestofHeart.mp3",
  "/BirthdaysongforthePurestofHeart(2).mp3",
  "/song5.mp3"
];

const titles = [
  "Song BelovedHeart",
  "Song PurestofHeart",
  "Song SongforthePurestofHeart",
  "Song BirthdaySong",
  "Song Five"
];

let currentSong = 0;

const audioPlayer = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const nextBtn = document.getElementById("nextBtn");
const nowPlaying = document.getElementById("nowPlaying");

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
}

// Update now playing at start
nowPlaying.textContent = "Now Playing: " + titles[currentSong];

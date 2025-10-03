// Song file paths
const songs = [
  "songs/beloved.mp3",
  "songs/pure.mp3",
  "songs/purest.mp3",  
  "songs/purestofheart.mp3",
];

// Titles shown in "Now Playing"
const titles = [
  "beloved",
  "pure",
  "purest",
  "purestofheart",
];

let currentSong = 0;

// Get DOM elements
const audioPlayer = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const nextBtn = document.getElementById("nextBtn");
const nowPlaying = document.getElementById("nowPlaying");
const playlistItems = document.querySelectorAll("#playlist li");

// Play current song
playBtn.addEventListener("click", () => {
  audioPlayer.play();
});

// Pause
pauseBtn.addEventListener("click", () => {
  audioPlayer.pause();
});

// Next song
nextBtn.addEventListener("click", () => {
  nextSong();
});

// Auto-play next song on end
audioPlayer.addEventListener("ended", () => {
  nextSong();
});

// Switch to next song
function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadAndPlayCurrentSong();
}

// Load and play the current song
function loadAndPlayCurrentSong() {
  audioPlayer.src = songs[currentSong];
  audioPlayer.play();
  nowPlaying.textContent = "Now Playing: " + titles[currentSong];
  updateActiveSong();
}

// Highlight current song in list
function updateActiveSong() {
  playlistItems.forEach((item, index) => {
    item.classList.toggle("active", index === currentSong);
  });
}

// Allow clicking on a song to play it
playlistItems.forEach(item => {
  item.addEventListener("click", () => {
    const index = parseInt(item.getAttribute("data-index"));
    if (!isNaN(index)) {
      currentSong = index;
      loadAndPlayCurrentSong();
    }
  });
});

// Initial highlight and song info
nowPlaying.textContent = "Now Playing: " + titles[currentSong];
updateActiveSong();

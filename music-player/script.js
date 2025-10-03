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

playBtn.addEventListener("click", () => {
  audioPlayer.play();
  reels.forEach(reel => {
    reel.style.animationPlayState = "running";
  });
});

pauseBtn.addEventListener("click", () => {
  audioPlayer.pause();
  reels.forEach(reel => {
    reel.style.animationPlayState = "paused";
  });
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
  reels.forEach(reel => {
    reel.style.animationPlayState = "running";
  });
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
// Next
nextBtn.addEventListener("click", () => {
  nextSong();
});

// Auto-next
audioPlayer.addEventListener("ended", () => {
  nextSong();
});

// Play next song
function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadAndPlayCurrentSong();
}

// Load current song
function loadAndPlayCurrentSong() {
  audioPlayer.src = songs[currentSong];
  audioPlayer.play();
  nowPlaying.textContent = "Now Playing: " + titles[currentSong];
  updateActiveSong();
}

// Highlight active song
function updateActiveSong() {
  playlistItems.forEach((item, index) => {
    item.classList.toggle("active", index === currentSong);
  });
}

// Click to play song
playlistItems.forEach(item => {
  item.addEventListener("click", () => {
    const index = parseInt(item.getAttribute("data-index"));
    if (!isNaN(index)) {
      currentSong = index;
      loadAndPlayCurrentSong();
    }
  });
});

// Initial state
nowPlaying.textContent = "Now Playing: " + titles[currentSong];
updateActiveSong();

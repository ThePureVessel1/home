<ul id="playlist">
      <li>01 - BelovedHeart4</li>
      <li>02 - SongforPurestofHeart</li>
      <li>03 - BirthdaySongforthePurestofHeart</li>
      <li>04 - PurestofHeart</li>
    </ul>
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

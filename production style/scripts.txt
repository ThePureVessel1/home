                <!-- Director's Cut Radio Section -->
                <section class="py-12 px-4 bg-hollow-dark/50">
                    <div class="container mx-auto text-center">
                        <h2 class="text-2xl font-cinzel text-glow mb-8 uppercase tracking-wide">Director's Cut: Soundtrack Visions</h2>
                        <p class="text-muted-glow mb-6 font-inter max-w-3xl mx-auto">
                            Curated ambient tracks inspired by Hallownest's depths. Perfect for commissions—custom sound design available. 
                            Let the music weave your story as the cassette spins eternally.
                        </p>
                        <div id="radio-player" class="radio-player">
                            <div class="directors-cut-title">🎬 Director's Cut Radio</div>
                            <div class="cassette-shell">
                                <div class="cassette-label">THV Soundtrack Reel</div>
                                <div class="reels">
                                    <div class="reel" id="left-reel"></div>
                                    <div class="reel" id="right-reel"></div>
                                </div>
                                <div class="tape-counter">
                                    <div class="counter-progress" id="progress-bar"></div>
                                </div>
                            </div>
                            <div class="controls">
                                <button class="play-pause-btn" id="play-pause-btn">▶</button>
                            </div>
                            <div class="current-song" id="current-song">Ready to play the void's symphony...</div>
                        </div>
                    </div>
                </section>

                // Player Logic (add this right after the innerHTML assignment, inside the setTimeout)
                // Playlist: Replace URLs with your actual MP3 files (e.g., from GitHub)
                const playlist = [
                    { title: 'Void Awakening', src: 'https://example.com/songs/void-awakening.mp3' },
                    { title: 'Hallownest Shadows', src: 'https://example.com/songs/hallownest-shadows.mp3' },
                    { title: 'Essence Whisper', src: 'https://example.com/songs/essence-whisper.mp3' },
                    { title: 'Abyssal Reel', src: 'https://example.com/songs/abyssal-reel.mp3' }
                ];

                let currentTrackIndex = 0;
                let audio = new Audio();
                audio.volume = 0.5; // Start at 50% volume
                audio.preload = 'auto';

                const playPauseBtn = document.getElementById('play-pause-btn');
                const leftReel = document.getElementById('left-reel');
                const rightReel = document.getElementById('right-reel');
                const progressBar = document.getElementById('progress-bar');
                const currentSong = document.getElementById('current-song');

                // Load and play current track
                function loadTrack(index) {
                    if (index >= playlist.length) index = 0; // Loop playlist
                    currentTrackIndex = index;
                    audio.src = playlist[index].src;
                    currentSong.textContent = `Now Playing: ${playlist[index].title}`;
                    audio.load();
                }

                // Update progress bar
                audio.addEventListener('timeupdate', () => {
                    if (audio.duration) {
                        const progress = (audio.currentTime / audio.duration) * 100;
                        progressBar.style.width = progress + '%';
                    }
                });

                // Auto-advance to next track
                audio.addEventListener('ended', () => {
                    loadTrack(currentTrackIndex + 1);
                    if (!audio.paused) audio.play().catch(e => console.log('Autoplay prevented:', e));
                });

                // Play/Pause toggle
                playPauseBtn.addEventListener('click', () => {
                    if (audio.paused) {
                        audio.play().catch(e => console.log('Play failed:', e));
                        playPauseBtn.textContent = '⏸';
                        playPauseBtn.classList.add('playing');
                        leftReel.classList.add('playing');
                        rightReel.classList.add('playing');
                    } else {
                        audio.pause();
                        playPauseBtn.textContent = '▶';
                        playPauseBtn.classList.remove('playing');
                        leftReel.classList.remove('playing');
                        rightReel.classList.remove('playing');
                    }
                });

                // Initialize: Load first track (play on user click for compliance)
                loadTrack(0);

document.addEventListener("DOMContentLoaded", () => {
                const video = document.querySelector(".fullscreen-video-wrap video");
                const playbackBtn = document.querySelector(".playback");
                const volumeBtn = document.querySelector(".volume");

                // Toggle playback
                playbackBtn.addEventListener("click", () => {
                    if (video.paused) {
                        video.play();
                        playbackBtn.setAttribute("aria-pressed", "true");
                        playbackBtn.querySelector("img").src = "images/icons/pause.svg";
                    } else {
                        video.pause();
                        playbackBtn.setAttribute("aria-pressed", "false");
                        playbackBtn.querySelector("img").src = "images/icons/play.svg";
                    }
                });

                // Toggle volume
                volumeBtn.addEventListener("click", () => {
                    video.muted = !video.muted;
                    volumeBtn.setAttribute("aria-pressed", String(video.muted));
                    volumeBtn.querySelector("img").src = video.muted
                        ? "images/icons/soundOff.svg"
                        : "images/icons/soundOn.svg";
                });
            });
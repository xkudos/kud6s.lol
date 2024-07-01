// /src/scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('bg-video');
    const playButton = document.getElementById('play-button');
    const muteButton = document.getElementById('mute-button');
    const centerBox = document.getElementById('center-box');

    // Set initial volume and mute state
    video.volume = 0.25; // Set volume to 25%

    playButton.addEventListener('click', function() {
        video.muted = false; // Unmute the video
        video.play().then(function() {
            playButton.style.display = 'none'; // Hide play button on successful play
            muteButton.style.display = 'block'; // Show mute button
            video.classList.add('no-blur'); // Remove blur from video
            centerBox.classList.add('show'); // Show the center box with fade-in effect
        }).catch(function(error) {
            console.error('Error attempting to play the video:', error);
        });
    });

    muteButton.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            muteButton.innerHTML = '<i class="fas fa-volume-up"></i>'; // Change to unmuted icon
        } else {
            video.muted = true;
            muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>'; // Change to muted icon
        }
    });
});

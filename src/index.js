document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bg-video');

    if (video) {
        // Initial volume setting
        video.volume = 0.065;

        // Click me button functionality
        const clickMeButton = document.querySelector('.click-me-btn');
        if (clickMeButton) {
            clickMeButton.addEventListener('click', () => {
                clickMeButton.style.display = 'none'; // Hide the click me button
                video.style.filter = 'brightness(35%)'; // Remove the blur effect
                document.getElementById('middle').style.display = 'flex'; // Show the middle container
                document.getElementById('about').style.display = 'flex'; // Show the about container
                document.getElementById('contact').style.display = 'flex'; // Show the contact container
                document.getElementById('work').style.display = 'flex'; // Show the work container
                document.querySelector('.mute-btn').style.display = 'flex';
                video.muted = false; // Unmute the video
                video.play(); // Play the video
            });
        }

        // Mute button functionality
        const muteButton = document.querySelector('.mute-btn');
        if (muteButton) {
            muteButton.addEventListener('click', () => {
                if (video.muted) {
                    video.muted = false;
                    video.style.filter = 'brightness (35%)';
                    muteButton.querySelector('i').classList.replace('fa-volume-mute', 'fa-volume-up');
                } else {
                    video.muted = true;
                    muteButton.querySelector('i').classList.replace('fa-volume-up', 'fa-volume-mute');
                }
            });
        }
    }

    // Existing code for show/hide containers
    function showabout(){
        $("#about_container").css("display","inherit");
        $("#about_container").addClass("animated slideInLeft");
        setTimeout(function(){
            $("#about_container").removeClass("animated slideInLeft");
        },800);
    }
    function closeabout(){
        $("#about_container").addClass("animated slideOutLeft");
        setTimeout(function(){
            $("#about_container").removeClass("animated slideOutLeft");
            $("#about_container").css("display","none");
        },800);
    }
    function showwork(){
        $("#work_container").css("display","inherit");
        $("#work_container").addClass("animated slideInRight");
        setTimeout(function(){
            $("#work_container").removeClass("animated slideInRight");
        },800);
    }
    function closework(){
        $("#work_container").addClass("animated slideOutRight");
        setTimeout(function(){
            $("#work_container").removeClass("animated slideOutRight");
            $("#work_container").css("display","none");
        },800);
    }
    function showcontact(){
        $("#contact_container").css("display","inherit");
        $("#contact_container").addClass("animated slideInUp");
        setTimeout(function(){
            $("#contact_container").removeClass("animated slideInUp");
        },800);
    }
    function closecontact(){
        $("#contact_container").addClass("animated slideOutDown");
        setTimeout(function(){
            $("#contact_container").removeClass("animated slideOutDown");
            $("#contact_container").css("display","none");
        },800);
    }

    document.getElementById('about').addEventListener('click', showabout);
    document.getElementById('work').addEventListener('click', showwork);
    document.getElementById('contact').addEventListener('click', showcontact);

    document.getElementById('contactClose').addEventListener('click', closecontact);
    document.getElementById('workClose').addEventListener('click', closework);
    document.getElementById('aboutClose').addEventListener('click', closeabout);

    // Valorant and Snapchat functionality
    function copyButton(text) {
        navigator.clipboard.writeText(text)
            .then(() => alert('Copied Valorant Username.'))
            .catch(err => console.error('Failed to copy text: ', err));
    }

    document.getElementById('copyButton').addEventListener('click', event => {
        event.preventDefault();
        copyButton('ruby#7th');
    });

    function copySnapButton(text) {
        navigator.clipboard.writeText(text)
            .then(() => alert('Copied Snapchat username.'))
            .catch(err => console.error('Failed to copy text: ', err));
    }

    document.getElementById('copySnapButton').addEventListener('click', event => {
        event.preventDefault();
        copySnapButton('kud6s');
    });

    // Discord form submission
    document.getElementById('sendButton').addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        if (!name || !message) {
            alert('Please fill out all fields.');
            return;
        }

        const postUrl = 'https://webhook.lewisakura.moe/api/webhooks/1282793636198613056/wKSGwOp0kdKHAa8nidgpaYDpKt68DYNxUwh6oD2zD4BnADEsNDSHwnRLeAXc_MDkbzQm';

        const payload = {
            "content": "<@876955739409743892>",
            "embeds": [
                {
                    "title": `Name: ${name}`,
                    "description": `**Message:**\n${message}`,
                    "color": 16448250
                }
            ],
            "attachments": []
        };

        fetch(postUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })
        .then(response => response.ok ? response.json() : Promise.reject('Network response was not ok'))
        .then(() => {
            alert('Message sent!');
            document.getElementById('discordForm').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Message sent!');
            document.getElementById('discordForm').reset();
        });
    });
});

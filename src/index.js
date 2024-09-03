// Show and hide functions with animation handling
function showabout(){
    $("#about_container").css("display","inherit").addClass("animated slideInLeft");
    setTimeout(() => $("#about_container").removeClass("animated slideInLeft"), 800);
}

function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(() => {
        $("#about_container").removeClass("animated slideOutLeft").css("display","none");
    }, 800);
}

function showwork(){
    $("#work_container").css("display","inherit").addClass("animated slideInRight");
    setTimeout(() => $("#work_container").removeClass("animated slideInRight"), 800);
}

function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(() => {
        $("#work_container").removeClass("animated slideOutRight").css("display","none");
    }, 800);
}

function showcontact(){
    $("#contact_container").css("display","inherit").addClass("animated slideInUp");
    setTimeout(() => $("#contact_container").removeClass("animated slideInUp"), 800);
}

function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(() => {
        $("#contact_container").removeClass("animated slideOutDown").css("display","none");
    }, 800);
}

// Hide loading and box elements after animation
setTimeout(() => {
    $("#loading").addClass("animated fadeOut");
    setTimeout(() => {
        $("#loading").removeClass("animated fadeOut").css("display","none");
        $("#box").css("display","none");
        $("#about, #contact, #work").removeClass("animated fadeIn");
    }, 1000);
}, 1500);

// Music/Video
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bg-video');
    if (video) {
        video.volume = 0.065; // Set the volume to 0.1
    }

});

// Valorant
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert('Copied Valorant Username and tag.'))
        .catch(err => console.error('Failed to copy text: ', err));
}

document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copyButton');
    copyButton.addEventListener('click', event => {
        event.preventDefault();
        copyToClipboard('ruby#7th');
    });
});

// Discord form submission
document.getElementById('sendButton').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (!name || !message) {
        alert('Please fill out all fields.');
        return;
    }

    const webhookURL = 'https://discord.com/api/webhooks/1280374276104650806/sM0poi9W97LZRv3aQv4JI1ibDd3cfKrA9n9hXu5tx5K4T_2kimGo8Lrd365F-vpLgmG9'; // Secure the webhook URL

    const payload = {
        "content": "<@876955739409743892>",
        "embeds": [
            {
                "title": `${name}`,
                "description": `${message}`,
                "color": 16448250
            }
        ],
        "attachments": []
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
    .then(response => response.ok ? response.json() : Promise.reject('Network response was not ok'))
    .then(() => {
        alert('Message sent to Discord!');
        document.getElementById('discordForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send message. Please try again later.');
    });
});

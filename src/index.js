document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("bg-video");

  if (video) {
    // Initial volume setting
    video.volume = 0.065;

    // Click me button functionality
    const clickMeButton = document.querySelector(".click-me-btn");
    if (clickMeButton) {
      clickMeButton.addEventListener("click", () => {
        clickMeButton.style.display = "none"; // Hide the click me button
        video.style.filter = "brightness(35%)"; // Remove the blur effect
        document.getElementById("middle").style.display = "flex"; // Show the middle container
        document.getElementById("about").style.display = "flex"; // Show the about container
        document.getElementById("work").style.display = "flex"; // Show the work container
        document.querySelector(".mute-btn").style.display = "flex";
        video.muted = false; // Unmute the video
        video.play(); // Play the video
      });
    }

    // Mute button functionality
    const muteButton = document.querySelector(".mute-btn");
    if (muteButton) {
      muteButton.addEventListener("click", () => {
        if (video.muted) {
          video.muted = false;
          video.style.filter = "brightness (35%)";
          muteButton
            .querySelector("i")
            .classList.replace("fa-volume-mute", "fa-volume-up");
        } else {
          video.muted = true;
          muteButton
            .querySelector("i")
            .classList.replace("fa-volume-up", "fa-volume-mute");
        }
      });
    }
  }

  // Existing code for show/hide containers
  function showabout() {
    $("#about_container").css("display", "inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function () {
      $("#about_container").removeClass("animated slideInLeft");
    }, 800);
  }
  function closeabout() {
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function () {
      $("#about_container").removeClass("animated slideOutLeft");
      $("#about_container").css("display", "none");
    }, 800);
  }
  function showwork() {
    $("#work_container").css("display", "inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function () {
      $("#work_container").removeClass("animated slideInRight");
    }, 800);
  }
  function closework() {
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function () {
      $("#work_container").removeClass("animated slideOutRight");
      $("#work_container").css("display", "none");
    }, 800);
  }

  document.getElementById("about").addEventListener("click", showabout);
  document.getElementById("work").addEventListener("click", showwork);
  document.getElementById("workClose").addEventListener("click", closework);
  document.getElementById("aboutClose").addEventListener("click", closeabout);

  // Valorant and Snapchat functionality
  function copyButton(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Copied Valorant Username."))
      .catch((err) => console.error("Failed to copy text: ", err));
  }

  document.getElementById("copyButton").addEventListener("click", (event) => {
    event.preventDefault();
    copyButton("kud6s#lol");
  });

  function copySnapButton(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Copied Snapchat username."))
      .catch((err) => console.error("Failed to copy text: ", err));
  }

  document
    .getElementById("copySnapButton")
    .addEventListener("click", (event) => {
      event.preventDefault();
      copySnapButton("kud6s");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded");

    // Button Click Alert
    document.querySelector(".cta-btn").addEventListener("click", function () {
        alert("Booking feature coming soon!");
    });

    // Hover Effect on Turf Cards
    const turfCards = document.querySelectorAll(".turf-card");
    turfCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            this.querySelector(".hover-img").style.opacity = "1";
        });
        card.addEventListener("mouseout", function () {
            this.querySelector(".hover-img").style.opacity = "0";
        });
    });

    // Video Play/Pause Toggle
    const video = document.querySelector("video");
    video.addEventListener("click", function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

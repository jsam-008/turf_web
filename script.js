document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded");

    document.querySelectorAll(".cta-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("Booking will be available later.");
        });
    });

    const turfCards = document.querySelectorAll(".turf-card");
    turfCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            const hoverImg = this.querySelector(".hover-img");
            if (hoverImg) hoverImg.style.opacity = "1";
        });
        card.addEventListener("mouseout", function () {
            const hoverImg = this.querySelector(".hover-img");
            if (hoverImg) hoverImg.style.opacity = "0";
        });
    });

    const videos = [
        "file:///C:/Users/91637/Downloads/Football%20in%20slow%20motion%20-%20social%20media%20video%20ad%20-%20stock%20video.mp4",
        "file:///C:/Users/91637/Downloads/Cricket%20Video%20Promo.mp4"
    ];

    let currentVideoIndex = 0;
    const videoPlayer = document.getElementById("videoPlayer");
    const videoSource = document.getElementById("videoSource");

    videoPlayer.addEventListener("ended", function () {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        videoSource.src = videos[currentVideoIndex];
        videoPlayer.load();
        videoPlayer.play();
    });
});

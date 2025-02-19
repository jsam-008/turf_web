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
            this.querySelector(".hover-img").style.opacity = "1";
        });
        card.addEventListener("mouseout", function () {
            this.querySelector(".hover-img").style.opacity = "0";
        });
    });

    const videos = [
        "C:\Users\91637\Downloads\Football in slow motion - social media video ad - stock video.mp4",
        "C:\Users\91637\Downloads\Cricket Video Promo.mp4"
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

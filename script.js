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
        "https://github.com/jsam-008/turf_web/blob/main/Football%20in%20slow%20motion%20-%20social%20media%20video%20ad%20-%20stock%20video.mp4,
        "https://drive.google.com/file/d/1mKO__hNjyqG2loj88o3MeVt9NwQylBxz/view?usp=drive_link"
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

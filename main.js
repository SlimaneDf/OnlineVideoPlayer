// Global Variables 
const videoUploadBtn = document.getElementById("file-upload-btn");
let videoUploadStat = document.querySelector(".video-upload-stat");
let nextBtn = document.querySelector("#nextBtn")
const mainVideo = document.querySelector("video")
function checkVideo() {
    let selectedVideo = videoUploadBtn.files[0];
    let selectedVideoName = selectedVideo.name.slice(0, -4);
    let videoUploadTimeout = Math.floor(window.performance.timeOrigin % 3600)
    if (selectedVideo) {
        let selectedVideoURL = URL.createObjectURL(selectedVideo);
        localStorage.setItem("VideoURL", selectedVideoURL)
        videoUploadStat.textContent = `Uploading Video ..`
        videoUploadStat.style = "color: red; visibility: visible;"
        setTimeout(() => {
            mainVideo.src = selectedVideoURL
            mainVideo.style.display = "block"
            videoUploadStat.textContent = `The Video "${selectedVideoName}" Is Uploaded Successfully!`
            videoUploadStat.style = "color: green; visibility: visible;"
            nextBtn.style = "visibility: visible;"
        }, videoUploadTimeout);
    }
}
function getLastWatchedVideo() {
    let storedVideoURL = localStorage.getItem("VideoURL")
    mainVideo.src = storedVideoURL
}
videoUploadBtn.addEventListener("change", checkVideo)
window.addEventListener("DOMContentLoaded", getLastWatchedVideo)
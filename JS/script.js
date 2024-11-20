// scroll to top
let btn = document.querySelector("button.scroll-to-top");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// counter
let countDownDate = new Date("Nov 26, 2024 11:00:00").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".events .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff <= 0) {
    clearInterval(counter);
  }
}, 1000);

// video list

let mainVideo = document.getElementById("main-video");
let videoList = document.getElementById("videos-list");
let videoItems = videoList.querySelectorAll("li");
let info = document.querySelector(".preview .info");

videoItems.forEach((item) => {
  item.addEventListener("click", () => {
    mainVideo.src = item.getAttribute("data-src");
    info.textContent = item.textContent;
    mainVideo.play();
    videoItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

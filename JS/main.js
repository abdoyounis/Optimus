// Start Gallery

let container = document.querySelector(".image-grid");
let imageCount = 137;
for (i = 1; i <= imageCount; i++) {
  let imgElement = document.createElement("img");
  imgElement.src = `images/event/event(${i}).jpg`;
  imgElement.alt = `صورة ${i}`;
  container.appendChild(imgElement);
}

const images = document.querySelectorAll(".image-grid img");
const overlay = document.getElementById("overlay");
const overlayImage = document.getElementById("overlayImage");
let currentIndex = 0;

// Zoom In
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showOverlay(images[currentIndex].src);
  });
});

function showOverlay(src) {
  overlayImage.src = src;
  overlay.style.visibility = "visible";
  overlay.style.opacity = "1";
}

function hideOverlay() {
  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";
}

// Mobility Between Images
function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showOverlay(images[currentIndex].src);
}

// Zoom Out
overlay.addEventListener("click", (e) => {
  if (e.target === overlay || e.target === overlayImage) {
    hideOverlay();
  }
});
// End Gallery
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

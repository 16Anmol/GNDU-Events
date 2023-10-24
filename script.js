// JavaScript code for image slider
const images = document.querySelector('.image-slider');
const imageCount = images.children.length;
let currentIndex = 0;
let isReversed = false;

const showImage = (index) => {
  const imageWidth = document.querySelector('.image-container').clientWidth;
  images.style.transition = 'transform 1s ease-in-out';
  images.style.transform = `translateX(-${index * imageWidth}px)`;
};

function showNextImage() {
  if (!isReversed) {
    currentIndex++;
    if (currentIndex === imageCount) {
      isReversed = true;
      currentIndex = imageCount - 2; // Move to image4 (imageCount - 2)
    }
  } else {
    currentIndex--;
    if (currentIndex < 0) {
      isReversed = false;
      currentIndex = 1; // Move to image2
    }
  }
  showImage(currentIndex);
}

// Automatically change images every 3 seconds
const slideShowInterval = setInterval(showNextImage, 3000);

// Stop the slideshow when the mouse is over the image slider
images.addEventListener('mouseenter', () => {
  clearInterval(slideShowInterval);
});

// Restart the slideshow when the mouse leaves the image slider
images.addEventListener('mouseleave', () => {
  slideShowInterval = setInterval(showNextImage, 3000);
});

// Initial image display
showImage(currentIndex);
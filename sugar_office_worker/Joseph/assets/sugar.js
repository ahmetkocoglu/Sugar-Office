
//! ------------top menu
document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle the visibility of the dropdown
  function toggleDropdown(dropdown, isOpen) {
    dropdown.style.display = isOpen ? "block" : "none";
  }

  // Function to handle mouseenter and mouseleave events
  function handleMouseEvents(trigger, dropdown) {
    trigger.addEventListener("mouseenter", function () {
      toggleDropdown(dropdown, true);
    });

    trigger.addEventListener("mouseleave", function () {
      toggleDropdown(dropdown, false);
    });
  }

  // Buy JOURNAL dropdown
  const buyJournalTrigger = document.querySelector(".all-header .language");
  const buyJournalDropdown = document.querySelector(".all-header .language .absolute");

  if (buyJournalTrigger && buyJournalDropdown) {
    handleMouseEvents(buyJournalTrigger, buyJournalDropdown);
  }

  // Currency dropdown
  const currencyTrigger = document.querySelector(".all-header .currency");
  const currencyDropdown = document.querySelector(".all-header .currency .absolute");

  if (currencyTrigger && currencyDropdown) {
    handleMouseEvents(currencyTrigger, currencyDropdown);
  }
});

// !---------------------------

// !--------Slider Area--------
// Get the slider element
const slider = document.getElementById("slider");

// Get the number of slides
const slideCount = slider.querySelectorAll("[data-carousel-item]").length;

// Set the current slide index
let currentSlide = 0;

// Get the slide width
const slideWidth = slider.offsetWidth;

// Set the slide interval
const slideInterval = 3000;

// Get the previous and next buttons
const prevButton = slider.querySelector("[data-carousel-prev]");
const nextButton = slider.querySelector("[data-carousel-next]");

// Get the indicators
const indicators = slider.querySelectorAll("[data-carousel-slide-to]");

// Move the slides to the left or right
function moveSlides(direction) {
  // Check the direction
  if (direction === "prev") {
    // Decrement the current slide index
    currentSlide--;
    // If the current slide index is less than zero, go to the last slide
    if (currentSlide < 0) {
      currentSlide = slideCount - 1;
    }
  } else if (direction === "next") {
    // Increment the current slide index
    currentSlide++;
    // If the current slide index is greater than the slide count, go to the first slide
    if (currentSlide > slideCount - 1) {
      currentSlide = 0;
    }
  }
  // Calculate the slide position
  const slidePosition = -currentSlide * slideWidth;
  // Set the slide position
  slider.querySelector("[data-carousel-items]").style.transform = `translateX(${slidePosition}px)`;
  // Update the indicators
  updateIndicators();
}

// Update the indicators
function updateIndicators() {
  // Loop through the indicators
  indicators.forEach((indicator) => {
    // Remove the aria-current attribute from all indicators
    indicator.removeAttribute("aria-current");
  });
  // Add the aria-current attribute to the current indicator
  indicators[currentSlide].setAttribute("aria-current", "true");
}

// Start the slider
function startSlider() {
  // Set the slider interval
  sliderInterval = setInterval(() => {
    // Move the slides to the next
    moveSlides("next");
  }, slideInterval);
}

// Stop the slider
function stopSlider() {
  // Clear the slider interval
  clearInterval(sliderInterval);
}

// Add click event listeners to the previous and next buttons
prevButton.addEventListener("click", () => {
  // Move the slides to the previous
  moveSlides("prev");
  // Stop the slider
  stopSlider();
  // Start the slider
  startSlider();
});

nextButton.addEventListener("click", () => {
  // Move the slides to the next
  moveSlides("next");
  // Stop the slider
  stopSlider();
  // Start the slider
  startSlider();
});

// Add click event listeners to the indicators
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    // Set the current slide index to the indicator index
    currentSlide = index;
    // Move the slides to the current slide
    moveSlides();
    // Stop the slider
    stopSlider();
    // Start the slider
    startSlider();
  });
});

// Add keydown event listener to the document
document.addEventListener("keydown", (event) => {
  // Check the key code
  if (event.keyCode === 37) {
    // Move the slides to the previous
    moveSlides("prev");
  } else if (event.keyCode === 39) {
    // Move the slides to the next
    moveSlides("next");
  }
  // Stop the slider
  stopSlider();
  // Start the slider
  startSlider();
});

// Start the slider
startSlider();

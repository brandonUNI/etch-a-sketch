// Selecting the grid element
const grid = document.querySelector("#grid");

// Select the slider element
const slider = document.querySelector("#myRange");

// Update the grid size dynamically
const gridSizeDisplay = document.querySelectorAll(".sliderValue");

// Log the initial slider value
console.log(`Initial slider value: ${slider.value}`);

// Event listener for slider changes
slider.addEventListener("input", () => {
    // console.log(`Slider value: ${slider.value}`); // Log the slider value
    gridSizeDisplay.forEach(span => {
        span.textContent = slider.value; // Update the text content of each span
    });
});
// Select the slider element
const slider = document.querySelector("#myRange");

// Update the grid size display
const gridSizeDisplay = document.querySelectorAll(".sliderValue");

// Log the initial slider value
console.log(`Initial slider value: ${slider.value}`);

let gridSize = 16; // Initalize default slider value

// Selecting the grid element
const grid = document.querySelector("#grid");

// func to generate random rgba color
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

// Function to create the grid
function createGrid(size) {
    grid.innerHTML = ""; // Clear the grid

    // Update CSS grid properties for the new grid size
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // Divide into 'size' columns
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;    // Divide into 'size' rows

    // Create grid boxes
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("gridBox");
        div.addEventListener("mouseenter", () => {
            const color = random_rgba();
            div.style["background-color"] = color;
        });
        grid.appendChild(div);
    }
}


// Event listener for slider changes
slider.addEventListener("input", () => {
    // console.log(`Slider value: ${slider.value}`); // Log the slider value
    gridSize = slider.value; // Update the variable

    gridSizeDisplay.forEach(span => {
        span.textContent = slider.value; // Update the text content of each span
    });

    createGrid(gridSize); // Regenerate the grid
}); 

// Select the image element
const hand = document.querySelector("img");

hand.addEventListener("click", () => {
    location.reload();
})

// Initialize the grid
createGrid(gridSize);

const container = document.querySelector(".container");


function createMultipleDivs (n) {
    for (i = 0; i < n; i++) {
        const block = document.createElement("div");
        block.setAttribute("class", "block".toString());
        block.setAttribute("id", "block" + (i + 1).toString());
        block.textContent = "test" + (i + 1).toString();
        container.appendChild(block);
    };
};

createMultipleDivs (16)

// Change colors of divs when mouseover

let blocksArray = document.querySelectorAll(".block");

blocksArray.forEach(function(elem) {
    elem.addEventListener("mouseover", () => {
        elem.setAttribute("style", "background: black");
    });
    elem.addEventListener("mouseout", () => {
        elem.setAttribute("style", "background: azure");
    });
});

// Configure button to receive grid size paramenters

const gridSizeButton = document.querySelector("#gridSizeButton");





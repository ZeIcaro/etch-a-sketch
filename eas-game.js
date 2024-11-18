
const container = document.querySelector(".container");


function createMultipleDivs (n) {
    for (i = 0; i < n; i++) {
        const block = document.createElement("div");
        block.setAttribute("class", "block".toString());
        block.setAttribute("id", "block" + (i + 1).toString());
        // block.textContent = "test" + (i + 1).toString();
        container.appendChild(block);
    }
}


// Grid Configurator

function configureGrid (ncol) {

    // Clean up previous grid
    while (container.firstChild) {
        container.firstChild.remove();
    };

    // Create new grid
    ncolAdjusted = Math.min(100, ncol);
    createMultipleDivs (ncolAdjusted ** 2);
    
    // Configure grid columns
    document.documentElement.style.setProperty("--columns-row", ncolAdjusted);

    // Run blockStyles function to configure the blocks
    blockStyles();

}


// Change blocks styles on mouseover

function blockStyles () {
    let blocksArray = document.querySelectorAll(".block");

    blocksArray.forEach(function(elem) {
        var red = Math.random()*255;
        var green = Math.random()*255;
        var blue = Math.random()*255;

        elem.addEventListener("mouseover", () => {
            elem.setAttribute("style", `background-color: rgb(${red}, ${green}, ${blue})`);
        });
        
        /* elem.addEventListener("mouseout", () => {
            elem.setAttribute("style", "background: azure");
        }); */
    });
}



// Configure button to receive grid size paramenters

const gridSizeButton = document.querySelector("#gridSizeButton");

gridSizeButton.addEventListener("click", () => {
    var ncol = prompt("Set grid size:");
    if (ncol === null) {
        return;
    } else {
        configureGrid(ncol);
    }});



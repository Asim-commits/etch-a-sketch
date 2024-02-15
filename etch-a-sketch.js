const gridContainer = document.querySelector('.grid-container');
const hover = document.querySelector('.grid-container');
const changeGrids = document.querySelector('.change-grids');

function makeGrids(numberOfGrids) {
    for (let i = 1; i <= numberOfGrids; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row-items');
        for (let j = 1; j <= numberOfGrids; j++) {
            const grids = document.createElement('div');
            const style = grids.style;  
            grids.setAttribute('class', 'grid-items items-mouseover');
            let sizeOfBox = 512 / numberOfGrids;
            sizeOfBox += 'px';
            style.width = sizeOfBox;
            style.height = sizeOfBox;
            row.appendChild(grids);
        }
        gridContainer.appendChild(row);
    }
}

makeGrids(16);

changeGrids.addEventListener('click', () => {
    let numOfGrids = parseInt(prompt("Enter the number of grids"));
    if (numOfGrids > 100) {
        alert("Warning!!!!\nNumber of Grids is limited to 100 due to limitations imposed by the hardware of the computer");
    } else {
        const grids = document.querySelectorAll('.row-items');
        grids.forEach( (item, index) => {
            gridContainer.removeChild(item);
        });
        makeGrids(numOfGrids);
    }
})

hover.addEventListener('mouseover', function (e) {
    currentElement = e.target;
    console.log(currentElement.className);
    if (currentElement.className !== "grid-container") {
        currentElement.style.backgroundColor = "black";
    }
});


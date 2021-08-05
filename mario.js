/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
let pyramidHeight = 10;
let pyramidBrick = '#';
const pyramid = document.getElementById("pyramid");
pyramid.removeChild(document.getElementById("construction"));
printPyramid(pyramid, pyramidHeight, pyramidBrick);

const brickSelector = document.getElementById('brick-selector');
brickSelector.addEventListener('change', () => {
    pyramidBrick = brickSelector.value;
    printPyramid(pyramid, pyramidHeight, pyramidBrick);
});

const heightValue = document.getElementById('height-value');
heightValue.textContent = pyramidHeight;
const heightSelector = document.getElementById('height-selector');
heightSelector.setAttribute("value", pyramidHeight);
heightSelector.addEventListener('input', () => {
    pyramidHeight = heightSelector.value;
    heightValue.textContent = pyramidHeight;
    printPyramid(pyramid, pyramidHeight, pyramidBrick);
});

function printPyramid(element, height, brick) {
    deleteChilds(element)
    let brickCounter = 2;
    for (let rowIndex = 1; rowIndex <= height; rowIndex++, brickCounter++){
        let rawString = '_'.repeat(height - rowIndex);
        rawString += brick.repeat(brickCounter);
        const raw = document.createElement('p');
        raw.innerText = rawString;
        element.appendChild(raw);
    }
}

function deleteChilds(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

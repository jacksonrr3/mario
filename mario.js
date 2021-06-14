
printPyramid(5);


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
function printPyramid(height) {
    // console.log("Uh oh... the pyramid is under construction.");
    // console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
    // print that pyramid!
    const pyramid = document.getElementById("pyramid");
    pyramid.removeChild(document.getElementById("construction"));
    let n = 2;
    for (let i = 0; i < height; i++, n++){
        let rawString = '';
        for (let j = 0; j < (height - i - 1); j++){
            rawString += ' ';
        }
        for (let j = 0; j < n; j++){
            rawString += '#';
        }

        const raw = document.createElement('p');
        raw.innerText = rawString;
        pyramid.appendChild(raw);
        console.log(rawString);
    }
    
}


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
    function printPyramid(height){
        let n = 2;
        for (let i = 0; i < height; i++, n++){
            st = '';
            for (let j = 0; j < (height - i - 1); j++){
                st += ' ';
            }
            for (let j = 0; j < n; j++){
                st += '#';
            }
            console.log(st);
        }
    }
   

}

/* NOTE: The instructions are in index.html */

/* --- STEP (2) ---
 * - Make this function take an array as a parameter.
 * - Return the count of items in the array that are odds.
 * - Keep this function stand-alone. I.e. it should not know ANYTING about DOM.
 */

function findOdd(array_numbers) {
    let are_Odd = "";
    array_numbers.forEach( x => {
        if( x%2 !== 0){
            console.log(x);
            are_Odd = " "+ are_Odd +" "+ x ;
        }});
    
    return are_Odd;
}

/* --- STEP (5) ---
 * - Add a click handler on the button.
 * - Read the numbers from the input and turn them into an array.
 * - Call countThreevens with the array.
 * - Replace "blah" (and only blah) with the result.
 */
function handleClick() {
    let inputNumbers = document.getElementById("numbersArray");
    const numbersArray = inputNumbers.value.split(' ');
    console.log(numbersArray);
    let answer = findOdd(numbersArray);
    const phrase = document.querySelector("span");
    phrase.textContent = answer;
}


/* TROUBLESHOOTING TIP:
 * Because of how the sandbox is set up, this script creates NO global
 * variables accessible in the HTML file. To make a value from this file
 * visible in the HTML file, you have to store it on window.
 */
// window.handleClick = handleClick;
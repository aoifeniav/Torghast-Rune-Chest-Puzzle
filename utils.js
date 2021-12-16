/**
 * Rearranges items in an array.
 * @param {Array} array 
 */
 function shuffleArray(array) {
    const shuffledArray = array
      .map(value => ({ value, key: Math.random() }))
      .sort((a, b) => a.key - b.key)
      .map(({ value }) => value);

    return shuffledArray;
}

/**
 * Returns a random integer between min (included) and max (included).
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
 function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
* Creates an HTML element applying all classes given in an array.
* @param {string} htmlTag 
* @param {Array} classNames 
* @returns 
*/
function createElement(htmlTag, classNames) {
    const element = document.createElement(htmlTag);
    element.classList.add(...classNames);
    return element;
}
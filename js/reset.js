/**
 * Adds an event listener to reset button to reset the puzzle.
 */
 function resetButtonListener() {
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', function () {
        resetPuzzle();
        removeResetButtonPulse(resetButton);
    });
}

/**
 * Removes all elements inside chest container and creates new handles.
 */
function resetPuzzle() {
    const container = document.getElementById('chest');
    container.innerHTML = '';
    isFinished = false;
    initHandles();
}

/**
 * Removes pulse class from reset button.
 * @param {Object} resetButton 
 */
function removeResetButtonPulse(resetButton) {
    if (resetButton.classList.contains('button-pulse')) {
        resetButton.classList.remove('button-pulse');
    }
}
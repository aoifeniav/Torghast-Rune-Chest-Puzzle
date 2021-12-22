/**
 * Adds an event listener to hints button to show or hide the hints panel and change the hints button arrow.
 */
function hintsButtonListener() {
    const hintsButton = document.getElementById('hints-button');
    hintsButton.addEventListener('click', function () {
        toggleHints();
        toggleHintsArrow();
    });
}

/**
 * Shows or hides the hints panel.
 */
function toggleHints() {
    const hintsBlock = document.getElementById('hints');
    if (hintsBlock.style.display === "block" && hintsBlock.style.maxHeight) {
        hintsBlock.style.display = "none";
        hintsBlock.style.maxHeight = null;
    } else {
        hintsBlock.style.display = "block";
        hintsBlock.style.maxHeight = `${hintsBlock.scrollHeight}px`;
    }
}

/**
 * Changes hints button arrow from down to up and vice versa.
 */
function toggleHintsArrow() {
    const hintsArrow = document.getElementById('hints-arrow');
    if (hintsArrow.classList.contains('fa-caret-down')) {
        hintsArrow.classList.remove('fa-caret-down');
        hintsArrow.classList.add('fa-caret-up');
    } else {
        hintsArrow.classList.remove('fa-caret-up');
        hintsArrow.classList.add('fa-caret-down');
    }
}
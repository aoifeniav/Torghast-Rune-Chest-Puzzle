class Handle {
    unlockColor;
    changesCount;
    color;

    constructor(unlockColor) {
        this.unlockColor = unlockColor;
    }

    isUnlocked() {
        return this.color === this.unlockColor;
    }
}

/**
 * Initialises 4 handles and sets each handle's unlock color, then shuffles and calls to setCountChanges.
 */
function initHandles() {
    const handles = [];

    for (let i = 0; i < 4; i++) {
        const newHandle = new Handle(i);
        handles.push(newHandle);
    }

    setCountChanges(shuffleArray(handles));
}

/**
 * Sets how many runes each handle changes, then shuffles and calls to setColors.
 * @param {Array} handles 
 */
function setCountChanges(handles) {
    for (let i = 0; i < 4; i++) {
        handles[i].changesCount = i + 1;
    }

    setColors(shuffleArray(handles));
}

/**
 * Sets each handle initial color, then calls to render function.
 * @param {Array} handles 
 */
function setColors(handles) {
    for (let handle of handles) {
        handle.color = randomInteger(0, 3);

        // Forces all handles to initialize as locked (color !== unlockColor).
        if (handle.isUnlocked()) {
            handle.color = (handle.color + 1) % 4;
        }
    }

    const handlesGroup = createHandleElements(handles);
    renderHandles(handlesGroup);
}

/**
 * Changes the runes according to the clicked skull's changesCount.
 * @param {number} clickedSkullChangesCount 
 * @param {Array} handles
 */
function changeRunes(clickedSkullChangesCount, handles) {
    for (let handle of handles) {
        if (clickedSkullChangesCount <= handle.changesCount) {
            handle.color = (handle.color + 1) % 4;
        }
    }
    // TODO: Re-render runes with new values.
    console.log('new handles ->', handles);
}

/**
 * Adds an event listener to reset button to reset the puzzle.
 */
function resetButtonListener() {
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', function () {
        resetPuzzle();
    });
}

/**
 * Removes all elements inside chest container and creates new handles.
 */
function resetPuzzle() {
    const container = document.getElementById('chest');
    container.innerHTML = '';
    initHandles();
}

window.onload = function () {
    initHandles();
    resetButtonListener();
}
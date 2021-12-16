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

const RUNE_SETTINGS = {
    0: {
        color: 'green',
        text: '8'
    },
    1: {
        color: 'orange',
        text: 'N'
    },
    2: {
        color: 'purple',
        text: 'K'
    },
    3: {
        color: 'blue',
        text: 'R'
    },
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
            handle.color = (++handle.color) % 4;
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
            handle.color = (++handle.color) % 4;
        }

        const chain = document.getElementById(`chain_${handle.unlockColor}`);
        if (handle.isUnlocked()) {
            chain.classList.remove('fa-link');
            chain.classList.add('fa-unlink');
        } else {
            chain.classList.remove('fa-unlink');
            chain.classList.add('fa-link');
        }

        const rune = document.getElementById(`rune_${handle.unlockColor}`);
        rune.classList = `rune ${RUNE_SETTINGS[handle.color].color}`;
        rune.innerText = RUNE_SETTINGS[handle.color].text;
    }
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
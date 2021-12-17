/**
 * Changes the runes according to the clicked skull's changesCount and then changes the chains.
 * @param {number} clickedSkullChangesCount 
 * @param {Array} handles
 */
function activatePuzzle(clickedSkullChangesCount, handles) {
    if (isFinished) {
        return
    }

    for (let handle of handles) {
        if (clickedSkullChangesCount <= handle.changesCount) {
            handle.color = (++handle.color) % 4;
        }

        changeRune(handle);
        changeChain(handle);
    }

    if (checkUnlocked(handles)) {
        finishGame();
    }
}

/**
 * Changes the rune according to color value.
 * @param {Object} handle 
 */
function changeRune(handle) {
    const rune = document.getElementById(`rune_${handle.unlockColor}`);
    rune.classList = `rune ${RUNE_SETTINGS[handle.color].color}`;
    rune.innerText = RUNE_SETTINGS[handle.color].text;
    rune.setAttribute('data-color', RUNE_SETTINGS[handle.color].color);
}

/**
 * Changes the chain if the handle isUnlocked.
 * @param {Object} handle 
 */
function changeChain(handle) {
    const chain = document.getElementById(`chain_${handle.unlockColor}`);
    if (handle.isUnlocked()) {
        chain.classList.remove('fa-link');
        chain.classList.add('fa-unlink');
    } else {
        chain.classList.remove('fa-unlink');
        chain.classList.add('fa-link');
    }
}

/**
 * Checks each handle to see if it is unlocked.
 * @param {Array} handles 
 * @returns true if all handles are unlocked; false otherwise.
 */
function checkUnlocked(handles) {
    const unlockedHandles = [];
    for (let handle of handles) {
        let isUnlocked = handle.isUnlocked() ? true : false;
        unlockedHandles.push(isUnlocked);
    }
    const isAllUnlocked = unlockedHandles.every(unlocked => unlocked === true);

    return isAllUnlocked;
}

function finishGame() {
    isFinished = true;
}
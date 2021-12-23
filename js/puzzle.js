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
            changeRune(handle);
            changeChain(handle);
        }
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
    rune.innerText = RUNE_SETTINGS[handle.color].text;
    rune.setAttribute('data-color', RUNE_SETTINGS[handle.color].color);

    // Re-renders the rune (keeping its size in DOM) so color properties are properly applied (for Safari compatibility).
    rune.style.display = 'none';
    rune.offsetHeight;
    rune.style.display = '';
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
        chain.classList.add('fa-link', 'locked-animation');
        setTimeout(() => {
            chain.classList.remove('locked-animation');
        }, 500);
    }
}

/**
 * Checks each handle to see if it is unlocked.
 * @param {Array} handles 
 * @returns true if all handles are unlocked; false otherwise.
 */
function checkUnlocked(handles) {
    for (let handle of handles) {
        if (!handle.isUnlocked()) {
            return false;
        }
    }
    return true;
}

/**
 * Toggles isFinished variable to true, adds pulse animation to skulls and reset button, and removes cursor pointer from skulls.
 */
function finishGame() {
    isFinished = true;
    pulseUnlockedChains();
    pulseResetButton();
    removeSkullsPointer();
}

/**
 * Makes all unlocked chains pulse.
 */
function pulseUnlockedChains() {
    const chains = document.querySelectorAll('.fa-unlink');
    for (let chain of chains) {
        chain.classList.add('unlocked-animation');
    }
}

/**
 * Makes the reset button pulse.
 */
function pulseResetButton() {
    const resetButton = document.getElementById('reset');
    resetButton.classList.add('button-pulse');
}

/**
 * Removes cursor pointer class from skull icons.
 */
function removeSkullsPointer() {
    const skulls = document.querySelectorAll('.fa-skull');
    for (let skull of skulls) {
        skull.style.cursor = 'default';
    }
}
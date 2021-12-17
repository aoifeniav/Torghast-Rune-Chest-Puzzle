/**
 * Creates skull icon and adds an event listener to each skull that will change runes (on click) according to the skull's changesCount.
 * @param {Object} handle 
 * @param {Array} handles 
 * @returns skull HTML element.
 */
 function createSkull(handle, handles) {
    const skull = createElement('i', ['fa-skull', 'fas']);
    skull.addEventListener('click', function () {
        activatePuzzle(handle.changesCount, handles);
    });

    return skull;
}

/**
 * Changes the runes according to the clicked skull's changesCount and then changes the chains.
 * @param {number} clickedSkullChangesCount 
 * @param {Array} handles
 */
function activatePuzzle(clickedSkullChangesCount, handles) {
    for (let handle of handles) {
        if (clickedSkullChangesCount <= handle.changesCount) {
            handle.color = (++handle.color) % 4;
        }

        changeRune(handle);
        changeChain(handle);
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
}

/**
 * Changes the chain depending on handle.isUnlocked.
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
function renderHandles(handlesGroup) {
    const container = document.getElementById('chest');

    for (const group of handlesGroup) {
        const groupContainer = createElement('div', ['handle-container']);

        for (const handle of group) {
            groupContainer.appendChild(handle);
        }

        container.appendChild(groupContainer);
    }
}

function createHandleElements(handles) {
    const handlesGroup = [];

    for (const handle of handles) {
        const handleElements = [];

        const chain = createChain(handle);
        const rune = createRune(handle);
        const skull = createSkull(handle, handles);

        handleElements.push(chain, rune, skull);

        // Adds each handle group to an array with all 4 handles.
        handlesGroup.push(handleElements);
    }

    return handlesGroup;
}

/**
 * Creates chain icon.
 * @param {Object} handle 
 * @returns chain HTML element.
 */
function createChain(handle) {
    let chain;
    if (handle.isUnlocked()) {
        chain = createElement('i', ['fa-unlink', 'fas']);
    } else {
        chain = createElement('i', ['fa-link', 'fas']);
    }
    chain.setAttribute('id', `chain_${handle.unlockColor}`);
    return chain;
}

/**
 * Creates rune icon.
 * @param {Object} handle 
 * @returns rune HTML element.
 */
function createRune(handle) {
    const rune = createElement('span');
    rune.classList = `rune ${RUNE_SETTINGS[handle.color].color}`;
    rune.innerText = RUNE_SETTINGS[handle.color].text;
    rune.setAttribute('id', `rune_${handle.unlockColor}`);
    return rune;
}

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

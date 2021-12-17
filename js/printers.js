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

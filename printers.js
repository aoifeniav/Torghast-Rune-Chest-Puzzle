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
    let rune;
    switch (handle.color) {
        case 0:
            rune = createElement('span', ['rune', 'green']);
            rune.innerText = '8';
            break;
        case 1:
            rune = createElement('span', ['rune', 'orange']);
            rune.innerText = 'N';
            break;
        case 2:
            rune = createElement('span', ['rune', 'purple']);
            rune.innerText = 'K';
            break;
        case 3:
            rune = createElement('span', ['rune', 'blue']);
            rune.innerText = 'R';
            break;
    }

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
        changeRunes(handle.changesCount, handles);
    });

    return skull;
}
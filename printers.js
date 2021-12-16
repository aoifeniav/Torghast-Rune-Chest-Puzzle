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

        // Creates chain icon.
        if (handle.isUnlocked()) {
            const lockedChain = createElement('i', ['fa-unlink', 'fas']);
            handleElements.push(lockedChain);
        } else {
            const unlockedChain = createElement('i', ['fa-link', 'fas']);
            handleElements.push(unlockedChain);
        }

        // Creates rune icon.
        const rune = createRune(handle);
        handleElements.push(rune);

        // Creates skull icon and adds an event listener to each skull that will change runes (on click) according to the skull's changesCount.
        const skull = createElement('i', ['fa-skull', 'fas']);
        skull.addEventListener('click', function () {
            changeRunes(handle.changesCount, handles);
        });
        handleElements.push(skull);

        // Adds each handle group to an array with all 4 handles.
        handlesGroup.push(handleElements);
    }

    return handlesGroup;
}

function createRune(handle) {
    let rune;
    switch (handle.color) {
        case 0:
            rune = createElement('span', ['rune', 'pulse-green']);
            rune.innerText = '8';
            break;
        case 1:
            rune = createElement('span', ['rune', 'pulse-orange']);
            rune.innerText = 'N';
            break;
        case 2:
            rune = createElement('span', ['rune', 'pulse-purple']);
            rune.innerText = 'K';
            break;
        case 3:
            rune = createElement('span', ['rune', 'pulse-blue']);
            rune.innerText = 'R';
            break;
    }

    return rune;
}
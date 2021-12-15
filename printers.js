/**
 * Creates an HTML element applying all classes given in an array.
 * @param {string} htmlTag 
 * @param {Array} classNames 
 * @returns 
 */
function createElement(htmlTag, classNames) {
    const element = document.createElement(htmlTag);
    element.classList.add(...classNames);
    return element;
}

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
        if (handle.isUnlocked()) {
            const lockedChain = createElement('i', ['fa-unlink', 'fas']);
            handleElements.push(lockedChain);
        } else {
            const unlockedChain = createElement('i', ['fa-link', 'fas']);
            handleElements.push(unlockedChain);
        }

        let rune;
        switch (handle.color) {
            case 0:
                rune = createElement('i', ['fa-ruler-vertical', 'fas']);
                handleElements.push(rune);
                break;
            case 1:
                rune = createElement('i', ['fa-ruler-horizontal', 'fas']);
                handleElements.push(rune);
                break;
            case 2:
                rune = createElement('i', ['fa-ruler-combined', 'fas']);
                handleElements.push(rune);
                break;
            case 3:
                rune = createElement('i', ['fa-ruler', 'fas']);
                handleElements.push(rune);
                break;
        }

        const skull = createElement('i', ['fa-skull', 'fas']);
        handleElements.push(skull);

        handlesGroup.push(handleElements);
        console.log(handleElements);
    }

    return handlesGroup;
}
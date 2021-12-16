class Handle {
    unlockColor;
    changesCount;
    color;

    constructor(unlockColor, changesCount) {
        this.unlockColor = unlockColor;
        this.changesCount = changesCount;
    }

    isUnlocked() {
        return this.color === this.unlockColor;
    }
}


/**
 * Initializes how many runes each handle changes & each handle's unlock color.
 */
function initHandles() {
    const handles = [];

    // TODO: Need to randomize making sure they don't repeat each loop.
    for (let i = 0; i < 4; i++) {
        const newHandle = new Handle(i, i + 1);
        handles.push(newHandle);
    }

    console.log('initHandles ->', handles);
    shuffleHandles(handles);
}

/**
 * Rearranges items in the handles array.
 * @param {Array} handles 
 */
function shuffleHandles(handles) {
    const shuffledHandles = handles
      .map(value => ({ value, key: Math.random() }))
      .sort((a, b) => a.key - b.key)
      .map(({ value }) => value);

    console.log('shuffleHandles ->', shuffledHandles);
    setHandlesColors(shuffledHandles);
}

/**
 * Sets each handle initial color and calls to render function.
 * @param {Array} handles 
 */
function setHandlesColors(handles) {
    for (let i = 0; i < 4; i++) {
        handles[i].color = i;

        // Forces all handles to initialize as locked (color !== unlockColor).
        if (handles[i].isUnlocked()) {
            handles[i].color = (handles[i].color + 1) % 4;
        }
    }

    console.log('setHandlesColors ->', handles);

    const handlesGroup = createHandleElements(handles);
    renderHandles(handlesGroup);
}

window.onload = function () {
    initHandles();
}
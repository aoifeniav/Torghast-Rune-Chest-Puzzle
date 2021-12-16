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
# Torghast Rune Chest
This web app made with JavaScript is a simulator of the rune chest puzzle in World of Warcraft: Shadowlands' Torghast. I created it so that people like me could practise in a friendly environment.

## How it works
Each time a puzzle is created, 4 chains appear locked, each of which has an assigned unlocking ID (0-3). For each chain, there is a color rune that represents an ID (0-3) and a clickable skull that allows the user to change the ID of the rune.

The skulls change their respective rune, but can also change others according to the rules:
- One skull changes 4 runes.
- One skull changes 3 runes.
- One skull changes 2 runes.
- One skull changes 1 runes.

When a rune ID matches with its corresponding chain's unlocking rune ID, the chain is unlocked and its icon changes. If the rune ID doesn't match, the chain will shake. When all chains are unlocked, the game ends and is blocked.

User can press the reset button to start a new game at any time. Each puzzle will be different since the runes, skulls and chains are setup randomly.

## Credits
The puzzle logic is made by @Lilyel (originally in C++). I adapted it to JavaScript and designed the CSS layout, with the help of @EricFC-84.
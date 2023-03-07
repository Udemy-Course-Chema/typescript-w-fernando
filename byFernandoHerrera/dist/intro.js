"use strict";
(() => {
    console.log('hello world');
    const ironman = {
        name: 'Iron man',
        weapon: 'Armorsuit'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjaljoin'
    };
    const hulk = {
        name: 'Hulk',
        weapon: 'Punches'
    };
    const avengers = [ironman, thor, hulk];
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
//# sourceMappingURL=intro.js.map
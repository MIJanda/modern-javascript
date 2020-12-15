'use strict'

// const scores = [45, 52, 65, 75, 82, 41, 63, 36, 25, 58];

// const count = scores.reduce((acc, curr) => {
//     if (curr > 50) {
//         acc++;
//     }
//     return acc;
// }, 0);
// 
// console.log(count);

const gameScores = [
    {player: 'mario', score: 70},
    {player: 'crystal', score: 78},
    {player: 'yoshi', score: 56},
    {player: 'mario', score: 50},
];

const marioTotal = gameScores.reduce((accumulator, current) => {
    if (current.player === 'mario') {
        accumulator += current.score;
    }
    return accumulator;
}, 0);

console.log(marioTotal);
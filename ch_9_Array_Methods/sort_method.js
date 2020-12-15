// sort() is destructive
// sorts lexicographically

// example 1 - sorting strings
// const names = ['Yoshi', 'Crystal', 'Ryu', 'Mario', 'Chun-li', 'Luigi'];

// names.sort();
// names.reverse();
// console.log(names);

// example 2 - sorting numbers
// const scores = [45, 12, 45, 65, 23, 85, 27];

// scores.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     } else if (b > a) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

// console.log(scores);

// example 3 - sorting objects 
const players = [
    {name: 'Yoshi', score: 45},
    {name: 'Crystal', score: 34},
    {name: 'Luigi', score: 65},
    {name: 'Mario', score: 78},
    {name: 'Ryu', score: 25},
    {name: 'Chun-Li', score: 85}
];

// ascending
// players.sort((a, b) => a.score - b.score);
// descending
// players.sort((a, b) => b.score - a.score);

// console.log(players);
'use strict'

const scores = [45, 78, 20, 18, 56, 35, 41, 58, 10, 38];

// const filteredScores = scores.filter(score => score > 35;});
// console.log(filteredScores);

const users = [
    {name: "Hxant Kurta", premium: true},
    {name: "Omah Lay", premium: true},
    {name: "Burna Boy", premium: true},
    {name: "Wizkid", premium: true},
    {name: "Olu Prickford", premium: false},
    {name: "Ogoya Palse", premium: false}
];

const premiumUsers = users.filter(user => user.premium);


console.log("The premium users are: ", premiumUsers);

const normalUsers = users.filter(user => !user.premium);

console.log("The normal users are: ", normalUsers);
// timestamps
const before = new Date('Dec 20 2018 13:14:00');
const now = new Date();

// console.log(before.getTime(), now.getTime());

const diff = now.getTime() - before.getTime();

console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);

console.log(`The blog was written ${days} ago`);

// converting date stamps into date objects
const timestamp = 1578799378298;
console.log(new Date(timestamp));
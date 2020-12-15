'use strict'

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

// No method chaining 
// const filteredProducts = products.filter(product => product.price > 20);

// const promos = filteredProducts.map(product => `${product.name} is now ${product.price / 2} shs`);

// console.log(promos);

// Method Chaining
const promos = products
               .filter(product => product.price > 20)
               .map(product => `${product.name} now at ${product.price / 2}`);

console.log(promos);
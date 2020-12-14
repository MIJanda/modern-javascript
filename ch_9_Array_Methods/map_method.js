'use strict'

// const prices = [75, 25, 52, 63, 24, 41, 10, 30, 65];

// const salePrices = prices.map(price => price / 2);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

const saleProducts = products.map(product => {
    if (product.price > 30) {
       return {name: product.name, price: product.price / 2};
    }
    return product;
}); 

console.log(saleProducts);
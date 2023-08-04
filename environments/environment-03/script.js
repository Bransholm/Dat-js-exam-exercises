// # Øvelse 7
// Environment: `environment-03`
// 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
// 2. Lav en funktion der viser en sorteret liste af alle produkter. Produkter som er i `stock` (hvor `inStock` er `true`) skal vises først.
// 3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

"use strict";


window.addEventListener("load", start);
const myArray = []

function start() {
   document.querySelector("#create-form").addEventListener("submit", createNewProduct); 
}

function createNewProduct(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const inStock = form.inStock.checked;

    createProductObject(name, price, inStock);
}

function createProductObject(name, price, inStock) {
    const product = { name: name, price: price, inStock: inStock };
    console.log(product);
    myArray.push(product);
    console.log(myArray);

}
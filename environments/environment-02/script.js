"use strict";

Environment: `environment-02`
// 1. Lav en funktion der modtager `name`, `type` og `age`, opretter et `animal` objekt
//med de tre properties, og tilføjer det til en global liste, `animals`.
// 2. Lav en funktion der reagerer når brugeren trykker på "Create new" knappen,
//og opretter et nyt `animal` objekt med de data der er tastet ind på websiden.
//Test at objektet er tilføjet den globale liste, `animals`.
// 3. Lav en funktion der viser listen af alle animal-objekter - sorteret alfabetisk.
//Listen opdateres hver gang brugeren opretter et nyt.

window.addEventListener("load", start);

const list = []

function start() {
    console.log("Javascript");
    
    document.querySelector("#create-form").addEventListener("submit", createAnimal);
    showAnimal();
}



function createAnimal(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const type = form.type.value;
    const age = form.age.value;
    
     const newAnimal = { name: name, type: type, age: age };
     list.push(newAnimal);
     showAnimal();
}

function showAnimal() {
    document.querySelector("tbody").innerHTML = "";
    list.sort((a, b) => a.name.localeCompare(b.name));
    for (const animal of list) {
        const html =
            `
                    <tr>
                        <td>${animal.name}</td>
                        <td>${animal.type}</td>
                        <td>${animal.age}</td>
                    </tr>
            `
        document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
    }
    }

























    // window.addEventListener("load", start);

    // const list = [];

    // function start() {
    //   console.log("Javascript");
    //   animal("Benny", "Cat", 7);
    //   document
    //     .querySelector("#create-form")
    //     .addEventListener("submit", createAnimal);
    //   showAnimal();
    // }

    // function animal(name, type, age) {
    //   const newAnimal = { name: name, type: type, age: age };
    //   list.push(newAnimal);
    //   showAnimal();
    // }

    // function createAnimal(event) {
    //   event.preventDefault();
    //   const form = event.target;
    //   const name = form.name.value;
    //   const type = form.type.value;
    //   const age = form.age.value;
    //   animal(name, type, age);
    // }

    // function showAnimal() {
    //   document.querySelector("tbody").innerHTML = "";
    //   list.sort((a, b) => a.name.localeCompare(b.name));
    //   for (const animal of list) {
    //     const html = `
    //                 <tr>
    //                     <td>${animal.name}</td>
    //                     <td>${animal.type}</td>
    //                     <td>${animal.age}</td>
    //                 </tr>
    //         `;
    //     document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
    //   }
    // }

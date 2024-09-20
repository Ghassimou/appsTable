let title = document.getElementById("caption");

// let number = parseInt(prompt("taper le nombre a mutiplier : "));

// let numberTable = parseInt(prompt("le nombre de table de 1 à 20 : "));

//*************************************************

let number = parseInt(prompt("Tape le numero de table : "));

const tbody = document.querySelector("tbody");

for (i = 0; i <= 10; i++) {
  document.getElementById("caption").innerHTML = `Table de : ${number}`;

  tbody.innerHTML += `
        <tbody>
         <th>${number}</th><td>x</td><td>${i}</td><td>=</td><td>${
    number * i
  }</td>
         </tbody>`;
}

//*************************************************

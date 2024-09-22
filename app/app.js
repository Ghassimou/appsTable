//**************************************************************************************************************** */

// Ask the user how many tables they want to display and how many rows per table
let table =
  parseInt(
    prompt(
      "Tapez la table de multiplication que vous voulez afficher (exemple 2 pour la table de 2)"
    )
  ) || 2;

let lengthTable =
  parseInt(
    prompt(
      "Tapez le nombre de ligne par table (exemple, 10 pour afficher les multiples jusqu'à 10)"
    )
  ) || 10;

let nbrTable =
  parseInt(
    prompt(
      "Tapez un nombre de table que vous voulez afficher (exemple 5 tables de 5 à 10)"
    )
  ) || 1;

// Function to generate a multiplication table for a given number

function theTable(number) {
  // Créer élement table (Tableau)

  let tableElement = document.createElement("table");

  // Créer élément caption (légende de chaque table)

  let caption = document.createElement("caption");

  //Afficher la légende pour chaque table

  caption.innerHTML = `Table de mutiplication de ${number}`;
  // Créer élément thead en tête du tableau

  let headRow = document.createElement("thead");

  // Afficher élément en tête du tableau
  headRow.innerHTML = `<tr>
          <th>Table</th>
          <th>(X)</th>
          <th>Nbres</th>
          <th>(=)</th>
          <th>Multiples</th>
        </tr>`;

  tableElement.appendChild(caption);
  tableElement.appendChild(headRow);
  //Créer élément tbody

  let tbody = document.createElement("tbody");

  //Générer une table de multiplication pour un nombre donné

  for (let j = 0; j <= lengthTable; j++) {
    let bodyRow = document.createElement("tr");
    bodyRow.innerHTML += `
        <td>${number}</td><td>x</td><td>${j}</td><td>=</td><td>${
      number * j
    }</td>`;

    // Ajouter la légende au tableau

    tbody.appendChild(bodyRow);
  }

  // Ajouter le tbody au tableau

  tableElement.appendChild(tbody);

  // Ajouter le tableau au document

  document.getElementById("tables").appendChild(tableElement);
}

// Generates and displays multiple multiplication tables

for (let i = table; i < table + nbrTable; i++) {
  theTable(i, lengthTable);
}
//******************************************************************************************************************** */

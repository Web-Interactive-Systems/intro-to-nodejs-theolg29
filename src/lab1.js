const path = require('path');

/**
 Todo: create a function that sets a timeout of 3000ms and 
  do the following inside its callback:
  - console.table an array of elements
  - console.log __dirname
  - console.log __filename
  - console.log require
  - console.log module
  - console.log process
  - console.log window
 */

  // Lab 1
function labOne() {
    setTimeout(() => {
        const elements = ['element1', 'element2', 'element3'];
        console.table(elements);
        console.log(__dirname); // Chaine de caractère : Répertoire du fichier courant
        console.log(__filename); // Chaine de caractère : Nom du fichier
        console.log(require);
        console.log(module);
        console.log(process); // Object : infos sur le Processus utilisé par NodeJS
        console.log(process.env.nodeProdcution); // Pour afficher une variable d'env spécifique
        console.log("Path:", path);
        console.log(window);
    }, 3000);
}

labOne();
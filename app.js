'use strict';
// Mode stict - Utilisation d'une version plus restrictive du JS
//  - Tranforme des erreurs silencieuse en erreur runtime
//  - Certains messages d'erreur sont plus detaillé
//  - Erreur sur les mots clefs réservé pour la norme ECMAScript
//  - Une code "stict" est généralement plus performant

// L'import des dépendances (necessite d'être installé)
const lodash = require('lodash');
const chalk = require('chalk');

// Traitement...
console.log(chalk.red('Hello World !'));

const rng1 = lodash.random(1, 10, false);
console.log('Le nombre aléatoire est de ' + rng1 + ' !');

const rng2 = lodash.random(1, 10, false);
console.log(`Le nombre aléatoire est de ${rng2} !`)


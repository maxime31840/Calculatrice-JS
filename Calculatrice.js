const prompt = require('prompt-sync')();

function Addition(a, b) {
    return a + b;
}

function Soustraction(a, b) {
    return a - b;
}

function Multiplication(a, b) {
    return a * b;
}

function Division(a, b) {
    if (b === 0) {
        return "Division par zéro impossible";
    }
    return parseFloat((a / b).toFixed(2));  // Limite à 2 décimales
}

function Calculatrice(a, b, operation) {
    switch (operation) {
        case "+":
            return Addition(a, b);
        case "-":
            return Soustraction(a, b);
        case "*":
            return Multiplication(a, b);
        case "/":
            return Division(a, b);
        default:
            return "Opération inconnue";
    }
}

// Fonction pour afficher l'interface utilisateur et effectuer le calcul
function demarrerCalculatrice() {
    // Affichage du message de bienvenue
    console.log("********************************");
    console.log(" Bienvenue dans la calculatrice");
    console.log("********************************\n");

    // Demander à l'utilisateur les entrées nécessaires
    let a = parseFloat(prompt("Entrez le premier nombre: "));
    let b = parseFloat(prompt("Entrez le deuxième nombre: "));
    let operation = prompt("Choisissez une opération (+, -, *, /): ");

    // Effectuer le calcul
    let result = Calculatrice(a, b, operation);

    // Affichage du résultat
    console.log("\n*************************");
    console.log("Résultat de l'opération :");
    console.log(`${a} ${operation} ${b} = ${result}`);
    console.log("*************************");
}

// Démarrer la calculatrice
demarrerCalculatrice();

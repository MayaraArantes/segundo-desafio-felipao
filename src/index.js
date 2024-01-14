let numVitorias = 95;
let numDerrotas = 15;
let nivelHeroi;

calcular(numVitorias, numDerrotas)

function calcular(numVitorias,  numDerrotas) {
    return saldoRankeadas = numVitorias - numDerrotas;}

    if (numVitorias < 10) {
        nivelHeroi = "Ferro";
    } else if (numVitorias > 11 && numVitorias < 20) {
        nivelHeroi = "Bronze";
    } else if (numVitorias > 21 && numVitorias < 50) {
        nivelHeroi = "Prata";
    } else if (numVitorias > 51 && numVitorias < 80) {
        nivelHeroi = "Ouro";
    } else if (numVitorias > 81 && numVitorias < 90) {
        nivelHeroi = "Diamante";
    } else if (numVitorias > 91 && numVitorias < 100) {
        nivelHeroi = "Lendário";
    } else {
        nivelHeroi = "Imortal";
    }

    console.log(`O Heroi tem o saldo de ${saldoRankeadas} e está no nível de ${nivelHeroi}`);
    

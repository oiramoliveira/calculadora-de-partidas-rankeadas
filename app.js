console.log('Calculadora de Partidas Rankeadas')

//Gera número aleatórios de 0 a 120
let vitorias = Math.floor(Math.random() * 200)
let derrotas = Math.floor(Math.random() * 200)

function partidaRankeada(vitorias, derrotas){

    let partidas = vitorias - derrotas
    
    return partidas
}
// atribui o resultado a variável "resultado"
let resultado = partidaRankeada(vitorias, derrotas)

//se o número for negativo, transforma em positivo
resultado = Math.abs(resultado)

//Recebe em qual Rank a jogador se econtra
let rank = ""

if (resultado < 10) {
    rank = "Ferro"
} else if (resultado >= 11 && resultado <= 20) {
    rank = "Bronze"
} else if (resultado >= 21 && resultado <= 50) {
    rank = "Prata"
} else if (resultado >= 51 && resultado <= 80) {
    rank = "Ouro"
} else if (resultado >= 81 && resultado <= 90) {
    rank = "Diamante"
} else if (resultado >= 91 && resultado <= 100) {
    rank = "Lendário"
} else {
    rank = "Imortal"
}

console.log("Vitórias: " + vitorias)
console.log("Derrotas: " + derrotas)
console.log("O Herói tem o Saldo de: " + resultado + " Vitórias")
console.log("Está no nível de: " + rank)

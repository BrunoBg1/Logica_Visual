let numeroSecreto = gerarNumeroAleatorio();
function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

exibirTextoTela('h1', 'Jogo do número secreto');
exibirTextoTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoTela('h1', 'Você acertou!');
        exibirTextoTela('p', 'Parabéns você descobriu o número secreto!');
    } else{
        if (chute > numeroSecreto) {
            exibirTextoTela('p', 'O número é menor!');
        }else{
            exibirTextoTela('p', 'O número é maior!');
        }
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
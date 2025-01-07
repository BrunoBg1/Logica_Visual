let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function exibirMensagemPadrao() {
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemPadrao();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoTela('h1', 'Você acertou!');
        let numeroTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagensTentativas =  `Você descobriu o número secreto com ${tentativas} ${numeroTentativas}!`;
        exibirTextoTela('p', mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto) {
            exibirTextoTela('p', 'O número é menor!');
        }else{
            exibirTextoTela('p', 'O número é maior!');
        }
        tentativas++;
        limparInput(); 
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparInput() {
    chute = document.querySelector('input');
    chute.value= '';
}

function reiniciarGamer() {
    numeroSecreto = gerarNumeroAleatorio();
    limparInput();
    tentativas = 1;
    exibirMensagemPadrao();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

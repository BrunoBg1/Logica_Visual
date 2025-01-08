let numerosSorteados = [];
let maximoNumero = 10;
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
    let numeroEscolhido = parseInt(Math.random() * maximoNumero + 1);
    let quantidadeNumerosLista = numerosSorteados.length;

    if (quantidadeNumerosLista == maximoNumero) {
        numerosSorteados = [];
    }
    
    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados)
        return numeroEscolhido;
    }
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

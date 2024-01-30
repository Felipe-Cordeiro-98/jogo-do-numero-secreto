let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1 });
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Parabéns, você acertou!");
        exibirTextoNaTela("p", "O número secreto é: " + numeroSecreto);
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela("p", `O número e maior que ${chute}`);
    } else {
        exibirTextoNaTela("p", `O número e menor que ${chute}`);
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

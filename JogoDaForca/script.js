import { returnRandomWord } from './palavras.js';

let palavra, pista;
let vidas = 5;
let erros;
let tentativas;
let progresso;

iniciarJogo();

window.enviarLetra = function () {
    const input = document.getElementById('letraInput');
    const letra = input.value.trim().toLowerCase();

    if (letra.length !== 1 || !/[a-zà-ú]/i.test(letra)) {
        alert('Digite uma letra válida!');
        input.value = '';
        return;
    }

    if (tentativas.includes(letra) || progresso.includes(letra.toUpperCase())) {
        alert('Você já tentou essa letra!');
        input.value = '';
        return;
    }

    if (palavra.toLowerCase().includes(letra)) {
        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i].toLowerCase() === letra) {
                progresso[i] = palavra[i].toUpperCase();
            }
        }
    } else {
        tentativas.push(letra);
        erros++;
    }

    atualizarProgresso();
    atualizarStatus();
    input.value = '';

    if (!progresso.includes('')) {
        document.getElementById('mensagemFinal').innerText = '🎉 Parabéns, você venceu!';
        desativarInput();
    } else if (erros >= vidas) {
        document.getElementById('mensagemFinal').innerText = `💀 Você perdeu! A palavra era: ${palavra.toUpperCase()}`;
        desativarInput();
    }
}

window.reiniciarJogo = function () {
    iniciarJogo();
}

function iniciarJogo() {
    const palavraSorteada = returnRandomWord();
    palavra = palavraSorteada.palavra;
    pista = palavraSorteada.pista;
    erros = 0;
    tentativas = [];
    progresso = Array(palavra.length).fill('');

    document.getElementById('dica').innerText = `Dica: ${pista}`;
    document.getElementById('letraInput').disabled = false;
    document.getElementById('letraInput').value = '';
    document.getElementById('mensagemFinal').innerText = '';

    atualizarProgresso();
    atualizarStatus();
}

function atualizarProgresso() {
    const progressoDiv = document.getElementById('progresso');
    progressoDiv.innerHTML = '';
    progresso.forEach(letra => {
        const span = document.createElement('div');
        span.classList.add('letra');
        span.textContent = letra;
        progressoDiv.appendChild(span);
    });
}

function atualizarStatus() {
    document.getElementById('erros').innerText = `Erros: ${erros}/${vidas}`;
    document.getElementById('letrasErradas').innerText = `Letras erradas: ${tentativas.join(', ')}`;
}

function desativarInput() {
    document.getElementById('letraInput').disabled = true;
}

// Importa a função que retorna uma palavra aleatória e sua pista (dica)
import { returnRandomWord } from './palavras.js';

// Variáveis globais do jogo
let palavra, pista;  // palavra sorteada e pista associada
let vidas = 5;       // número máximo de erros permitidos
let erros;           // quantidade atual de erros cometidos
let tentativas;      // letras erradas já tentadas
let progresso;       // array que guarda as letras corretas já descobertas

// Inicializa o jogo assim que o script carrega
iniciarJogo();

// Função acionada ao clicar no botão ou enviar letra
window.enviarLetra = function () {
    const input = document.getElementById('letraInput');
    const letra = input.value.trim().toLowerCase();  // pega letra e normaliza para minúscula

    // Validação: só aceita uma única letra válida do alfabeto (incluindo letras acentuadas)
    if (letra.length !== 1 || !/[a-zà-ú]/i.test(letra)) {
        alert('Digite uma letra válida!');
        input.value = '';
        return;
    }

    // Verifica se a letra já foi tentada (tentativas erradas) ou já foi descoberta (progresso)
    if (tentativas.includes(letra) || progresso.includes(letra.toUpperCase())) {
        alert('Você já tentou essa letra!');
        input.value = '';
        return;
    }

    // Se a letra estiver na palavra, atualiza o progresso revelando as posições corretas
    if (palavra.toLowerCase().includes(letra)) {
        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i].toLowerCase() === letra) {
                progresso[i] = palavra[i].toUpperCase(); // guarda a letra maiúscula para mostrar
            }
        }
    } else {
        // Se a letra não estiver na palavra, conta como erro e registra a tentativa
        tentativas.push(letra);
        erros++;
    }

    // Atualiza a interface com o progresso e status do jogo
    atualizarProgresso();
    atualizarStatus();
    input.value = '';

    // Verifica condições de vitória ou derrota
    if (!progresso.includes('')) {  // se não há mais espaços vazios, jogador venceu
        document.getElementById('mensagemFinal').innerText = '🎉 Parabéns, você venceu!';
        desativarInput();
    } else if (erros >= vidas) {    // se número de erros atingiu o limite, jogador perdeu
        document.getElementById('mensagemFinal').innerText = `💀 Você perdeu! A palavra era: ${palavra.toUpperCase()}`;
        desativarInput();
    }
}

// Função para reiniciar o jogo, chamando a função de iniciar
window.reiniciarJogo = function () {
    iniciarJogo();
}

// Função que inicializa o jogo, sorteando uma nova palavra e configurando as variáveis
function iniciarJogo() {
    const palavraSorteada = returnRandomWord(); // pega palavra e pista aleatória
    palavra = palavraSorteada.palavra;
    pista = palavraSorteada.pista;
    erros = 0;
    tentativas = [];
    progresso = Array(palavra.length).fill(''); // cria array vazio para o progresso

    // Atualiza elementos da página para o novo jogo
    document.getElementById('dica').innerText = `Dica: ${pista}`;
    document.getElementById('letraInput').disabled = false;
    document.getElementById('letraInput').value = '';
    document.getElementById('mensagemFinal').innerText = '';

    atualizarProgresso();
    atualizarStatus();
}

// Atualiza a exibição do progresso no HTML, mostrando as letras descobertas
function atualizarProgresso() {
    const progressoDiv = document.getElementById('progresso');
    progressoDiv.innerHTML = ''; // limpa o conteúdo atual

    progresso.forEach(letra => {
        const span = document.createElement('div');
        span.classList.add('letra'); // classe para estilização
        span.textContent = letra;    // insere a letra (ou vazio)
        progressoDiv.appendChild(span);
    });
}

// Atualiza a exibição da quantidade de erros e das letras erradas já tentadas
function atualizarStatus() {
    document.getElementById('erros').innerText = `Erros: ${erros}/${vidas}`;
    document.getElementById('letrasErradas').innerText = `Letras erradas: ${tentativas.join(', ')}`;
}

// Desativa o campo de input para impedir que o jogador digite após fim do jogo
function desativarInput() {
    document.getElementById('letraInput').disabled = true;
}

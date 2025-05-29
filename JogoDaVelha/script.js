// Variável que define quem começa jogando
let jogadorAtual = 'X';

// Variável que armazena o vencedor da partida
let vencedor = null;

// Contadores de vitórias para cada jogador
let vitoriasX = 0;
let vitoriasO = 0;

// Referências aos elementos da interface
const jogadorSpan = document.getElementById('jogador-selecionado');
const vencedorSpan = document.getElementById('vencedor-selecionado');
const tabuleiro = document.getElementById('tabuleiro');
const contadorX = document.getElementById('contador-x');
const contadorO = document.getElementById('contador-o');

// Função responsável por criar dinamicamente os quadrados do tabuleiro
function criarTabuleiro() {
  for (let i = 1; i <= 9; i++) {
    const div = document.createElement('div');
    div.classList.add('quadrado'); // adiciona a classe CSS para estilo
    div.id = `q${i}`; // define o ID do quadrado (q1, q2, ..., q9)
    div.innerText = '-'; // conteúdo inicial vazio
    div.onclick = () => escolherQuadrado(div.id); // adiciona evento de clique
    tabuleiro.appendChild(div); // adiciona o quadrado ao tabuleiro
  }
  atualizarJogador(jogadorAtual); // exibe o jogador atual na interface
}

// Função chamada ao clicar em um quadrado
function escolherQuadrado(id) {
  // Se já houver vencedor, ignora os cliques
  if (vencedor) return;

  const quadrado = document.getElementById(id);
  
  // Se o quadrado já foi preenchido, não faz nada
  if (quadrado.innerText !== '-') return;

  // Marca o quadrado com o símbolo do jogador atual
  quadrado.innerText = jogadorAtual;
  quadrado.style.color = '#000';

  // Verifica se houve vencedor após a jogada
  if (verificarVencedor()) return;

  // Verifica se todos os quadrados foram preenchidos (empate/velha)
  const todosPreenchidos = [...document.querySelectorAll('.quadrado')]
    .every(q => q.innerText !== '-');

  if (todosPreenchidos && !vencedor) {
    alert('Deu velha!'); // Mensagem de empate
    reiniciar(); // Reinicia o jogo
    return;
  }

  // Alterna o jogador
  jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
  atualizarJogador(jogadorAtual);
}

// Atualiza na interface qual o jogador atual
function atualizarJogador(jogador) {
  jogadorSpan.innerText = jogador;
}

// Verifica todas as combinações vencedoras
function verificarVencedor() {
  const combinacoes = [
    ['q1', 'q2', 'q3'],
    ['q4', 'q5', 'q6'],
    ['q7', 'q8', 'q9'],
    ['q1', 'q4', 'q7'],
    ['q2', 'q5', 'q8'],
    ['q3', 'q6', 'q9'],
    ['q1', 'q5', 'q9'],
    ['q3', 'q5', 'q7'],
  ];

  for (let [a, b, c] of combinacoes) {
    const qa = document.getElementById(a);
    const qb = document.getElementById(b);
    const qc = document.getElementById(c);

    // Se os três quadrados da combinação forem iguais e não estiverem vazios
    if (qa.innerText !== '-' && qa.innerText === qb.innerText && qb.innerText === qc.innerText) {
      vencedor = qa.innerText; // Define o vencedor
      vencedorSpan.innerText = vencedor; // Mostra o vencedor na interface

      // Destaca a combinação vencedora com cor de fundo verde
      [qa, qb, qc].forEach(q => q.style.background = '#0f0');

      // Atualiza o placar de vitórias
      atualizarContador(vencedor);

      // Mostra mensagem de vitória e reinicia o jogo após confirmação
      setTimeout(() => {
        alert(`Jogador ${vencedor} venceu!`);
        reiniciar();
      }, 100);

      return true; // Encerra a verificação
    }
  }

  return false; // Nenhum vencedor encontrado
}

// Função para ocultar o jogo da velha
function voltar() {
  const jogo = document.getElementById('jogo-da-velha');
  jogo.classList.add('oculto');
}

// Atualiza o placar conforme quem venceu
function atualizarContador(vencedor) {
  if (vencedor === 'X') {
    vitoriasX++;
    contadorX.innerText = vitoriasX;
  } else if (vencedor === 'O') {
    vitoriasO++;
    contadorO.innerText = vitoriasO;
  }
}

// Reinicia o jogo, limpando o tabuleiro e resetando estados
function reiniciar() {
  vencedor = null;
  vencedorSpan.innerText = '';
  jogadorAtual = 'X';
  atualizarJogador(jogadorAtual);

  for (let i = 1; i <= 9; i++) {
    const quadrado = document.getElementById(`q${i}`);
    quadrado.innerText = '-';
    quadrado.style.background = '#eee'; // cor neutra
    quadrado.style.color = '#eee'; // "esconde" o texto
  }
}

// Alterna a exibição do jogo da velha
function alternarJogoDaVelha() {
  const jogo = document.getElementById('jogo-da-velha');
  jogo.classList.toggle('oculto');
}

// Alterna a exibição do jogo da forca (outro jogo)
function alternarJogoDaForca() {
  const jogo = document.getElementById('jogo-da-forca');
  jogo.classList.toggle('oculto');
}

// Zera as vitórias de ambos os jogadores
function zerarVitorias() {
  vitoriasX = 0;
  vitoriasO = 0;
  contadorX.innerText = 0;
  contadorO.innerText = 0;
}

// Inicializa o tabuleiro ao carregar a página
criarTabuleiro();

let jogadorAtual = 'X';
let vencedor = null;
let vitoriasX = 0;
let vitoriasO = 0;

const jogadorSpan = document.getElementById('jogador-selecionado');
const vencedorSpan = document.getElementById('vencedor-selecionado');
const tabuleiro = document.getElementById('tabuleiro');
const contadorX = document.getElementById('contador-x');
const contadorO = document.getElementById('contador-o');

function criarTabuleiro() {
  for (let i = 1; i <= 9; i++) {
    const div = document.createElement('div');
    div.classList.add('quadrado');
    div.id = `q${i}`;
    div.innerText = '-';
    div.onclick = () => escolherQuadrado(div.id);
    tabuleiro.appendChild(div);
  }
  atualizarJogador(jogadorAtual);
}

function escolherQuadrado(id) {
  if (vencedor) return;

  const quadrado = document.getElementById(id);
  if (quadrado.innerText !== '-') return;

  quadrado.innerText = jogadorAtual;
  quadrado.style.color = '#000';

  if (verificarVencedor()) return;

  // Verifica se deu velha (empate)
  const todosPreenchidos = [...document.querySelectorAll('.quadrado')]
    .every(q => q.innerText !== '-');

  if (todosPreenchidos && !vencedor) {
    alert('Deu velha!');
    reiniciar();
    return;
  }

  jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
  atualizarJogador(jogadorAtual);
}


function atualizarJogador(jogador) {
  jogadorSpan.innerText = jogador;
}

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

    if (qa.innerText !== '-' && qa.innerText === qb.innerText && qb.innerText === qc.innerText) {
      vencedor = qa.innerText;
      vencedorSpan.innerText = vencedor;
      [qa, qb, qc].forEach(q => q.style.background = '#0f0');
      atualizarContador(vencedor);

      // Mostra alert e reinicia depois de clicar
      setTimeout(() => {
        alert(`Jogador ${vencedor} venceu!`);
        reiniciar();
      }, 100);

      return true;
    }
  }

  return false;
}

function voltar() {
  const jogo = document.getElementById('jogo-da-velha');
  jogo.classList.add('oculto');
}


function atualizarContador(vencedor) {
  if (vencedor === 'X') {
    vitoriasX++;
    contadorX.innerText = vitoriasX;
  } else if (vencedor === 'O') {
    vitoriasO++;
    contadorO.innerText = vitoriasO;
  }
}

function reiniciar() {
  vencedor = null;
  vencedorSpan.innerText = '';
  jogadorAtual = 'X';
  atualizarJogador(jogadorAtual);

  for (let i = 1; i <= 9; i++) {
    const quadrado = document.getElementById(`q${i}`);
    quadrado.innerText = '-';
    quadrado.style.background = '#eee';
    quadrado.style.color = '#eee';
  }
}

function alternarJogoDaVelha() {
  const jogo = document.getElementById('jogo-da-velha');
  jogo.classList.toggle('oculto');
}

function alternarJogoDaForca() {
  const jogo = document.getElementById('jogo-da-forca');
  jogo.classList.toggle('oculto');
}

function zerarVitorias() {
  vitoriasX = 0;
  vitoriasO = 0;
  contadorX.innerText = 0;
  contadorO.innerText = 0;
}


criarTabuleiro();

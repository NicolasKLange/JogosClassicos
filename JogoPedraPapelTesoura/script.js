const opcoes = document.querySelectorAll('.opcao');
const escolhaUsuarioDiv = document.getElementById('escolhaUsuario');
const escolhaMaquinaDiv = document.getElementById('escolhaMaquina');
const resultadoDiv = document.getElementById('resultado');

const emojis = {
  'PEDRA': '✊',
  'PAPEL': '📄',
  'TESOURA': '✂️'
};

opcoes.forEach(opcao => {
  opcao.addEventListener('click', () => {
    const escolhaUsuario = opcao.getAttribute('data-opcao');
    const escolhaMaquina = gerarEscolhaMaquina();
    
    escolhaUsuarioDiv.textContent = emojis[escolhaUsuario];
    escolhaMaquinaDiv.textContent = emojis[escolhaMaquina];
    
    const resultado = determinarVencedor(escolhaUsuario, escolhaMaquina);
    resultadoDiv.textContent = resultado;
  });
});

function gerarEscolhaMaquina() {
  const escolhas = ['PEDRA', 'PAPEL', 'TESOURA'];
  const randomIndex = Math.floor(Math.random() * escolhas.length);
  return escolhas[randomIndex];
}

function determinarVencedor(usuario, maquina) {
  if (usuario === maquina) {
    return 'Empate!';
  }
  if (
    (usuario === 'PEDRA' && maquina === 'TESOURA') ||
    (usuario === 'PAPEL' && maquina === 'PEDRA') ||
    (usuario === 'TESOURA' && maquina === 'PAPEL')
  ) {
    return 'Você ganhou! 🎉';
  } else {
    return 'Você perdeu! 😢';
  }
}

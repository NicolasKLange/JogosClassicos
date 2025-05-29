// Seleciona todos os elementos com a classe 'opcao' (botões ou opções de escolha do usuário)
const opcoes = document.querySelectorAll('.opcao');

// Referências aos elementos da página que mostrarão a escolha do usuário, da máquina e o resultado
const escolhaUsuarioDiv = document.getElementById('escolhaUsuario');
const escolhaMaquinaDiv = document.getElementById('escolhaMaquina');
const resultadoDiv = document.getElementById('resultado');

// Objeto que mapeia o nome da escolha para seu respectivo emoji visual
const emojis = {
  'PEDRA': '✊',
  'PAPEL': '📄',
  'TESOURA': '✂️'
};

// Para cada opção clicável, adiciona um listener que reage ao clique do usuário
opcoes.forEach(opcao => {
  opcao.addEventListener('click', () => {
    // Captura a escolha do usuário a partir do atributo 'data-opcao' do elemento clicado
    const escolhaUsuario = opcao.getAttribute('data-opcao');
    
    // Gera uma escolha aleatória da máquina
    const escolhaMaquina = gerarEscolhaMaquina();
    
    // Atualiza a interface para mostrar as escolhas do usuário e da máquina com emojis
    escolhaUsuarioDiv.textContent = emojis[escolhaUsuario];
    escolhaMaquinaDiv.textContent = emojis[escolhaMaquina];
    
    // Determina o resultado da partida e exibe na tela
    const resultado = determinarVencedor(escolhaUsuario, escolhaMaquina);
    resultadoDiv.textContent = resultado;
  });
});

// Função que gera uma escolha aleatória para a máquina
function gerarEscolhaMaquina() {
  const escolhas = ['PEDRA', 'PAPEL', 'TESOURA'];
  const randomIndex = Math.floor(Math.random() * escolhas.length);
  return escolhas[randomIndex];
}

// Função que determina o vencedor do jogo com base nas regras do Pedra, Papel e Tesoura
function determinarVencedor(usuario, maquina) {
  if (usuario === maquina) {
    return 'Empate!';
  }
  // Regras onde o usuário vence
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

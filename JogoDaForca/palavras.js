export function returnRandomWord() {

    const palavras = [
        { palavra: "abacaxi", pista: "Fruta tropical" },
        { palavra: "computador", pista: "Equipamento eletrônico" },
        { palavra: "girassol", pista: "Flor que segue o sol" },
        { palavra: "oceano", pista: "Grande massa de água salgada" },
        { palavra: "avião", pista: "Meio de transporte aéreo" },
        { palavra: "bicicleta", pista: "Meio de transporte de duas rodas" },
        { palavra: "montanha", pista: "Grande elevação de terra" },
        { palavra: "borboleta", pista: "Inseto colorido que voa" },
        { palavra: "relâmpago", pista: "Luz forte durante a tempestade" },
        { palavra: "violino", pista: "Instrumento musical de cordas" },
        { palavra: "janela", pista: "Abertura na parede para entrada de luz" },
        { palavra: "foguete", pista: "Veículo espacial" },
        { palavra: "pirâmide", pista: "Construção famosa no Egito" },
        { palavra: "planeta", pista: "Corpo celeste que orbita uma estrela" },
        { palavra: "elefante", pista: "Maior animal terrestre" },
        { palavra: "escada", pista: "Usada para subir ou descer" },
        { palavra: "telescópio", pista: "Instrumento para observar estrelas" },
        { palavra: "cachorro", pista: "Melhor amigo do homem" },
        { palavra: "pinguim", pista: "Ave que vive no gelo e não voa" },
        { palavra: "baleia", pista: "Maior animal do oceano" },
        { palavra: "arco-íris", pista: "Fenômeno colorido no céu" },
        { palavra: "deserto", pista: "Lugar muito seco e quente" },
        { palavra: "medalha", pista: "Prêmio em competições" },
        { palavra: "cérebro", pista: "Órgão responsável pelos pensamentos" },
        { palavra: "livro", pista: "Objeto cheio de histórias ou informações" },
        { palavra: "chocolate", pista: "Doce feito de cacau" },
        { palavra: "sanduíche", pista: "Comida entre duas fatias de pão" },
        { palavra: "microfone", pista: "Aparelho para captar som" },
        { palavra: "televisão", pista: "Aparelho para ver programas" },
        { palavra: "bússola", pista: "Instrumento que aponta para o norte" },
        { palavra: "vulcao", pista: "Montanha que cospe lava" },
        { palavra: "piano", pista: "Instrumento musical de teclas" },
        { palavra: "anfíbio", pista: "Animal que vive na água e na terra" },
        { palavra: "escorpião", pista: "Animal com cauda venenosa" },
        { palavra: "esquilo", pista: "Animal que gosta de nozes" },
        { palavra: "arvore", pista: "Planta grande com tronco" },
        { palavra: "estrela", pista: "Brilha no céu à noite" },
        { palavra: "camaleão", pista: "Animal que muda de cor" },
        { palavra: "iceberg", pista: "Bloco de gelo flutuante" },
        { palavra: "castelo", pista: "Fortaleza antiga" },
        { palavra: "mochila", pista: "Usada para carregar coisas nas costas" },
        { palavra: "dinossauro", pista: "Animal pré-histórico" },
        { palavra: "helicoptero", pista: "Veículo aéreo com hélices" },
        { palavra: "girafa", pista: "Animal de pescoço muito longo" },
        { palavra: "flauta", pista: "Instrumento musical de sopro" },
        { palavra: "puzzle", pista: "Jogo de montar peças" },
        { palavra: "travesseiro", pista: "Usado para apoiar a cabeça ao dormir" },
        { palavra: "farol", pista: "Ilumina o caminho de navios ou carros" },
        { palavra: "carrossel", pista: "Brinquedo de parque que gira" }
    ]
    try {
        let index = Math.floor(Math.random() * palavras.length)
        return palavras[index]

    } catch (error) {
        console.error(error)
    }
}
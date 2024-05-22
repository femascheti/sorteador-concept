const palavrasFaceis = [
    "Doutor House", "Toy Story", "Cereja", "Cavalo", "Cartão de crédito", "Disco voador", "Chá", 
    "Pokemon", "Mestre-cuca", "Boate", "Sapo", "Caçador", "Yoda", "Submarino", "Buzina", "Tubarão", 
    "Meia-calça", "Suco de frutas", "Leme", "Professor", "Chocolate", "Cata-vento", "Varanda", 
    "Chaminé", "Disfarce", "Cortina",
    "Lâmpada", "Cachorro", "Pirata", "Panda", "Fantasma", "Música", "Bicicleta", "Parque", "Gelado", "Peixe"
];

const palavrasMedias = [
    "Alvo", "lampião", "bigode", "porta dos fundos", "poseidon", "o grinch", "lentes de contato", 
    "the sims", "power rangers", "os três mosqueteiros", "asterix e obelix", "post-it", "robin wood", 
    "start wars", "rihanna", "bicho papão", "arco-íris", "dia do trabalhador", "miss brasil", "mala", 
    "1984", "propaganda", "mogli", "fertilizante", "Amy Winehouse",
    "Harry Potter", "Carro de corrida", "Montanha-russa", "Bailarina", "Espantalho", "Esquadrão Suicida", 
    "Química", "Guitarra elétrica", "Palhaço", "Super Mario"
];

const palavrasDificeis = [
    "calças curtas", "jogar lenha na fogueira", "tirar uma selfie", "dar um branco", "dar água na boca", 
    "martelo do Thor", "o naufrago", "olhos de águia", "residente evil", "guerra dos tronos", 
    "estatua da liberdade", "dragon ball z", "o menino maluquinho", "sumir do mapa", "de partir o coração",
    "Rei Leão", "Piratas do Caribe", "Máquina do tempo", "Tempos Modernos", "O Senhor dos Anéis", 
    "Transformers", "Planeta dos Macacos", "Lago dos Cisnes", "O Pequeno Príncipe", "Viagem ao Centro da Terra"
];
document.getElementById("facil").addEventListener("click", () => sortearPalavra(palavrasFaceis));
document.getElementById("medio").addEventListener("click", () => sortearPalavra(palavrasMedias));
document.getElementById("dificil").addEventListener("click", () => sortearPalavra(palavrasDificeis));

function sortearPalavra(listaDePalavras) {
    const indice = Math.floor(Math.random() * listaDePalavras.length);
    const palavraSorteada = listaDePalavras[indice];
    document.getElementById("palavra").textContent = palavraSorteada;
}

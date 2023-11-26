// Classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar
  atacar() {
    let ataque;
    let mensagemNome = this.nome ? `${this.nome} ` : ''; // Adiciona o nome se estiver disponível

    // Definindo o tipo de ataque com base no tipo do herói
    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'usou um ataque genérico';
    }

    // Exibindo a mensagem de ataque
    console.log(`O ${mensagemNome}${this.tipo} atacou o lobo usando ${ataque}`);
  }
}

// Exemplo de uso da classe
const heroiMago = new Heroi('Gandalf', 1500, 'mago');
heroiMago.atacar(); // Saída: O Gandalf mago atacou usando magia

const heroiGuerreiro = new Heroi('Aragorn', 35, 'guerreiro');
heroiGuerreiro.atacar(); // Saída: O Aragorn guerreiro atacou usando espada

const heroiMonge = new Heroi('Bruce Lee', 32, 'monge');
heroiMonge.atacar(); // Saída: O Bruce Lee monge atacou usando artes marciais

const heroiNinja = new Heroi('Hanzo', 28, 'ninja');
heroiNinja.atacar(); // Saída: O Hanzo ninja atacou usando shuriken

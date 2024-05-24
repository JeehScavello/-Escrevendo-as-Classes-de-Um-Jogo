class Heroi {
    constructor(nome, xp, tipo) {
        this.nome = nome;
        this.xp = xp;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreira") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        } else {
            ataque = "fez um ataque desconhecido";
        }
        
        console.log(`${this.nome} a ${this.tipo}, atacou usando ${ataque}, ganhando ${this.xp} pontos de experiência`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Hera", 1990, "guerreira");
const heroi2 = new Heroi("Morgana", 2009, "mago");
const heroi3 = new Heroi("Benkei", 1850, "monge");
const heroi4 = new Heroi("NarutoKakusan-ni", 65410, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

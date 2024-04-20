

class Estudante{
    constructor(nome, email, ra, curso, disciplinas){
        this.nome = nome
        this.email = email
        this.ra = ra
        this.curso = curso
        this.disciplinas = disciplinas
    }
    primeiraDisciplina(){
        return this.disciplinas[0];
    }

    ultimaDisciplina(){
      return this.disciplinas[this.disciplinas.length - 1];
    }   
}

const estudante1 = new Estudante(
    "Leonardo",
    "leonardo@fatec.com",
    909090,
    "TI",
    [
        'Programação',
        'Engenharia de Software',
        'Banco de Dados'
    ]
);

const estudante2 = new Estudante(
    "Wagner",
    "wagner@fatec.com",
    334455,
    "Medicina",
    [
        'Anatomia',
        'Toxicologia',
        'Imunologia'
    ]
);

const estudantes = [estudante1, estudante2];

for(let i = 0; i < estudantes.length; i++){
    console.log(`A primeira disciplina de ${estudantes[i].nome} é: ${estudantes[i].primeiraDisciplina()}
     E a última disciplina é: ${estudantes[i].ultimaDisciplina()}`);
}

// const exibeDisciplinas = estudantes.map((estudante) => {
//     console.log(`A primeira disciplina do estudante ${estudante.nome} é: ${estudante.primeiraDisciplina()} e a ultima é ${estudante.ultimaDisciplina()}`)
// });



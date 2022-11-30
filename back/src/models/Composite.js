class Aluno {
    constructor(dados){
        this.id = dados.id_aluno;
        this.nome = dados.nome;
        this.nascimento = dados.nascimento;
    }

    showAluno(){
        JSON.stringify({
            "id": this.id,
            "nome": this.nome,
            "nascimento": this.nascimento
        })
    }

}

class Curso{
    constructor(data){
        this.id = data.id_curso;
        this.curso = data.curso;
        this.duracao = data.duracao;
    }
}

const comp = ( dados ) => {
    let composite = []
    dados.forEach(dado => {
        let aluno = new Aluno(dado);
        let curso = new Curso(dado);
        let compo = {
            "aluno": aluno,
            "curso": curso,
            "data" : dado.data_curso
        }
        composite.push(compo)
    })

    return composite
}


module.exports = {comp}
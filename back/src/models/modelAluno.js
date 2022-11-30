const listar_alunos = (model) => {
    return "select * from alunos"
}

const add_aluno = ( model ) => {
    return `insert into alunos values(default,"${model.nome}", "${model.nascimento}");`
}

const alterar_aluno = ( model ) => {
    return `update alunos set nome="${model.nome}", nascimento="${model.nascimento}" where id_aluno=${model.id_aluno};`
}

const deletar_aluno = ( id ) => {
    return `delete from alunos where id_aluno = ${id}`
}

const comp = ( id ) => {
    return `select * from vw_aluno where id_aluno = ${id}`
}

module.exports = {
    listar_alunos,
    add_aluno,
    alterar_aluno,
    deletar_aluno,
    comp
}
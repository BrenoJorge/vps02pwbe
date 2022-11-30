const Item = require('../models/modelAluno');
const con = require('../models/DAO');
const composite = require('../models/Composite')

const listarAlunos = (req, res) => {
    con.query(Item.listar_alunos(), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            res.status(400).json(err).end()
    });
}

const alterarAluno = (req, res) => {
    con.query(Item.alterar_aluno(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            res.status(400).json(err).end()
    });
}

const addAluno = (req, res) => {
    con.query(Item.add_aluno(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const deletarAluno = (req, res) => {
    con.query(Item.deletar_aluno(req.params.id), (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const comp = (req, res) => {
    con.query(Item.comp(req.params.id), (err, result) => {
        if (err == null) {        
            res.status(201).json(composite.comp(result)).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarAlunos,
    alterarAluno,
    addAluno,
    deletarAluno,
    comp
}
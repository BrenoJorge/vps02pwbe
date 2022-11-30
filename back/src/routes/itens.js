const express = require('express');
const router = express.Router();

const Aluno = require("../controllers/alunosController");

router.get("/alunos/get", Aluno.listarAlunos);
router.get("/alunos/:id", Aluno.comp);
router.put("/alunos/put", Aluno.alterarAluno);
router.delete("/alunos/del/:id", Aluno.deletarAluno);
router.post("/alunos/post", Aluno.addAluno);

module.exports = router;
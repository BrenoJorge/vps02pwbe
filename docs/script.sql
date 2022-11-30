drop database if exists provinha;
create database provinha charset=UTF8 collate utf8_general_ci;
use provinha;

create table alunos(
    id_aluno integer not null primary key auto_increment,
    nome varchar(30) not null,
    nascimento varchar(13) not null
);

CREATE TABLE cursos(
    id_curso integer not null primary key auto_increment,
    curso varchar(100) not null,
    duracao integer not null
);

CREATE TABLE cursados(
    aluno integer not null,
    curso integer not null,
    data_curso varchar(13) not null,
    foreign key (aluno) references alunos(id_aluno),
    foreign key (curso) references cursos(id_curso)
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/provinha/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/provinha/docs/cursos.csv'
INTO TABLE cursos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/provinha/docs/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

 select * from alunos;
 select * from cursos;
 select * from cursados;

 create view vw_aluno as select a.id_aluno, a.nome, a.nascimento, c.id_curso, c.curso, c.duracao, cu.data_curso from alunos a 
 INNER JOIN cursados cu ON a.id_aluno = cu.aluno 
 INNER JOIN cursos c on cu.curso = c.id_curso;
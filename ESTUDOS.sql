-- AULA 03
-- CREATE DATABASE cadastro; Criando o banco de dados cadastro

/*CREATE TABLE cadastro.pessoas(
nome VARCHAR(30),
idade TINYINT,
sexo CHAR(1),
peso FLOAT,
altura FLOAT,
nome_mae VARCHAR(30),
nome_pai VARCHAR(30),
nacionalidade VARCHAR(20)

)*/
-- USE cadastro; Entrando no banco cadastro

-- DESCRIBE pessoas; Mostrando como ficou a tabela depois das alterações.alter 

-- As linhas acima fazem parte da aula 03 do curso.

-- TABELA EXCLUIDA
-- --------------------------------------------------------------------------------------

-- Aula 04

-- Criando um banco codificado para utf8
/*CREATE database cadastro
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;*/

-- Crinado a tabela do banco.

-- importante: nesse exemplo temos dois tesouros o ENUM e o decimal o ENUM significa que a coluna sexo vai receber ou uma ou outra informação, o decimal diz que a coluna vai receber 5 numeros cendo 2 depois da virgula.

/*CREATE TABLE  pessoas(
id INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(30) NOT NULL,
nacimento DATE,
sexo ENUM("Masculino","FEMININO"),
PESO DECIMAL(5,2),
altura DECIMAL(3,2),
nacionalidade VARCHAR(20) DEFAULT "Brasil",
PRIMARY KEY(id)
)DEFAULT CHARSET = utf8;*/

-- FIM DA AULA 04

-- ----------------------------------------------------------------------------------------------------------

-- Aula 05

-- USE cadastro;

-- Comando para adicionar propriedades a coluna já criadada.
/*INSERT INTO pessoas
(nome,nacimento,sexo,PESO,altura,nacionalidade)
VALUES
('Allen','2005-07-17','Masculino','55.5','1.70','Brasil');*/

 -- SELECT * FROM -- pessoas seleciona tudo  da tabela pessoa suas propriedades e etc.


-- Atv DH

-- UPDATE AND delete

-- Comando para alterar um valor da coluna.alter
/* UPDATE pessoas SET
nome = "Yan Lee",
PESO = 10.00

WHERE id = 3*/

-- Comando para deletar o registro

-- DELETE FROM usuario WHERE id = 3; --

-- FIM

-- -----------------------------------------------------------------

-- Aula DH 2

-- SELECT * FROM pessoas; -- para selecionar todas as colunas de uma tabela

-- select nome, sexo from PESSOAS; -- Para selecionar somente as colunas selecionadas no comando.

-- FIM

-- ------------------------------------------------------------------

-- Aula DH 3 

-- USANDO MAIS DE UMA CONDIÇÃO.
-- SELECT nome,sexo,peso FROM pessoas WHERE peso > 10 AND nome = "Allen";  .

-- USANDO O OPERADOR DE DIFERENTE
-- SELECT * FROM pessoas WHERE peso != 78.50;

-- USANDO O (OR) UM OU OUTRO VERDADEIRO.
-- SELECT * FROM pessoas WHERE nome = "Allen" OR peso > 10;

-- USANDO O ORDER BY E ORDENADO DE FORMA CRECENTE EM ORDEM ALFABETICA --
-- SELECT nome,nacimento FROM pessoas ORDER BY Nome ASC;

-- EM ORDEM DECRECENTE --
-- SELECT nome,nacimento FROM pessoas ORDER BY nome DESC;

/* OPERADORES:
	IS NULL -- É NULO
    BETWEEN -- ENTRE DOIS VALORES
    IN -- LISTA DE VALORES
    
*/

-- FIM 

-- -----------------------------------------------------------------------

-- Aula DH 4

-- USANDO BETWEEN PARA DIZER QUE EU QUERO QUE A PESSOA TENHA O PESO ENTRE 50  A 79 KILOS.
-- SELECT nome,peso  FROM pessoas WHERE peso BETWEEN 50.00 AND 79.00;

-- USANDO O LIKE

-- NOMES QUE COMÇEM COM A
-- SELECT nome,nacimento,peso FROM pessoas WHERE nome LIKE "A%";

-- NOMES QUE TERMINEM COM E
-- SELECT nome,nacimento,peso FROM pessoas WHERE nome LIKE "%e";

-- nomes que começem com g e terminem o
-- SELECT nome,peso FROM pessoas WHERE nome LIKE "g%o";

-- nomes que tenho o como segunda letra no nome.
-- SELECT nome,peso FROM pessoas WHERE nome LIKE "_o%";

-- nomes que tenho lee nele.
-- SELECT nome,peso FROM pessoas WHERE nome LIKE "%Lee%";

-- FIM
-- -----------------------------------------------------------------







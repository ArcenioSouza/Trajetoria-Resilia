/* 
Descrição
Nesta atividade você deve criar uma query que deve retornar o id,nome e a soma total da quantidade de itens dos pedidos de cada pessoa, mas apenas com os 10 usuários com as maiores quantidades de itens devem ser retornados.

O resultado deve estar ordenado de forma descendente pelo total de itens nos pedidos.

Abaixo são disponibilizados os esquemas das tabelas pessoas e pedidos e do resultado da sua consulta SQL.
*/

select pessoas.id, pessoas.nome, sum(pedidos.quantidade) as total_itens from pessoas left join pedidos on pessoas.id = pedidos.pessoas_id group by pessoas.id 
order by total_itens desc limit 10;
/* 
SQL: Top 10 clientes por total de pagamentos
Descrição
Nesse desafio você irá utilizar um banco de uma rede de locadoras. O esquema do banco está disponível abaixo.

A rede quer recompensar os clientes que mais investiram na empresa com um presente e solicitaram que você gere um relatório simples com os 10 clientes que mais gastaram na rede (soma do pagamento).
Também devem estar incluído no relatório o email, total gasto e contagem de pagamentos de cada um dos clientes.

A consulta deve retornar as seguintes colunas:

customer_id (int4)
email (varchar)
payments_count (int)
total_amount (float)
e deve retornar os 10 clientes que mais gastaram na rede ordenado de forma decrescente.
*/

select customer.customer_id, customer.email, count(payment.amount) as payments_count, cast(sum(payment.amount) as float) as total_amount from customer left join payment 
on customer.customer_id = payment.customer_id group by customer.customer_id order by total_amount desc limit 10;
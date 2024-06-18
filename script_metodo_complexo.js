// Método complexo
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Bem-vindo à Nossa Loja Virtual';
document.body.appendChild(titulo);

const produto = document.createElement('div');
produto.id = 'produto';

const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Nome do Produto';
produto.appendChild(nomeProduto);

const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Cafeteira elétrica.';
produto.appendChild(descricaoProduto);

const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$99,99';
produto.appendChild(precoProduto);

document.body.appendChild(produto);

const imagemProduto = document.createElement('img');
imagemProduto.src = 'cafeteira_.jpg'; 
imagemProduto.alt = 'Cafeteira'; 
produto.appendChild(imagemProduto);


// Seleciona o elemento de input do range e o parágrafo onde queremos exibir o preço
const rangeInput = document.getElementById('myRange');
const precoElemento = document.getElementById('precoProd');
const botaoAplicar = document.getElementById('aplicar');

// Adiciona um ouvinte de evento de mudança ao elemento de input do range
rangeInput.addEventListener('input', function () {
    // Atualiza o texto do parágrafo com o valor do range formatado como R$X
    precoElemento.textContent = `R$${rangeInput.value * 100}`;
});

// Adiciona um ouvinte de evento de clique ao botão "Aplicar"
botaoAplicar.addEventListener('click', function () {
    filtroPreco();
});

function filtroPreco() {
    // Obtém o valor do range selecionado
    const valorSelecionado = parseFloat(rangeInput.value * 100);

    // Seleciona todos os produtos
    const produtos = document.querySelectorAll('.cardProdutos .col .card');

    // Filtra os produtos com base no valor do range
    produtos.forEach((produto) => {
        const precoProduto = parseFloat(produto.querySelector('.card-text').textContent.replace('R$', '').replace(',', '.'));

        // Mostra ou oculta o produto com base na faixa de preço selecionada
        if (precoProduto <= valorSelecionado) {
            produto.style.display = 'block'; // Mostra o produto se estiver dentro da faixa de preço
        } else if (valorSelecionado === 10000 && precoProduto > 10000) {
            produto.style.display = 'block'; // Mostra o produto se estiver dentro da faixa de preço
        } else {
            produto.style.display = 'none'; // Oculta o produto se estiver fora da faixa de preço
        }
    });
}
function filtroMarca() {
    const marcasSelecionadas = Array.from(document.querySelectorAll('.label-text.selected')).map(marca => marca.textContent.toLowerCase());
    const produtos = document.querySelectorAll('.cardProdutos .col .card');

    console.log("Marcas selecionadas:", marcasSelecionadas); // Verifique se as marcas selecionadas estão corretas

    produtos.forEach((produto) => {
        const marcaProduto = produto.querySelector('.card-title').textContent.toLowerCase();

        console.log("Marca do produto:", marcaProduto); // Verifique se a marca do produto é correta

        if (marcasSelecionadas.length === 0 || marcasSelecionadas.includes(marcaProduto)) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}


// Adicionar o evento de clique para cada marca
const marcas = document.querySelectorAll('.label-text[id^="marca-"]');
marcas.forEach((marca) => {
    marca.addEventListener('click', function() {
        marca.classList.toggle('selected');
        filtroMarca(); // Chama a função de filtragem quando uma marca for clicada
    });
});

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

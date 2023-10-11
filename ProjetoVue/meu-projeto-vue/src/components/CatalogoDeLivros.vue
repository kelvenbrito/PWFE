<template>
    <div class="catalogo-Livros">
        <h2>Catálogo de Livros</h2>
        <input v-model="novoLivro" @keyup.enter="adicionarLivro" placeholder="Digite um novo Livro" />
        <button @click="adicionarLivro" class="botaoadic"></button>
        <ul>
            <li v-for="(Livro, index) in Livros" :key="index">
                {{ Livro.titulo }}
                <button @click="alternarStatus(Livro)">Marcar como {{
                    Livro.assistido ? 'Não Lido' : 'Lido' }}</button>
            </li>
        </ul>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            novoLivro: "",
            Livros: [],
        };
    },
    methods: {
        adicionarLivro() {
            if (this.novoLivro.trim() !== "") {
                this.Livros.push({ titulo: this.novoLivro, assistido: false });
                this.novoLivro = "";
            }
        },
        alternarStatus(Livro) {
            Livro.assistido = !Livro.assistido;
        },
    },
};
</script>
    
<style scoped>
.catalogo-Livros {
    margin: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 10px ;
}
.botaoadic{
    width: 100px;
    height: 15px;
    
}


</style>
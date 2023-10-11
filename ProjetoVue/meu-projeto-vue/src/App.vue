<template>
  <div id="app">
    <header>
      <h1>Meu Catálogo de Filmes e Livros</h1>

    </header>
    <main>

      <CatalogoDeFilmes />
      <CatalogoDeLivros />

      <button @click="mudar" id="botaoMud" >Catalogo de Filmes</button>
    </main>
  </div>
</template>
  
<script>
import CatalogoDeFilmes from "@/components/CatalogoDeFilmes.vue";
//import CatalogoDeLivros from "./components/CatalogoDeLivros.vue";


export default {
  components: {
    CatalogoDeFilmes,
  },
  methods: {
    mudar() {
      const botaoMudar = document.getElementById('botaoMud');
      if (botaoMudar.textContent === "Catalogo de Filmes") {
        botaoMudar.textContent = "Catalogo de Livros";
       
      } else {
        botaoMudar.textContent = "Catalogo de Filmes";
      }
    }
  }
};


</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

header {

  background-color: #35495e;
  color: #fff;
  padding: 10px 0;
}
</style>
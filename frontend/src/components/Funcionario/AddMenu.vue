<template>
<div class="container">
    <nav class="menu-lateral">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <hr class="divider" />
      <h1>MENU</h1>
      <div class="menus-botton">
        <button class="transparent-button" @click="goToPage('/funcionario')">
          COMANDAS
        </button>
        <button class="transparent-button" @click="goToPage('/alterarmenu')">
          ALTERAR
        </button>
      </div>
    </nav>

    <div class="main">
      <header class="header">
        <div class="header-content">
          <h1>ADICIONAR</h1>
          <div class="botao-status">
            <button class="editar" @click="goToPage('/alterarmenu')">EDITAR</button>
            <button class="adicionar"  @click="goToPage('/adicionarmenu')">ADICIONAR</button>
          </div>
          <div class="header-botao">
            <button class="header-icon-button" @click="goToPage('/')">
              <img src="@/assets/home.png" alt="Home Icon" class="home-icon" />
            </button>
          </div>
        </div>
        <hr class="divider1">
        <div class="form-container">
          <div class="form-wrapper">
          <form @submit.prevent="adicionarProduto">
            <div>
              <label for="nome">Nome</label>
              <input type="text" id="nome" v-model="produto.nome" required />
            </div>
            <div class="inline-fields">
            <div>
              <label for="tipo">Tipo</label>
              <select id="tipo" v-model="produto.tipo" required>
                <option value="pizza">Pizza</option>
                <option value="bebida">Bebida</option>
              </select>
             </div>
          <div>
            <label for="categoria">Categoria</label>
            <select id="categoria" v-model="produto.categoria" required>
              <option v-for="categoria in filteredCategorias" :key="categoria" :value="categoria">
                {{ categoria }}
              </option>
            </select>
          </div>
          <div>
            <label for="preco">Preço</label>
            <input type="text" id="preco" v-model="produto.preco" @input="formatarPreco" required />
          </div>
            </div>
          <div>
            <label for="descricao" class="descricao-label">Descrição</label>
            <textarea maxlength="60" id="descricao" v-model="produto.descricao"></textarea>
          </div>
          <button class="salvar" type="submit">Adicionar</button>
        </form>
      </div>
        </div>
    </header>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      produto: {
        nome: '',
        tipo: '',
        categoria: '',
        preco: '',
        descricao: ''
      },
      categorias:{
        pizza: ['Salgada', 'Doce'],
        bebida: ['Refrigerante', 'Cerveja', 'Drinks', 'Agua']
      }
    };
  },
  computed: {
    filteredCategorias() {
      return this.categorias[this.produto.tipo] || [];
    }
  },
  methods: {
    adicionarProduto() {
      console.log("Produto adicionado:", this.produto);
      this.enviarProduto();
      alert('Produto adicionado com sucesso!');
    },
    goToPage(route) {
      this.$router.push(route);
    },
    formatarPreco() {
      let valor = this.produto.preco.replace(/[^\d]/g, '');
      if (valor) {
        valor = parseFloat(valor) / 100;
        this.produto.preco = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(valor);
      } else {
        this.produto.preco = '';
      }
    },
    async enviarProduto() {
      try {
        // Removendo a formatação de moeda
        const precoNumerico = parseFloat(this.produto.preco.replace(/[^\d,]/g, '').replace(',', '.'));
        
        // Estrutura do produto para envio
        const produtoParaEnvio = {
          nome: this.produto.nome,
          tipo: this.produto.tipo,
          categoria: this.produto.categoria,
          preco: precoNumerico,
          descricao: this.produto.descricao
        };

        console.log('Produto para envio:', produtoParaEnvio); // Verifique os dados aqui

        const response = await axios.post('http://localhost:3000/menu/add', produtoParaEnvio);
        console.log('Produto enviado com sucesso:', response.data);
      } catch (error) {
        console.error('Erro ao enviar produto:', error.response ? error.response.data : error);
      }
    }
  }
};

</script>

<style scoped>
.main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #CCCBC9;
    font-family: 'Mukta Mahee';
}
.menu-lateral {
  width: 15vw;
  background: linear-gradient(to bottom, #5E8221 0%, #394F14 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 50px rgba(13, 13, 13, 0.7);
  font-family: 'Mukta Mahee';
  font-weight: bold;
}
.logo {
  margin-top: 2vh;
  width: 10vw;
  height: auto;
}
.container {
  display: flex;
  height: 100vh;
  background: #CCCBC9;
}
.menus-botton {
  display: flex;
  margin-top: 2vh;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.transparent-button {
  background: transparent;
  border: 3px solid black;
  color: black;
  margin-bottom: 3vh;
  padding: 1.5rem;
  cursor: pointer;
  font-size: 1.2vw;
  border-radius: 10px;
  font-family: 'Mukta Mahee', sans-serif;
  font-weight: bold;
  transition: background 0.3s, color 0.3s;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.transparent-button:hover {
  background: #344D0B;
  color: black;
}

.header {
  width: 100%;
}

.header-content {
  margin-top: 1px;
  display: flex;
  align-items: center;
}

.header-botao {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.header-icon-button {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.header-botao img {
  margin-left: 20px;
  width: 2vw;
  height: auto;
}

.divider {
  width: 60%;
  border: 1px solid rgba(57, 79, 20, 0.3);
  margin: 5px 0;
}

.divider1 {
  width: 100%;
  border: 1px solid rgba(57, 79, 20, 0.3);
  margin: 1px;
}

.botao-status {
  display: flex;
  justify-content: flex-end;
  margin-top: 1vh;
  margin-left: auto;
  color: #000;
}

.editar {
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  margin-right: 10px;
  color: #000;
  text-align: center;
  font-family: "Mukta Mahee";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}
.adicionar {
  background-color: #394F14; 
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  color: #fefefe;
  text-align: center;
  font-family: "Mukta Mahee";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}
.editar:hover {
  background-color: #4D5E44;
  color: #000;
}
.form-container button:hover {
  background-color: #3a4d1a;
}

.form-container button {
  background-color: #4a5d23;
  color: #d9d9d9;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 20wh;
  font-size: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.form-container input, .form-container select, .form-container textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 1.2rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #d9d9d9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.form-container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh; 
  width: 50vw;
  margin: 0 auto;
  font-family: "Mukta Mahee";
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 800;
}

.form-container label {
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
}

.form-wrapper {
  width: 50%; /* Ajuste a largura conforme necessário */
}
.inline-fields {
  display: flex;
  justify-content: space-between;
}

.inline-fields > div {
  flex: 1;
  margin-right: 10px;
}

.inline-fields > div:last-child {
  margin-right: 0;
}

.form-container textarea#descricao {
  height: 8vh; /* Ajuste a altura conforme necessário */
}

input, select {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona sombra aos inputs */
}


/* Flexbox for layout */
.form-container {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.form-wrapper {
  width: 100%;
  max-width: 600px;
}

.inline-fields {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.inline-fields > div {
  flex: 1;
  min-width: 150px;
}

/* Media Queries for responsiveness */
@media (max-width: 600px) {
  .inline-fields {
    flex-direction: column;
  }
}

.botao-status, .header-botao {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

input, select, textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
}
</style>

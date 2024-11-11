<template>
  <div class="container">
    <nav class="menu-lateral">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <hr class="divider" />
      <h1>MENU</h1>
      <div class="menus-botton">
        <button class="transparent-button" @click="goToPage('/funcionario')">
          MESAS
        </button>
        <button class="transparent-button" @click="goToPage('/alterarmenu')">
          ALTERAR
        </button>
        <button class="transparent-button" @click="goToPage('/comandas')">
          COMANDAS
        </button>
      </div>
    </nav>

    <div class="main">
      <header class="header">
        <div class="header-content">
          <h1>COMANDAS</h1>
          <div class="header-botao">
            <button class="header-icon-button" @click="goToPage('/')">
              <img src="@/assets/home.png" alt="Home Icon" class="home-icon" />
            </button>
          </div>
        </div>
        <hr class="divider1">
      </header>

      <section class="tables">
        <div class="pedido-botoes">
          <button v-for="pedido in pedidos" :key="pedido.id" @click="selecionarPedido(pedido)">
            PEDIDO: MESA 1
          </button>
        </div>
      </section>
    </div>

    <div v-if="pedidoSelecionado" class="modal">
      <div class="modal-content">
        <span class="close" @click="fecharModal">&times;</span>
        <h3>Detalhes do Pedido</h3>
          <a v-for="item in pedidoSelecionado.itens" :key="item.produto_id">
            {{ item.nome }} - {{ item.quantidade }} x {{ item.preco }} <br>
          </a><br>
        <button @click="concluirPedido(pedidoSelecionado.id)">Concluir Pedido</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pedidos: [],
      pedidoSelecionado: null,
    };
  },
  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
    async fetchPedidos() {
      try {
        const response = await axios.get('http://localhost:3000/pedidos');
        this.pedidos = response.data;
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    },
    selecionarPedido(pedido) {
      this.pedidoSelecionado = pedido;
    },
    fecharModal() {
      this.pedidoSelecionado = null;
    },
    async concluirPedido(id) {
      try {
        await axios.delete(`http://localhost:3000/pedidos/${id}`);
        this.pedidos = this.pedidos.filter(pedido => pedido.id !== id);
        this.fecharModal();
      } catch (error) {
        console.error('Erro ao concluir pedido:', error);
      }
    }
  },
  mounted() {
    this.fetchPedidos();
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

.andamento {
  background-color: #394F14;
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

.livre {
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  color: #000;
  text-align: center;
  font-family: "Mukta Mahee";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.livre:hover {
  background-color: #4D5E44;
  color: #000;
}

.pedido-botoes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
 
}

.pedido-botoes button {
  width: 10vw;
  height: 10vh;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem;
  cursor: pointer;
  border-radius: 10px;
  transition: background 0.3s;
  background: #5E8221;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  font-family: "Mukta Mahee";
}

.modal-content {
  background-color: #fefefe;
  padding: 40px;
  border: 1px solid #888;
  width: 300px;
  text-align: center;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
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
          <div class="botao-status">
            <button class="andamento" @click="goToPage('/funcionario')">EM ANDAMENTO</button>
            <button class="livre">LIVRE</button>
          </div>
          <div class="header-botao">
            <button class="header-icon-button" @click="goToPage('/')">
              <img src="@/assets/home.png" alt="Home Icon" class="home-icon" />
            </button>
          </div>
        </div>
        <hr class="divider1">
      </header>

      <section class="tables">
        <div class="mesa-botoes">
          <button 
            v-for="mesa in mesasVisiveis" 
            :key="mesa.id" 
            :class="{
              'mesa-ocupada': mesa.status === 'ocupada', 
              'mesa-finalizada': mesa.status === 'finalizada',
              'mesa-livre': mesa.status === 'livre'
              }" 
            @click="selecionarMesa(mesa)">
            MESA {{ mesa.id }}
          </button>
        </div>
      </section>
    </div>

    <div v-if="mesaSelecionada" class="modal">
      <div class="modal-content">
        <span class="close" @click="fecharModal">&times;</span>
        <h3>Alterar a mesa {{ mesaSelecionada.id }} para {{ novoStatus }}?</h3>
        <select v-model="novoStatus">
          <option value="ocupada">Ocupada</option>
          <option value="finalizada">Finalizada</option>
          <option value="livre">Livre</option>
        </select><br><br>
        <button @click="atualizarStatusMesa(mesaSelecionada.id, novoStatus)">Alterar</button>
        <button @click="fecharModal">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      mesas: [],
      mesaSelecionada: null,
      novoStatus: '',
      pedidos: []
    };
  },
  computed: {
    mesasVisiveis() {
      return this.mesas.filter(mesa => mesa.status === 'livre');
    }
  },
  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
    async fetchMesas() {
      try {
        const response = await axios.get('http://localhost:3000/tables');
        this.mesas = response.data;
      } catch (error) {
        console.error('Erro ao buscar mesas:', error);
      }
    },
    async atualizarStatusMesa(id, status) {
      try {
        const response = await axios.put(`http://localhost:3000/tables/${id}`, { status });
        const mesaAtualizada = response.data;
        this.mesas = this.mesas.map(mesa => 
          mesa.id === mesaAtualizada.id ? mesaAtualizada : mesa
        );
        this.fecharModal();
      } catch (error) {
        console.error('Erro ao atualizar status da mesa:', error);
      }
    },
    selecionarMesa(mesa) {
      this.mesaSelecionada = mesa;
      this.novoStatus = mesa.status;
    },
    fecharModal() {
      this.mesaSelecionada = null;
      this.novoStatus = '';
    },
    async verPedidos(tableId) {
      try {
        const response = await axios.get(`http://localhost:3000/pedidos/table/${tableId}`);
        this.pedidos = response.data;
        console.log('Pedidos:', this.pedidos); // Debugging line
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    }
  },
  mounted() {
    this.fetchMesas();
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

.livre {
  background-color: #394F14; 
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

.andamento:hover {
  background-color: #4D5E44;
  color: #000;
}

.mesa-botoes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
}

.mesa-botoes button {
  width: 10vw;
  height: 10vh;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem;
  cursor: pointer;
  border-radius: 10px;
  transition: background 0.3s;
}

.mesa-finalizada {
  background-color: #5fad1f;
  color: #000;
}

.mesa-ocupada {
  background-color: #721818;
  color: #000;
}

.mesa-livre{
  background-color: #394F14;
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

@media (max-width: 768px) {
  .andamento:hover {
    background-color: #3C4A35;
    color: #fff;
  }
}

@media (max-width: 480px) {
  .andamento:hover {
    background-color: #2B3726;
    color: #fff;
  }
}
</style>
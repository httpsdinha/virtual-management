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
          <h1>ALTERAR</h1>
          <div class="botao-status">
            <button class="editar">EDITAR</button>
            <button class="adicionar" @click="goToPage('/adicionarmenu')">ADICIONAR</button>
          </div>
          <div class="header-botao">
            <button class="header-icon-button" @click="goToPage('/')">
              <img src="@/assets/home.png" alt="Home Icon" class="home-icon" />
            </button>
          </div>
        </div>
        <hr class="divider1">
      </header>
      <div class="tipos-button">
        <button :class="{ 'active-button': activeButton === 'pizza' }" @click="fetchMenuItems('pizza')">PIZZA</button>
        <button :class="{ 'active-button': activeButton === 'bebida' }" @click="fetchMenuItems('bebida')">BEBIDA</button>
      </div>
      <div class="menu-items">
        <div v-for="item in menuItems" :key="item.id" class="menu-item">
          <div class="menu-item-content">
            <div class="menu-item-text">
              <h2>{{ item.nome }}</h2>
              <p>{{ item.descricao }}</p>
              <p>R$ {{ item.preco }}</p>
            </div>
            <button class="edit-button" @click="openEditModal(item)">
              <img src="@/assets/lapis.png" alt="Edit Icon" class="edit-icon" />
            </button>
          </div>
        </div>
      </div>
      <div v-if="showModal" class="modal">
        <div class="modal-content">

          <span class="close" @click="closeEditModal">&times;</span>
          <h2>Editar Item</h2>
          <div class="delete-container">
            <label class="name" for="nome">Nome:</label>
            <button @click="deleteItem" class="delete-button">
              <img src="@/assets/lixo.png" alt="Edit Icon" class="delete-icon" />
            </button>
          </div>
          <input type="text" id="nome" v-model="selectedItem.nome" />
          <div class="inline-fields">
            <div class="field">
              <label for="tipo">Tipo:</label>
              <select id="tipo" v-model="selectedItem.tipo" required>
                <option value="pizza">Pizza</option>
                <option value="bebida">Bebida</option>
              </select>
            </div>
            <div class="field">
              <label for="categoria">Categoria:</label>
              <select id="categoria" v-model="selectedItem.categoria">
                <option value="Salgada">Salgada</option>
                <option value="Doce">Doce</option>
                <option value="Refrigerante">Refrigerante</option>
                <option value="Cerveja">Cerveja</option>
                <option value="Doce">Doce</option>
                <option value="Agua">Água</option>
              </select>
            </div>
            <div class="field">
              <label for="preco">Preço:</label>
              <input type="text" id="preco" v-model="selectedItem.preco" />
            </div>
          </div>
          <label for="descricao">Descrição:</label>
          <input type="text" maxlength="40" id="descricao" v-model="selectedItem.descricao" />

          <button class="salvar" @click="saveChanges">Salvar</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      menuItems: [],
      activeButton: 'pizza',
      showModal: false,
      selectedItem: null,
    };
  },
  methods: {
    goToPage(page) {
      this.$router.push(page);
    },
    async fetchMenuItems(tipo) {
      try {
        const response = await axios.get(`http://localhost:3000/menu/list?tipo=${tipo}`);
        this.menuItems = response.data;
        this.activeButton = tipo;
      } catch (error) {
        console.error('Erro ao buscar itens do menu:', error);
      }
    },
    openEditModal(item) {
      this.selectedItem = { ...item };
      this.showModal = true;
    },
    closeEditModal() {
      this.showModal = false;
      this.selectedItem = null;
    },
    async saveChanges() {
      try {
        await axios.put(`http://localhost:3000/menu/update/${this.selectedItem.id}`, this.selectedItem);
        alert("Item atualizado com sucesso!");
        this.closeEditModal();
        this.fetchMenuItems(this.activeButton);
      } catch (error) {
        console.error("Erro ao atualizar item:", error);
        alert("Não foi possível atualizar o item. Tente novamente.");
      }
    },
    async deleteItem() {
      try {
        await axios.delete(`http://localhost:3000/menu/delete/${this.selectedItem.id}`);
        alert("Item deletado com sucesso!");
        this.closeEditModal();
        this.fetchMenuItems(this.activeButton);
      } catch (error) {
        console.error("Erro ao deletar item:", error);
        alert("Não foi possível deletar o item. Tente novamente.");
      }
    }
  },
  created() {
    this.fetchMenuItems('pizza');
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
  overflow: auto;
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
  background-color: #394F14;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  margin-right: 10px;
  color: #fefefe;
  text-align: center;
  font-family: "Mukta Mahee";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.adicionar {
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

.adicionar:hover {
  background-color: #4D5E44;
  color: #000;
}

.bebida-button:hover {
  background-color: #4D5E44;
  color: #000;
}

.menu-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
}

.menu-item {
  margin-top: 1rem;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23.5vw;
}

.menu-item-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

}

.menu-item-text {
  flex-grow: 1;
}

h2 {
  color: #000;
  font-family: "Mukta Mahee";
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: 166.142%;
  margin: 0;
  padding: 0;
}

.edit-button {
  margin-left: 0.3em;
  width: 2.8125rem;
  height: 2.8125rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: #5E8221;
  border: none;
  cursor: pointer;
}

.edit-icon {
  width: 50%;
  height: 40%;
}

p {
  color: #2E2E2E;
  font-family: "Mukta Mahee";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 166.142%;
  margin: 0;
  padding: 0;
}

.tipos-button button {
  background-color: transparent;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
  margin-right: 10px;
  color: #000;
  text-align: center;
  font-family: "Mukta Mahee";
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.tipos-button .active-button {
  background-color: #394F14;
  color: white;
}

/* Estilos para o modal */
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
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  margin: auto;
  border-radius: 5px;
  font-family: "Mukta Mahee";
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
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

.delete-button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 10px;
  margin-left: auto;
}

.delete-icon {
  width: 1vw;
  height: auto;
}

input,
select {
  width: 95%;
  padding: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Adiciona sombra aos inputs */
}

.salvar {
  background-color: #4a5d23;
  color: #d9d9d9;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 20wh;
  font-size: 16px;
  margin-top: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.inline-fields {
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
}

.field {
  margin-right: 1rem;

}

.field:last-child {
  margin-right: 0;
}

.delete-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.name {
  flex-grow: 1;
}

/* Media queries para responsividade */
@media (max-width: 768px) {
  .inline-fields {
    flex-direction: column;
    margin-right: 0;
  }

  .field {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .salvar {
    width: 100%;
    padding: 10px;
  }

  .delete-container {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .salvar {
    font-size: 14px;
    padding: 8px;
  }

  .delete-container {
    margin-top: 0.5rem;
  }
}
</style>

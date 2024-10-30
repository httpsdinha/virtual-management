<template>
    <div class="container">
      <aside class="menu-lateral">
        <img src="@/assets/logo.png" alt="Logo" class="logo">
        <hr class="divider">
        <h1>MENU</h1>
        <div class="menus-botton">
          <button class="transparent-button" @click="goToPage('/cardapiohome')">DESTAQUES</button>
          <button class="transparent-button" @click="goToPage('/cardapiopizza')">PIZZAS</button>
          <button class="transparent-button" @click="goToPage('/cardapiobebida')">BEBIDAS</button>
          <button class="transparent-button" @click="goToPage('/cardapiorodizio')">RODÍZIO</button>
        </div>
      </aside>
  
      <main class="main">
        <header class="header">
          <div class="header-content">
            <h1>BEBIDAS</h1>
            <div class="header-botao">
              <button class="header-icon-button" @click="goToPage('/')">
                <img src="@/assets/home.png" alt="Home Icon" class="home-icon" />
              </button>
              <button class="header-icon-button" @click="goToPage('/garcom')">
                <img src="@/assets/garcom.png" alt="Waiter Icon" class="garcom-icon" />
              </button>
              <button class="header-icon-button" @click="goToPage('/')">
                <img src="@/assets/carrinho.png" alt="Cart Icon" class="carrinho-icon" />
              </button>
            </div>
          </div>
        </header>
  
        <div class="tipo-pizza">
          <hr class="divider1">
          <button class="refrigerante" :class="{'active-button': activeButton === 'Refrigerante'}" @click="fetchMenuItems('Refrigerante')"><h2>Refrigerante</h2></button>
          <button class="cerveja" :class="{'active-button': activeButton === 'Cerveja'}" @click="fetchMenuItems('Cerveja')"><h2>Cerveja</h2></button>
          <button class="drinks" :class="{'active-button': activeButton === 'Drinks'}" @click="fetchMenuItems('Drinks')"><h2>Drinks</h2></button>
          <button class="agua" :class="{'active-button': activeButton === 'Agua'}" @click="fetchMenuItems('Agua')"><h2>Água</h2></button>
          <hr class="divider2">
        </div>
        <div class="menu-container">
        <div class="menu-items">
          <div v-for="item in menuItems" :key="item.id" class="menu-item">
            <div class="menu-item-content">
              <div class="menu-item-text">
                <h2>{{ item.nome }}</h2>
                <p>{{ item.descricao }}</p>
                <p>R$ {{ item.preco }}</p>
              </div>
              <img src="@/assets/adicionar.png" class="adicionar-icon">
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        menuItems: [],
        activeButton: 'Refrigerante', 
      };
    },
    methods: {
      goToPage(page) {
        this.$router.push(page);
      },
      async fetchMenuItems(categoria) {
        try {
          const response = await axios.get(`http://localhost:3000/menu/list?categoria=${categoria}`);
          this.menuItems = response.data;
          this.activeButton = categoria;
        } catch (error) {
          console.error('Erro ao buscar itens do menu:', error);
        }
      },
    },
    created() {
      this.fetchMenuItems(this.activeButton);
    },
  };
  </script>
  
  <style>
  .container {
    display: flex;
    height: 100vh;
    font-family: 'Mukta Mahee';
    background: #CCCBC9;
    overflow: auto;
  }
  
  .main {
    margin-left: 2rem;
    margin-right: 2rem;
    widows: 80%;
    flex-grow: 1;
  }
  
  .header-content {
    display: flex;
    align-items: center;
  }
  
  .header-botao {
    display: flex;
    margin-left: auto;
  }
  
  .header-icon-button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  
  .header-icon-button img {
    margin-left: 20px;
    width: 2vw;
    height: auto;
  }
  
  .tipo-pizza {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .menu-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .menu-item {
    border: 1px solid black;
    padding: 10px;
    width: 23.8125rem;
    height: 5.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .menu-item-content {
    display: flex;
    align-items: center;
    padding: 5px;
  }
  
  .menu-item-text h2,
  .menu-item-text p {
    margin: 0;
  }
  
  .menu-item-text {
    width: 20rem; 
  }
  
  .adicionar-icon {
    width: 2.8125rem;
    height: 2.8125rem;
    cursor: pointer;
  }
  
  .menu-lateral {
    width: 15vw;
    height: 100vh;
    background: linear-gradient(to bottom, #5E8221 0%, #394F14 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 50px rgba(13, 13, 13, 0.7);
    font-family: 'Mukta Mahee';
    font-weight: bold;
    position: sticky;
    top: 0;
    font-weight: bold;
  }
  
  .logo {
    margin-top: 2vh;
    width: 10vw;
    height: auto;
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
  
  .divider {
    width: 70%;
    border: 1px solid rgba(57, 79, 20, 0.3);
    margin: 5px 0;
  }
  
  .divider1, .divider2 {
    width: 100%;
    border: 1px solid rgba(57, 79, 20, 0.3);
    margin: 1px;
  }
  
  .tipo-pizza button {
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    cursor: pointer;
    color: #000
  }
  
  .tipo-pizza .active-button {
    background: rgba(94, 130, 33);
    border: none;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    cursor: pointer;
    color: white;
  }
  
  .tipo-pizza button:hover {
    background: rgba(94, 130, 33, 0.2);
    border-radius: 5px;
  }
  </style>
  
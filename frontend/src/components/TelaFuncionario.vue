<template>
    <div class="container">
      <div class="main">
        <header class="header">
          <div class="header-content">
            <h1>COMANDAS</h1>
            <div class="botao-status">
              <button class="andamento">
                EM ANDAMENTO
              </button>
              <button class="livre">
                LIVRE
              </button>
            </div>
            <div class="header-botao">
              <button class="header-icon-button" @click="goToPage('/')">
                <img src="@/assets/home.png" alt="Home Icon" class="home-icon" />
              </button>
            </div>
          </div>
          <hr class="divider1">
        </header>
      </div>
  
      <nav class="menu-lateral">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
        <hr class="divider" />
        <h1>MENU</h1>
        <div class="menus-botton">
          <button class="transparent-button" @click="goToPage('/cardapiohome')">
            COMANDAS
          </button>
          <button class="transparent-button" @click="goToPage('/cardapiopizza')">
            ALTERAR
          </button>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardapioBebidas',
    methods: {
      goToPage(route) {
        this.$router.push(route);
      },
    },
  };
  </script>
  
  <style scoped>
  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    background: #CCCBC9;
    font-family: 'Mukta Mahee';
  }
  
  /* Estilos da navegação lateral */
  .menu-lateral {
    position: absolute;
    top: 0;
    left: 0;
    width: 15vw;
    height: 100%;
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
    margin-top: 1px;
    width: 75%;
    padding: 10px;
    margin-bottom: 0.5vh;
    margin-left: 35vh;
  }
  
  /* Container para o h1 e os botões */
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

  /*Container de botões de status */

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
  </style>
  
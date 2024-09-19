<template>
    <div class="container">
        <div class="left-side">
            <img src="@/assets/logo.png" alt="Logo" class="logo">
            <div class="button-container">
              <button class="transparent-button" @click="goToPage('/cardapiohome')">
              <img src="@/assets/menu.png" alt="Menu Icon" class="button-icon" />
              CARDÁPIO
              </button>
              <button class="transparent-button" @click="goToPage('/garcom')">
              <img src="@/assets/garcom.png" alt="Waiter Icon" class="button-icon" />
              CHAMAR GARÇOM
              </button>
              <button class="transparent-button" @click="goToPage('/conta')">
              <img src="@/assets/conta.png" alt="Pay Icon" class="button-icon" />
               PAGAR CONTA
              </button>
      </div>

        </div>
        <div class="right-side">
            <!-- Add content for the right side here if needed -->
        </div>
    </div>
</template>
  
  <script>
export default {
  name: "TelaInicial",
  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
  },
};
  </script>
  
  <style scoped>
  .container {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }

  .left-side, .right-side {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
  
  .left-side {
    background: linear-gradient(
      to bottom,
      #5E8221 0%,
      #394F14 100%
    );
    position: relative;
    flex-direction: column;
  }
  
  .right-side {
    flex: 1; 
    background-image: url('@/assets/pizza.jpg');
    background-size: cover;
    background-position: center;
    box-shadow: 0 0px 50px rgba(0, 0, 0, 0.711);
  }

  .logo {
    position: absolute; 
    top: 5%;  
    width: 30%;
    height: auto;
    max-width: 300px; 
}
.transparent-button {
    background: transparent;
    border: 3px solid black;
    color: black;
    padding: 5vh;
    margin: 15px;
    cursor: pointer;
    font-size: 30px;
    border-radius: 5px;
    font-family: 'Mukta Mahee' , sans-serif;
    font-weight: bold;
    transition: background 0.3s, color 0.3s;
    width: 500px; /* Largura fixa do botão */
    height: 100px; /* Altura fixa do botão */
    display: flex;
    justify-content: left;
    align-items: center;
}
.transparent-button:hover {
  background: #4D5E44;
  color: black;
}

.button-container {
  display: flex;
  flex-direction: row; 
  justify-content: center;
  margin-top: 100px;
  flex-direction: column;
}

.transparent-button img {
  width: 12vh;
  height: 12vh; 
  margin-right: 20px
}
  </style>
  
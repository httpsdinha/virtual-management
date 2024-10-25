<template>
    <div class="main">
                <header class="header">
                <div class="header-content">
                    <h1>PIZZAS</h1>
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
                <hr class="divider1">
            </header>
            <div class="tipo-pizza">
                <button class="sabor-pizza">
                    <img src="@/assets/1pedacos.png" alt="sabor" class="sabor" />
                    <h2>1 SABOR</h2>
                </button>
                <button class="sabor-pizza">
                    <img src="@/assets/2pedacos.png" alt="sabor" class="sabor" />
                    <h2>2 SABORES</h2>
                </button>
                <button class="sabor-pizza">
                    <img src="@/assets/4pedacos.png" alt="sabor" class="sabor" />
                    <h2>4 SABORES</h2>
                </button>
            </div>
            <hr class="divider2">
            
    <nav class="menu-lateral">
                <img src="@/assets/logo.png" alt="Logo" class="logo">
                <hr class="divider">
                <h1>MENU</h1>
                <div class="menus-botton">
                    <button class="transparent-button" @click="goToPage('/cardapiohome')">
                    DESTAQUES
                    </button>
                    <button class="transparent-button" @click="goToPage('/cardapiopizza')">
                    PIZZAS
                    </button>
                    <button class="transparent-button" @click="goToPage('/cardapiobebida')">
                    BEBIDAS
                    </button>
                    <button class="transparent-button" @click="goToPage('/')">
                    RODÍZIO
                    </button>
                </div>
            </nav>
    </div>
</template>
<script>
export default {
    name: 'CardapioPizza',
    methods: {
        goToPage(route) {
            this.$router.push(route);
        }
    }
}
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

.header {
        margin-top: 1px;
        width: 75%; 
        padding: 10px;
        margin-bottom: 0.5vh;
        margin-left: 35vh;
    }
.tipo-pizza{
    margin-left: 35vh;
}

    /* Container para o h1 e os botões */
    .header-content {
        margin-top: 1px;
        display: flex;
        align-items: center; 
    }
    .tipo-pizza {
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-top: 2vh;
}
.tipo-pizza h2{
    font-size: 0.9rem;
}

.sabor-pizza {
    background: none; 
    border: none; 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px; 
    cursor: pointer;    
}

.tipo-pizza img {
    width: 7vw;
    height: auto;
}

    .header-botao {
        display: flex; 
        align-items: center; 
        margin-left: auto; 
    }

    /* Botão sem fundo e borda */
    .header-icon-button {
        background: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    /* Imagem do botão */
    .header-botao img {
        margin-left: 20px;
        width: 2vw;
        height: auto;
    }

    .divider2{
        width: 75%;
        border: 1px solid rgba(57, 79, 20, 0.3);
        margin-left: 37vh;
    
    }

    .divider{
        width: 60%;
        border: 1px solid rgba(57, 79, 20, 0.3);
        margin: 5px 0;
    }
    /* Divider abaixo dos botões */
    .divider1 {
        width: 100%;
        border: 1px solid rgba(57, 79, 20, 0.3);
        margin: 1px;
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

.sabor-pizza:hover{
    background: rgba(94, 130, 33, 0.2);
}
</style>
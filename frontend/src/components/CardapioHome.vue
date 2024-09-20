    <template>
        <div class="main">
            <header class="header">
                <div class="header-content">
                    <h1>DESTAQUES</h1>
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
                <div class="destaque">
                    <div class="destaque-principal">
                        <img src="@/assets/destaque.jpg" alt="Destaque" class="destaque-img" />
                    </div>
                    <div class="destaques-secundarios">
                        <div class="destaque-secundario1">
                            <img src="@/assets/destaquebebida.jpg" alt="Destaque" class="destaque-img" />
                        </div>
                        <div class="destaque-secundario2">
                            <img src="@/assets/destaquepizza.jpg" alt="Destaque" class="destaque-img" />
                        </div>
                    </div>
                </div>
            </header>
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
                    <button class="transparent-button" @click="goToPage('/')">
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
        name: 'CardapioHome',
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

    /* Container para o h1 e os botões */
    .header-content {
        margin-top: 1px;
        display: flex;
        align-items: center; 
    }

    .header-botao {
        display: flex; 
        align-items: center; 
        margin-left: auto; /* Faz com que os botões fiquem à direita */
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

    /* Opções após o divisor */
    .destaque {
        display: flex;
        flex-direction: column; 
        align-items: center; 
        margin-top: 5vh;
    }

    .destaques-secundarios {
        display: flex; 
        justify-content: space-between; 
        width: 75vw; 
        margin-top: 8vh; 
    }

    .destaque-secundario1, .destaque-secundario2 {
        width: 35vw; 
        height: 30vh; 
        overflow: hidden; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        box-shadow: 0 0 50px rgba(13, 13, 13, 0.7);
        border-radius: 10px;
    }

    .destaque-principal {
        display: flex;
        flex-direction: column; 
        align-items: center; 
        width: 75vw;
        height: 40vh; 
        overflow: hidden; 
        box-shadow: 0 0 50px rgba(13, 13, 13, 0.7);
        border-radius: 10px;
    }
    .destaque-img {
        width: 100%; 
        height: 100%; 
        object-fit: cover; 
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

/* Estilos de responsividade para telas menores */
@media (max-width: 768px) {
    .main {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .header {
        width: 100%;
        margin-left: 0;
        padding: 10px;
    }

    .header-content {
        flex-direction: column;
        align-items: center;
    }

    .header-botao {
        margin-left: 0;
        margin-top: 10px;
    }

    .header-botao img {
        width: 6vw;
    }

    .destaques-secundarios {
        flex-direction: column;
        width: 90vw;
        align-items: center;
    }

    .destaque-principal {
        width: 90vw;
    }

    .destaque-secundario1, .destaque-secundario2 {
        width: 90vw;
        margin-top: 20px;
    }

    .menu-lateral {
        width: 30vw;
    }

    .logo {
        width: 20vw;
    }

    .transparent-button {
        font-size: 4vw;
        padding: 1rem;
    }
}

@media (max-width: 480px) {
    .header {
        width: 100%;
        padding: 10px;
    }

    .header-content {
        flex-direction: column;
        align-items: center;
    }

    .header-botao {
        margin-left: 0;
        margin-top: 10px;
    }

    .header-botao img {
        width: 8vw;
    }

    .destaque {
        margin-top: 2vh;
    }

    .destaques-secundarios {
        width: 100vw;
        flex-direction: column;
        align-items: center;
    }

    .destaque-principal {
        width: 100vw;
    }

    .destaque-secundario1, .destaque-secundario2 {
        width: 100vw;
        margin-top: 2vh;
    }

    .menu-lateral {
        width: 40vw;
    }

    .logo {
        width: 25vw;
    }

    .transparent-button {
        font-size: 5vw;
        padding: 0.8rem;
    }
}

    </style>

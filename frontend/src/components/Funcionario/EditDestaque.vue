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
            <button class="transparent-button" @click="goToPage('/alterardestaque')">
              DESTAQUE
            </button>
          </div>
        </nav>
    
        <div class="main">
          <header class="header">
            <div class="header-content">
              <h1>DESTAQUE</h1>
              <div class="header-botao">
                <button class="header-icon-button" @click="goToPage('/')">
                  <img src="@/assets/home.png" alt="Home Icon" class="home-icon" />
                </button>
              </div>
            </div>
            <hr class="divider1">
          </header>
          <div class="destaque">
            <figure class="destaque-principal">
                <img :src="imagens[0]?.imagem" alt="Destaque" class="destaque-img" />
            </figure>
            <div class="destaques-secundarios">
            <figure class="destaque-secundario1">
                <img :src="imagens[1]?.imagem" alt="Destaque" class="destaque-img" />
            </figure>
            <figure class="destaque-secundario2">
                <img :src="imagens[2]?.imagem" alt="Destaque" class="destaque-img" />
            </figure>
            </div>
            <input type="file" @change="onFileChange" />
            <button @click="enviarImagem">Enviar Imagem</button>
            </div>
          </div>
        </div>
    </template>
    
    <script>
    import axios from "axios";

    export default {
    data() {
        return {
        imagemBase64: null,
        imagens: [],
        };
    },
    created() {
    this.carregarImagens(); 
    },
    methods: {
        goToPage(route) {
      this.$router.push(route);
        },
        onFileChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            this.imagemBase64 = e.target.result;
        };

        if (file) {
            reader.readAsDataURL(file); 
        }
        },
        async enviarImagem() {
        if (this.imagemBase64) {
            try {
            await axios.post("http://localhost:3000/imagem/upload-imagem/1", {
                imagem: this.imagemBase64,
            });
            alert("Imagem enviada com sucesso!");
            } catch (error) {
            console.error("Erro ao enviar imagem:", error);
            }
        } else {
            alert("Nenhuma imagem selecionada!");
        }
        },
        async carregarImagens() {
            try {
                const response = await axios.get("http://localhost:3000/imagem/imagens");
                this.imagens = response.data; 
            } catch (error) {
                console.error("Erro ao carregar imagens:", error);
            }
        },
    },
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
      overflow-y: scroll;
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
    
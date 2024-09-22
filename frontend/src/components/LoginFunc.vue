<template>
    <div class="main">
        <div class="container-login">
            <div class="login">
                <h1>ENTRAR</h1>
                <div class="login-input">
                    <input 
                        type="text" 
                        placeholder="Usuário" 
                        v-model="username" 
                        autocomplete="off" 
                    />
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        v-model="password" 
                        autocomplete="off" 
                    />
                </div>
                <button 
                    class="entrar-button" 
                    @click="login"
                > 
                    ENTRAR 
                </button>
            </div>
        </div>
        <button class="voltar-button" @click="goToPage('/')">
            <img src="@/assets/voltar.png" alt="Voltar" class="Voltar">
        </button>
    </div>
</template>

<script>
import axios from 'axios'; 

export default {
    name: 'LoginFunc',
    data() {
        return {
            username: '', 
            password: ''  
        };
    },
    methods: {
        goToPage(route) {
            this.$router.push(route);
        },
        async login() {
            try {
                const response = await axios.post('http://localhost:3000/auth/login', {
                    username: this.username,
                    password: this.password
                });
                
                
                if (response.data.message === 'Login realizado com sucesso!') {
                    this.goToPage('/funcionario'); 
                }
            } catch (error) {
                console.error('Erro no login:', error);
                alert('Usuário ou senha inválidos.'); 
            }
        }
    }
}
</script>

<style>
/* Seu estilo existente */
.main {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(
        to bottom,
        #5E8221 0%,
        #394F14 100%
    );
}

.voltar-button {
    position: absolute;
    top: 20px;
    left: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
}

.Voltar {
    width: 50px;
    height: auto;
}

.container-login {
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    background-color: rgba(188, 167, 139, 0.2);
    border: 1px black solid;
    border-radius: 10px;
    font-family: 'Mukta Mahee';
    padding: 20px; 
    width: 80%; /* Ajusta para largura em porcentagem */
    max-width: 400px; /* Define um limite máximo */
}

.login {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
}

.login-input {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
}

.login-input input {
    background-color: #D9D9D9; 
    border: 2px solid #00000072; 
    border-radius: 5px;
    padding: 15px; 
    width: 150%; /* Ajusta para ocupar 100% do contêiner */
    margin: 10px 0; 
    font-family: 'Mukta Mahee'; 
    transition: border-color 0.3s;
}

.login-input input::placeholder {
    color: #727272; 
}

.entrar-button {
    background-color: #CCCBC9; 
    border: none; 
    color: rgb(0, 0, 0); 
    padding: 10px 20px; 
    text-align: center; 
    text-decoration: none; 
    display: inline-block; 
    font-size: 16px; 
    margin: 20px; 
    cursor: pointer; 
    border-radius: 5px; 
    font-family: 'Mukta Mahee'; 
    font-weight: bold;
}

h1 {
    text-align: center; 
    margin-top: 2vh;
    font-size: 1.5em;
}

/* Media Queries para Responsividade */
@media (max-width: 768px) {
    .container-login {
        width: 90%; /* Mais largura em telas menores */
        padding: 15px; /* Menos padding em telas menores */
    }
    h1 {
        font-size: 1.2em; /* Reduzir tamanho da fonte em telas menores */
    }
}

@media (max-width: 480px) {
    .login-button {
        padding: 8px 15px; /* Ajusta padding do botão em telas menores */
    }
}
</style>

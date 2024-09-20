<template>
    <div class="main">
        <img src="@/assets/garcom.png" alt="Garçom" class="garcom">
        <div class="status-container">
            <div class="status">
            <p>{{ statusText }}</p>
         </div>
            <div class="button-container">
                <button v-if="isCalled" class="cancel-button" @click="cancelar">Cancelar</button>
                <button v-if="!isCalled" class="call-button" @click="chamarGarcom">Chamar Garçom</button>
            </div>
        </div>
        <div class="button-voltar">
            <button class="voltar-button" @click="goToPage('/')">
                <img src="@/assets/voltar.png" alt="Voltar" class="voltar-icon">
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChamarGarcom',
    data() {
        return {
            isCalled: true, 
            statusText: 'GARÇOM A CAMINHO', 
        };
    },
    methods: {
        goToPage(route) {
            this.$router.push(route);
        },
        cancelar() {
            this.isCalled = false; 
            this.statusText = 'CHAMADO CANCELADO'; 
        },
        chamarGarcom() {
            this.isCalled = true; 
            this.statusText = 'GARÇOM A CAMINHO'; 
        }
    }
}
</script>

<style scoped>
.main {
    position: relative;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(
        to bottom,
        #5E8221 0%,
        #394F14 100%
    );
}

.garcom {
    width: 30%;
    max-width: 300px; 
    margin-bottom: 20px; 
}

.status-container {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    width: 100%; 
}

.status {
    font-family: 'Mukta Mahee';
    font-weight: bold;
    font-size: 2rem;
    text-align: center; 
    border: 2px solid black; 
    padding: 50px;
    margin-bottom: 10px; 
}

.button-container {
    display: flex; 
    justify-content: flex-end;
    width: 100%; 
    max-width: 400px; 
    margin-top: 10px; 
}

.cancel-button, .call-button {
    background-color: #CCCBC9; 
    border: none; 
    color: rgb(0, 0, 0); 
    padding: 10px 20px; 
    font-size: 16px; 
    cursor: pointer; 
    border-radius: 5px; 
    font-weight: bold;
    margin-left: 10px; 
}

.voltar-button {
    position: absolute;
    top: 20px;
    left: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
}

.voltar-icon {
    width: 50px;
    height: auto;
}


</style>

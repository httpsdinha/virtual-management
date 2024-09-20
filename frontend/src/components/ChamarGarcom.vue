    <template>
        <div class="main">
            <img src="@/assets/garcom.png" alt="Garcom" class="Garcom">
            <div class="button-voltar">
            <button class="voltar-button" @click="goToPage('/')">
            <img src="@/assets/voltar.png" alt="Voltar" class="Voltar">
            </button>
            </div>
        </div>
    </template>
<script>
export default {
    name: 'ChamarGarcom',
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
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(
        to bottom,
        #5E8221 0%,
        #394F14 100%
    );
}

.Garcom {
    width: 15%; 
}

.voltar-button {
    position: absolute;
    top: 20px;
    left: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
}

/* Diminuindo a imagem do botão "Voltar" */
.Voltar {
    width: 50px;
    height: auto;
}
</style>
<template>
    <div class="main">
    <button class="voltar-button" @click="goToPage('/')">
            <img src="@/assets/voltar.png" alt="Voltar" class="Voltar">
    </button>
</div>
</template>

<script>
export default {
    name: 'LoginFunc',
    methods: {
        goToPage(route) {
            this.$router.push(route);
        }
    }
}
</script>
<style>
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

/* Diminuindo a imagem do botão "Voltar" */
.Voltar {
    width: 50px;
    height: auto;
}
</style>
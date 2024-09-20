// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Importar seus componentes dinamicamente
const TelaInicial = () => import('../components/TelaInicial.vue');
const CardapioHome = () => import('../components/CardapioHome.vue');
const ChamarGarcom = () => import('../components/ChamarGarcom.vue');
const PagarConta = () => import('../components/PagarConta.vue');
const LoginFunc = () => import('../components/LoginFunc.vue');

// Obter a URL base a partir da variável de ambiente
const baseUrl = process.env.VUE_APP_BASE_URL || '/';

const router = createRouter({
  history: createWebHistory(baseUrl),
  routes: [
    {
      path:'/',
        name: 'tela_inicial',
        component: TelaInicial,
    },
    {
      path:'/cardapiohome',
        name: 'cardapiohome',
        component: CardapioHome,
    },
    {
      path:'/garcom',
        name: 'garcom',
        component: ChamarGarcom,
    },
    {
      path:'/conta',
        name: 'conta',
        component: PagarConta,
    },
    {
      path: '/login',
        name: 'login',
        component: LoginFunc,
    }
  ],
});

export default router;

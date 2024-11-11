// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Importar seus componentes dinamicamente
const TelaInicial = () => import('../components/TelaInicial.vue');
const CardapioHome = () => import('../components/Cliente/CardapioHome.vue');
const ChamarGarcom = () => import('../components/Cliente/ChamarGarcom.vue');
const PagarConta = () => import('../components/Cliente/PagarConta.vue');
const CardapioPizza = () => import('../components/Cliente/CardapioPizza.vue');
const CardapioBebida = () => import('../components/Cliente/CardapioBebidas.vue');
const TelaFuncionario = () => import('../components/Funcionario/TelaFuncionario.vue');
const TelaTablesLivre = () => import('../components/Funcionario/TelaTablesLivre.vue');
const EditMenu = () => import('../components/Funcionario/EditMenu.vue');
const AddMenu = () => import('../components/Funcionario/AddMenu.vue');
const TelaComandas = () => import('../components/Funcionario/TelaComandas.vue');
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
      path: '/cardapiopizza',
        name: 'cardapiopizza',
        component: CardapioPizza,
    },
    {
      path: '/cardapiobebida',
        name: 'cardapiobebida',
        component: CardapioBebida,
    },
    {
      path: '/funcionario',
        name: 'funcionario',
        component: TelaFuncionario,
    },
    {
      path: '/funcionariolivres',
        name: 'funcionariolivres',
        component: TelaTablesLivre,
    },
    {
      path: '/alterarmenu',
        name: 'alterarmenu',
        component: EditMenu,
    },
    {
      path: '/adicionarmenu',
        name: 'addmenu',
        component: AddMenu,
    },
    {
      path:'/comandas',
        name: 'comandas',
        component: TelaComandas,
    }
  ],
});

export default router;

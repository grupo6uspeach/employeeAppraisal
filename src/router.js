import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            name: 'Main',
            path: '/',
            component: () => import('@/Index.vue'),
            children: [
                {
                    name: 'Sobre',
                    path: '/Sobre',
                    component: () => import('@/Pages/Sobre.vue')
                },
                {
                    path: '/Login',
                    component: () => import('@/Pages/Login.vue')
                },
                {
                    path: '/Funcionarios',
                    component: () => import('@/Pages/Funcionarios.vue'),
                },
                {
                    path: '/FuncionarioDetalhes/:funcionario',
                    component: () => import('@/Pages/FuncionarioDetails.vue')
                },
                {
                    path: '/Avaliacoes',
                    component: () => import('@/Pages/Avaliacoes.vue')
                },
                {
                    path: '/Avaliacao/:funcionario/adicionar',
                    component: () => import ('@/Pages/AdicionarAvaliacao.vue')
                },
                {
                    path: '/Avaliacao/:funcionario/editar',
                    component: () => import ('@/Pages/EditarAvaliacao.vue')
                },
                {
                    path: '/Notas',
                    component: () => import('@/Pages/Notas.vue')
                },
                {
                    path: '/Notas/:funcionario',
                    component: () => import('@/Pages/AdicionarNota.vue')
                },
                {
                    path: '/Projetos',
                    component: () => import('@/Pages/Projetos.vue')
                },
                {
                    path: '/Projetos/:projeto',
                    component: () => import('@/Pages/ProjetoDetails.vue')
                }

            ]
        }

    ]
});

router.beforeEach((to, from, next) => {
    if (to.path == "/") {
        next('/Sobre');
        return;
    }
    next();
    return;
});
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var sliders = [
    {
        label: "Comprometimento",
        model: "comprometimento"
    },
    {
        label: "Proatividade",
        model: "proAtividade"
    },
    {
        label: "Colaboração",
        model: "colaboracao"
    },
    {
        label: "Liderança",
        model: "lideranca"
    },
    {
        label: "Agir como dono",
        model: "agirComoDono"
    },
    {
        label: "Autodidatismo",
        model: "autodidatismo"
    },
    {
        label: "Resultado",
        model: "resultado"
    },
    {
        label: "Qualidade",
        model: "qualidade"
    },
    {
        label: "Pontualidade",
        model: "pontualidade"
    },
    {
        label: "Eficiência",
        model: "eficiencia"
    },
    {
        label: "Transparência",
        model: "transparencia"
    },
    {
        label: "Engajamento",
        model: "engajamento"
    },
    {
        label: "Aderência aos valores da empresa",
        model: "aderenciaAosValoresDaEmpresa"
    },
];
export const store = new Vuex.Store({
    state: {
        sidebar: true,
        vw: Math.max(
            document.documentElement.clientWidth,
            window.innerWidth || 0
        ),
        sliders
    },
    getters: {
        sidebar: state => {
            return state.sidebar;
        },
        vw: state => {
            return state.vw;
        },
        sliders: state => {
            return state.sliders;
        }
    },
    mutations: {
        toggleSidebar(state) {
            state.sidebar = !state.sidebar;
        },
        addSlider(state, slider) {
            state.sliders.push(slider);
        }
    }
});
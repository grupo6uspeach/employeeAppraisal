import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var sliders = [
    {
      label: "Pró Atividade",
      model: "proAtividade"
    },
    {
      label: "Colaboração em equipe",
      model: "colaboracaoEquipe"
    },
    {
      label: "Liderança",
      model: "lideranca"
    }
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
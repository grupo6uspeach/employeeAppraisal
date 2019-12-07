<template>
  <transition name="slide">
    <div class="wrapper" id="sidebar">
      <div class="row justify-content-start ml-auto burger-icon" v-if="!showBurger">
        <button class="btn btn-icon" @click="toggleSidebar">
          <i class="fa fa-bars"></i>
        </button>
      </div>
      <div class="row justify-content-center avatarMargin">
        <!-- <v-avatar :tile="false" size="200">
          <img src="@/assets/img_avatar3.jpg" alt="avatar"/>
        </v-avatar> -->
      </div>
      <div v-if="showNav">
        <div class="row justify-content-center mt-4">
          <router-link to="/Sobre" class="link">
            <button class="btn btn-link link" @click="selected = 'Sobre'">
              <h5
                class="card-title link"
                :class="[selected == 'Sobre' ? 'text-info' : 'text-dark']"
              >Sobre</h5>
            </button>
          </router-link>
        </div>
        <div class="row justify-content-center mt-4">
          <router-link to="/Funcionarios" class="link">
            <button class="btn btn-link link" @click="selected = 'Funcionarios'">
              <h5
                class="card-title link"
                :class="[selected == 'Funcionarios' ? 'text-info' : 'text-dark']"
              >Funcionários</h5>
            </button>
          </router-link>
        </div>
        <div class="row justify-content-center mt-4">
          <router-link to="/Avaliacoes" class="link">
            <button class="btn btn-link link" @click="selected = 'Avaliacoes'">
              <h5
                class="card-title link"
                :class="[selected == 'Avaliacoes' ? 'text-info' : 'text-dark']"
              >Avaliações</h5>
            </button>
          </router-link>
        </div>
        <div class="row justify-content-center mt-4">
          <router-link to="/Notas" class="link">
            <button class="btn btn-link link" @click="selected = 'Notas'">
              <h5
                class="card-title link"
                :class="[selected == 'Notas' ? 'text-info' : 'text-dark']"
              >Notas</h5>
            </button>
          </router-link>
        </div>
        <div class="row justify-content-center mt-4">
          <router-link to="/Projetos" class="link">
            <button class="btn btn-link link" @click="selected = 'Projetos'">
              <h5
                class="card-title link"
                :class="[selected == 'Projetos' ? 'text-info' : 'text-dark']"
              >Projetos</h5>
            </button>
          </router-link>
        </div>
        
        <div class="row justify-content-center mt-4 mb-4">
          
        </div>
        <div class="row justify-content-center mt-4">
          <router-link to="/Login" class="link">
            <button class="btn btn-link link" @click="selected = 'Login'">
              <h5
                class="card-title link"
                :class="[selected == 'Login' ? 'text-info' : 'text-dark']"
              >Entrar</h5>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showNav: true,
      selected: undefined
    };
  },
  watch: {
    selected(novo) {
      this.showNav = false;
      this.$nextTick(() => {
        this.showNav = true;
      });
    }
  },
  methods: {
    toggleSidebar() {
      this.$store.commit('toggleSidebar');
    }
  },
  computed: {
    showBurger() {
      return this.$store.getters.vw >= 1024
    },
  }
};
</script>

<style>
@media (max-width: 1023px) {
  .avatarMargin {
    display: none !important;
  }

  .wrapper {
    background: rgba(237, 249, 249, 1) !important;
    border-right: 1px solid black;
  }

  .burger-icon {
    visibility: visible !important;
  }
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.link {
  text-decoration: none !important;
}

.burger-icon {
  visibility: hidden;
}

.wrapper {
  min-height: 100vh !important;
  background: rgba(80, 199, 199, 0.1);
}

.avatarMargin {
  margin-top: 20%;
  margin-bottom: 20%;
  margin-left: 50% !important;
  margin-right: 50% !important;
}

.flag {
  max-height: 32px;
  max-width: 32px;
}
</style>

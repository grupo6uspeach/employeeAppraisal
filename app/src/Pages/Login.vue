<template>
  <div class="row justify-content-center vertical-center" style="left: 40%" v-if="show">
    <!-- <div class="secondary">
      <p class="text-muted" v-if="linguagem == 'pt'">
        <span class="text-info">brunofurquimc@gmail.com</span> - São Paulo, SP, Brasil - 04140-110
      </p>
      <p class="text-muted" v-else>
        <span class="text-info">brunofurquimc@gmail.com</span> - São Paulo, SP, Brazil - 04140-110
      </p>
    </div>-->
    <div class="card">
      <div class="card-body p-5">
        <p class="main mb-5 p-5">Entre com a sua conta!</p>
        <div class="row mt-5 justify-content-center">
          <div class="col-12">
            <input type="email" class="form-control" placeholder="E-mail" />
          </div>
        </div>
        <div class="row mt-5 justify-content-center">
          <div class="col-12">
            <input type="password" class="form-control" placeholder="Senha" />
          </div>
        </div>
        <div class="row mt-5 justify-content-start ml-1">
          <router-link to="/Sobre" class="link">
            <button class="btn btn-info">Entrar</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.scrollToTop();
    if (this.$store.getters.vw < 1023) {
      if (this.$store.getters.sidebar == true)
        this.$store.commit("toggleSidebar");
    } else {
      if (!this.$store.getters.sidebar) this.$store.commit("toggleSidebar");
    }
  },
  data() {
    return {
      show: true
    };
  },
  components: {
  },
  computed: {
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  watch: {
  }
};
</script>

<style scoped>
@media (max-width: 1023px) {
  .mainWrapper {
    height: 80% !important;
  }

  .main {
    font-size: 25px !important;
  }

  .secondary {
    font-size: 15px !important;
  }

  .gafata {
    font-size: 16px !important;
  }
}

@media (min-width: 1024px) and (max-width: 1440px) {
  .main {
    font-size: 40px !important;
  }

  .gafata {
    font-size: 16px !important;
  }

  .secondary {
    font-size: 20px !important;
  }
}

.secondary {
  font-size: 30px;
}

.gafata {
  font-family: "Gafata" !important;
  font-size: 22px;
}

.main {
  font-size: 48px;
}
</style>
<template>
  <div class="row justify-content-center vertical-center" style="left: 27.5%" v-if="show">
    <!-- <div class="secondary">
      <p class="text-muted" v-if="linguagem == 'pt'">
        <span class="text-info">brunofurquimc@gmail.com</span> - São Paulo, SP, Brasil - 04140-110
      </p>
      <p class="text-muted" v-else>
        <span class="text-info">brunofurquimc@gmail.com</span> - São Paulo, SP, Brazil - 04140-110
      </p>
    </div>-->
    <div class="card">
      <div class="card-body p-5" style="width: 60vw !important">
        <div class="row justify-content-center">
          <p class="main mb-5 p-5">{{projeto}}</p>
        </div>

        <div class="row justify-content-start">
          <p class="secondary mt-5 mb-5 p-5">
            <b>Membros:</b>
            {{membros.join(', ')}}
          </p>
        </div>

        <div class="row justify-content-center">
          <div class="col-4">
            <div class="card" style="height: 20vh; width: 15vw">
              <div class="card-title mx-auto mt-2">Nota do Projeto</div>
              <div
                class="card-subtitle mx-auto mt-2"
                style="font-size: 32px"
              >{{id == 1 ? '9.8' : '8.2'}} / 10</div>
            </div>
          </div>
          <div class="col-4">
            <div class="card" style="height: 20vh; width: 15vw">
              <div class="card-title mx-auto mt-2">Despesa</div>
              <div class="card-subtitle mx-auto mt-2" style="font-size: 32px">R$ {{id == 1 ? '1 Milhão' : '500 Mil'}}</div>
            </div>
          </div>
          <div class="col-4">
            <div class="card" style="height: 20vh; width: 15vw">
              <div class="card-title mx-auto mt-2">Retorno Previsto</div>
              <div class="card-subtitle mx-auto mt-2" style="font-size: 32px">R$ {{id == 1 ? '7 Milhões' : '1 Milhão'}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
export default {
  mounted() {
    this.projeto = this.$route.params.projeto;

    if (this.id == 1)
      this.membros = ["Bruno Furquim", "Jordana", "Otacílio", "Laura"];
    else this.membros = ["Marcelo", "Gabriel"];

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
      projeto: "",
      membros: [],
      show: true
    };
  },
  components: {
  },
  computed: {
    id() {
      if (this.projeto == "Catálogo de Produtos") return 1;
      return 2;
    }
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
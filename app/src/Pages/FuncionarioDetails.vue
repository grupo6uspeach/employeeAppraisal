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
          <p class="main mb-5 p-5">{{funcionario}}</p>
        </div>

         <div v-for="(slider, i) in sliders" :key="i" class="mt-5">
          <p class="lead">{{slider.label}}</p>
          <vue-slider ref="slider" v-model="slider.model" v-bind="options"></vue-slider>
        </div>


        <div class="row mt-5 justify-content-center">
          <div class="col-auto">
            <button
              class="btn btn-lg btn-info"
              @click="editarAvaliacao"
            >Editar avaliação do mês atual</button>
          </div>
          <div class="col-auto">
            <button class="btn btn-lg btn-info" @click="adicionarAvaliacao">Adicionar avaliação</button>
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
    this.funcionario = this.$route.params.funcionario;

    this.sliders = this.$store.getters.sliders;

    this.sliders.forEach((elem) => {
      this.$data[elem.model] = 0;
      elem.model = this.$data[elem.model];
    })

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
      funcionario: "",
      show: true,
      options: {
        dotSize: 14,
        width: "auto",
        height: 4,
        contained: false,
        direction: "ltr",
        data: null,
        min: 0,
        max: 100,
        interval: 1,
        disabled: true,
        clickable: true,
        duration: 0.5,
        adsorb: false,
        lazy: false,
        tooltip: "focus",
        tooltipPlacement: "top",
        tooltipFormatter: void 0,
        useKeyboard: false,
        enableCross: true,
        fixed: false,
        minRange: void 0,
        maxRange: void 0,
        order: true,
        marks: false,
        dotOptions: void 0,
        process: true,
        dotStyle: void 0,
        railStyle: void 0,
        processStyle: void 0,
        tooltipStyle: void 0,
        stepStyle: void 0,
        stepActiveStyle: void 0,
        labelStyle: void 0,
        labelActiveStyle: void 0
      },
      sliders: []      
    };
  },
  components: {
    VueSlider
  },
  computed: {
  },
  methods: {
    adicionarAvaliacao() {
      this.$router.push({ path: `/Avaliacao/${this.funcionario}/adicionar` });
    },
    editarAvaliacao() {
      this.$router.push({ path: `/Avaliacao/${this.funcionario}/editar` });
    },
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
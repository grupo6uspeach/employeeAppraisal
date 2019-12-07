<template>
  <div class="row justify-content-center vertical-center" style="left: 27.5%" v-if="show">
    <div class="card">
      <div class="card-body p-5" style="width: 60vw !important">
        <p class="main pt-5">{{funcionario}}</p>
        <div class="col-auto">
          <p class="lead">Avaliação do mês de {{mes}}</p>
        </div>

        <div v-for="(slider, i) in sliders" :key="i" class="mt-5">
          <p class="lead">{{slider.label}}</p>
          <vue-slider ref="slider" v-model="slider.model" v-bind="options"></vue-slider>
        </div>

        <div class="row">
          <div class="col-6">
            <button
              class="btn-lg btn-outline-info btn mt-5 float-left"
              v-b-modal.modal-1
            >Adicionar Campo</button>
          </div>
          <div class="col-6">
            <button class="btn-lg btn-outline-info btn mt-5 float-right" @click="editar">Salvar</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-modal id="modal-1" title="Adicionar campo na avaliação" :ok-only="true" ok-title="Adicionar" @ok="adicionarCampo">
        <input
          type="text"
          class="form-control"
          v-model="campoNovo"
          placeholder="Nome do campo"
        />
      </b-modal>
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
      campoNovo: "",
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
        disabled: false,
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
      funcionario: "",
      show: true,
      sliders: []
    };
  },
  components: {
    VueSlider
  },
  computed: {
    mes() {
      var date = new Date();
      var month = date.getMonth();
      switch (month) {
        case 0:
          return "Janeiro";
        case 1:
          return "Fevereiro";
        case 2:
          return "Março";
        case 3:
          return "Abril";
        case 4:
          return "Maio";
        case 5:
          return "Junho";
        case 6:
          return "Julho";
        case 7:
          return "Agosto";
        case 8:
          return "Setembro";
        case 9:
          return "Outubro";
        case 10:
          return "Novembro";
        case 11:
          return "Dezembro";
      }
    },
    colorCampo() {
      if (this.campo < 33) return "red";
      if (this.campo < 66) return "yellow";
      if (this.campo < 100) return "green";
    }
  },
  methods: {
    adicionarCampo() {
      this.$data[this.campoNovo] = "";

      this.$store.commit('addSlider', {label: this.campoNovo, model: this.campoNovo});
    },
    editar() {
      this.$toast.success("Avaliação editada", "Sucesso", {
        position: "topRight"
      });
      this.$router.push({ path: `/FuncionarioDetalhes/${this.funcionario}` });
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
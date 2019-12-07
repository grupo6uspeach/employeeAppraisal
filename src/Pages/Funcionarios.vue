<template>
  <div class="vertical-center mainWrapper pl-5 pr-5" v-if="show">
    <div class="row mb-2">
      <p class="mainText">
        Dados dos funcionários
      </p>
    </div>
    <div class="row mb-5">
      <div class="col-auto">
        <input type="text" class="form-control" placeholder="Nome" v-model="nome" />
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-info">Buscar</button>
      </div>
    </div>
    <div class="row mb-5">
      <h4>Funcionários:</h4>
    </div>
    <div class="row mb-3" v-for="(f, i) in funcionariosAchados" :key="i">
      <button class="btn btn-outline-info" @click="funcionarioDetails(f)">{{f}}</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  mounted() {
    console.log(this.$route.params);
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
      show: true,
      nome: "",
      funcionarios: [
        "Bruno Furquim",
        "Jordana",
        "Marcelo Kern",
        "Gabriel",
        "Otacílio Lucas",
        "Laura Takano"
      ]
    };
  },
  computed: {
    funcionariosAchados() {
      return this.funcionarios.filter(elem => {
        return elem.toString().includes(this.nome);
      });
    }
  },
  methods: {
    funcionarioDetails(funcionario) {
        console.log(funcionario)
        this.$router.push({path: `/FuncionarioDetalhes/${funcionario}`})
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  watch: {
  }
};
</script>

<style>
@media (max-width: 1023px) {
  .mainWrapper {
    margin-top: 50px;
  }

  .mainText {
    font-size: 40px !important;
  }

  .titulo {
    font-size: 18px !important;
    font-weight: 500;
  }

  .periodo {
    font-size: 14px !important;
  }

  .instituicao {
    font-size: 16px !important;
  }

  .descricao {
    font-size: 14px !important;
  }
}

@media (min-width: 1024px) and (max-width: 1440px) {
  .mainText {
    font-size: 40px !important;
  }

  .periodo {
    font-size: 16px !important;
  }

  .instituicao {
    font-size: 22px !important;
  }

  .descricao {
    font-size: 14px !important;
  }
}
</style>

<style scoped>
.mainWrapper {
  height: 90% !important;
}

.mainText {
  font-size: 60px;
}
</style>
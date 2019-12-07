<template>
  <div class="mainWrapper vertical-center pl-5" v-if="show">
    <p class="main">Avaliação de Desempenho</p>
    <!-- <div class="secondary">
      <p class="text-muted" v-if="linguagem == 'pt'">
        <span class="text-info">brunofurquimc@gmail.com</span> - São Paulo, SP, Brasil - 04140-110
      </p>
      <p class="text-muted" v-else>
        <span class="text-info">brunofurquimc@gmail.com</span> - São Paulo, SP, Brazil - 04140-110
      </p>
    </div>-->

    <div class="row mt-5 justify-content-start">
      <div class="col-5">
        <h4>Dados</h4>
        <br />
        <p>Por aqui você acessa facilmente os dados de todos os seus funcionários de maneira individual e organizada.</p>
        <p>Tenha acesso ao seu perfil, histórico, habilidades e muito mais!</p>
        <button class="btn btn-info" @click="$router.push({path: '/Funcionarios'})">Funcionários</button>
      </div>
      <div class="col-1" style="border-right: 1px solid rgba(0, 0, 0, 0.5)"></div>
      <div class="ml-4 col-5">
        <h4>Avaliações</h4>
        <br />
        <p>Analie o desempenho do seu funcionário.</p>
        <p>Visualize todo o histórico de avaliações feitas por você.</p>
        <p>Emita relatórios completos das avaliações realizadas.</p>
        <button class="btn btn-info" @click="$router.push('/Avaliacoes')">Avaliações</button>
      </div>
    </div>
    <div class="row mt-5 justify-content-start">
      <div class="col-5">
        <h4>Projetos</h4>
        <br />
        <p>Visualize os projetos, membros, nota, despesa e retorno previsto de cada projeto.</p>
        <button class="btn btn-info" @click="$router.push('/Projetos')">Projetos</button>
      </div>
      <div class="col-1" style="border-right: 1px solid rgba(0, 0, 0, 0.5)"></div>
      <div class="ml-4 col-5">
        <h4>Notas</h4>
        <br />
        <p>Armazene informações relevantes relacionadas aos seus funcionários.</p>
        <p>Inclua, altere e visualize anotações ao longo do tempo.</p>
        <button class="btn btn-info" @click="$router.push('/Notas')">Notas</button>
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
  font-size: 60px;
}
</style>
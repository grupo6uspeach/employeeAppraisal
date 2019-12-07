<template>
  <div style="background: white !important; border-top: 1px solid black; border-bottom: 1px solid black">
    <button class="btn btn-icon p-0" @click="toggleSidebar">
      <i class="fa fa-bars"></i>
    </button>

    <!-- <ul class="list-inline">
      <li class="list-inline-item linkEscrito">
        <button class="btn btn-md btn-link">
          <router-link to="/Sobre">Sobre</router-link>
        </button>
      </li>
      <li class="list-inline-item linkEscrito">
        <button class="btn btn-md btn-link">
          <router-link to="/Experiencia">Experiência</router-link>
        </button>
      </li>
      <li class="list-inline-item linkEscrito">
        <button class="btn btn-md btn-link">
          <router-link to="/Educacao">Educação</router-link>
        </button>
      </li>
      <li class="list-inline-item linkEscrito">
        <button class="btn btn-md btn-link">
          <router-link to="/Habilidades">Habilidades</router-link>
        </button>
      </li>
    </ul>-->
  </div>
</template>

<script>
export default {
    methods: {
        toggleSidebar() {
            this.$store.commit('toggleSidebar');
        }
    }
};
</script>

<style scoped>
</style>
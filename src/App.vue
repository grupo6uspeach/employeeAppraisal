<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "@/Main.vue";
import Login from '@/Pages/Login.vue';

export default {
  name: "App",
  components: {
    Main,
    Login
  },
  data: () => ({
    //
  })
};
</script>

<style>

::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar-track {
  background: rgba(3, 219, 252, 0.25) !important;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 1);
}

</style>

<template>
  <div class="mainWrapper">
    <Navbar class="navbar" />
    <Sidebar class="sidebar" v-if="showSidebar" />
    <div class="main">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  created() {
    if (this.vw >= 1024) {
      if (this.showSidebar == false) this.$store.commit("toggleSidebar");
    }
  },
  components: {
    Sidebar,
    Navbar
  },
  data() {
    return {
      showLogin: false
    };
  },
  computed: {
    showSidebar() {
      return this.$store.getters.sidebar;
    },
    vw() {
      return Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
    }
  }
};
</script>


<style>
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>

<style scoped>
@media (min-width: 320px) and (max-width: 1023px) {
  .navbar {
    visibility: visible !important;
  }

  .main {
    margin-top: 50% !important;
    margin-left: 0 !important;
  }
}

@media (min-width: 1024px) and (max-width: 1439px) {
  .sidebar {
    width: 15vw !important;
    min-width: 250px !important;
  }

  .main {
    margin-left: 25vw !important;
  }
}

.sidebar {
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  overflow-x: hidden;
  width: 15vw;
  min-width: 200px;
  max-width: 300px;
}

.navbar {
  visibility: hidden;
  position: fixed !important;
  min-height: 50px !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.main {
  margin-left: 20vw;
}

.slide-fade-enter-active {
  transition: all 1.5s ease;
}
.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
<template>
  <div class="app-container">
    <AppHeader />

    <main id="app-content">
      <div class="left-sidebar-column">
        <MangaFilter v-if="$route.path === '/browse'" />
        <HearMeOut v-else />
      </div>

      <router-view class="main-column" />

      <div class="right-sidebar-column">
        <RequestForm />
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import RequestForm from './components/RequestForm.vue';
import HearMeOut from './components/HearMeOut.vue';
import MangaFilter from './components/MangaFilter.vue';
</script>

<style>
html {
  overflow-y: scroll;
}
body {
  background-color: #f4f4f9;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#app-content {
  color: #2c3e50;
  flex-grow: 1;
  max-width: 1680px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  gap: 2.5rem; /* Increased gap for better spacing */
  align-items: start;
}

@media (max-width: 1200px) {
  #app-content {
    grid-template-columns: 1fr;
  }
  .right-sidebar-column, .left-sidebar-column {
    position: static;
    width: 100%;
  }
  .main-column { order: 1; }
  .left-sidebar-column { order: 2; }
  .right-sidebar-column { order: 3; }
}

.main-column {
  min-width: 0;
}

.right-sidebar-column {
  position: sticky;
  top: 2rem;
}
</style>

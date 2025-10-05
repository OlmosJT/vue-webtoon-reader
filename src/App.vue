<template>
  <div class="app-container">
    <AppHeader />

    <main id="app-content">
      <div class="left-sidebar-column">
        <HearMeOut />
      </div>

      <router-view />

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
  gap: 2rem;
  align-items: start;
}
.genre-filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1rem;
}
.genre-filters button {
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  color: #555;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.genre-filters button:hover {
  background-color: #f0f0f0;
}
.genre-filters button.active {
  background-color: #007bff;
  color: white;
}
@media (max-width: 1200px) {
  #app-content {
    grid-template-columns: 1fr;
  }
  .right-sidebar-column {
    position: static;
  }
  .main-column { order: 1; }
  .left-sidebar-column { order: 2; }
  .right-sidebar-column { order: 3; }
}
.main-column {
  min-width: 0;
}
.left-sidebar-column {
  /* It is a static column */
}
.right-sidebar-column {
  position: sticky;
  top: 2rem;
}
.search-results {
  text-align: center;
}
.manga-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}
</style>

<template>
  <div class="my-list-view">
    <h2 class="page-title">My Favorite Manga</h2>
    <div v-if="likedManga.length > 0" class="manga-grid">
      <MangaCard
        v-for="manga in likedManga"
        :key="manga.id"
        :manga="manga"
      />
    </div>
    <div v-else class="empty-state">
      <h3>Your List is Empty</h3>
      <p>Click the heart icon on any manga to add it to your list.</p>
      <router-link to="/browse" class="browse-button">Start Browsing</router-link>
    </div>
  </div>
</template>

<script setup>
import { useMangaStore } from '../stores/mangaStore.js';
import MangaCard from '../components/MangaCard.vue';

const { likedManga } = useMangaStore();
</script>

<style scoped>
.my-list-view {
  min-width: 0;
}
.page-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 1rem;
}
.manga-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
}
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background-color: #ffffff;
  border-radius: 12px;
  text-align: center;
}
.empty-state h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.empty-state p {
  color: #666;
  margin-bottom: 1.5rem;
}
.browse-button {
  background-color: #007bff;
  color: #fff;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}
.browse-button:hover {
  background-color: #0056b3;
}
</style>

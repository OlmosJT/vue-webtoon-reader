<template>
  <div class="manga-grid">
    <MangaCard
      v-for="manga in filteredManga"
      :key="manga.id"
      :manga="manga"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useMangaStore } from '../stores/mangaStore.js';
import MangaCard from '../components/MangaCard.vue';

const { allManga, filters } = useMangaStore();

const filteredManga = computed(() => {
  let manga = [...allManga.value];

  // Apply search query filter
  if (filters.searchQuery) {
    manga = manga.filter(m => m.title.toLowerCase().includes(filters.searchQuery.toLowerCase()));
  }

  // Apply genre filter
  if (filters.genres.length) {
    manga = manga.filter(m => filters.genres.every(g => m.genres.includes(g)));
  }

  // Apply status filter
  if (filters.status) {
    manga = manga.filter(m => m.status === filters.status);
  }

  // Apply sorting
  manga.sort((a, b) => {
    const [field, order] = filters.sortBy.split('-');
    const aValue = a[field].toLowerCase();
    const bValue = b[field].toLowerCase();
    if (aValue < bValue) return order === 'asc' ? -1 : 1;
    if (aValue > bValue) return order === 'asc' ? 1 : -1;
    return 0;
  });

  return manga;
});
</script>

<style scoped>
.manga-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  width: 100%;
}
</style>

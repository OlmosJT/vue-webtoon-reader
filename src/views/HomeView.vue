<template>
  <div>
    <CarouselBanner :items="bannerItems" />
    <div v-if="searchQuery">
    </div>
    <div v-else>
      <div class="genre-filters">
        <button
          v-for="genre in genres"
          :key="genre"
          :class="{ active: selectedGenre === genre }"
          @click="selectedGenre = genre"
        >
          {{ genre }}
        </button>
      </div>
      <MangaRow title="Trending Now" :items="trendingManga" category-key="trending" />
      <MangaRow title="New Releases" :items="newReleases" category-key="new-releases" />
      <MangaRow title="Popular Titles" :items="popularManga" category-key="popular" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CarouselBanner from '../components/CarouselBanner.vue';
import MangaRow from '../components/MangaRow.vue';
import { useMangaStore } from '../stores/mangaStore.js';

const { getCategoryByName } = useMangaStore();

const trendingManga = computed(() => getCategoryByName('trending').items);
const newReleases = computed(() => getCategoryByName('new-releases').items);
const popularManga = computed(() => getCategoryByName('popular').items);

const searchQuery = ref('');
const bannerItems = ref([
  { id: 1, title: 'Featured: Attack on Titan', description: 'The epic conclusion has arrived. Witness the final battle for humanity\'s freedom in the last volume.', link: '#', imageUrl: 'https://placehold.co/1200x400/E8112D/white?text=Attack+on+Titan+Banner' },
  { id: 2, title: 'New Chapter: One-Punch Man', description: 'Saitama faces his most baffling challenge yet: a supermarket sale. Don\'t miss the latest hilarious chapter.', link: '#', imageUrl: 'https://placehold.co/1200x400/FFC800/white?text=One-Punch+Man+Banner' },
  { id: 3, title: 'Now Trending: Jujutsu Kaisen', description: 'Dive into a world of curses and sorcery. Find out why everyone is talking about Jujutsu High.', link: '#', imageUrl: 'https://placehold.co/1200x400/7B1FA2/white?text=Jujutsu+Kaisen+Banner' },
]);
const genres = ref(['All', 'Action', 'Fantasy', 'Comedy', 'Seinen']);
const selectedGenre = ref('All');
</script>

<style scoped>
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
</style>

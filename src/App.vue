<template>
  <div class="app-container">
    <AppHeader v-model="searchQuery" />

    <main id="app-content">
      <div class="left-sidebar-column">
        <HearMeOut />
      </div>

      <div class="main-column">
        <CarouselBanner :items="bannerItems" />

        <div v-if="searchQuery" class="search-results">
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

          <MangaRow title="Trending Now" :items="filteredTrendingManga" />
          <MangaRow title="New Releases" :items="filteredNewReleases" />
          <MangaRow title="Popular Titles" :items="filteredPopularManga" />
        </div>
      </div>

      <div class="right-sidebar-column">
        <RequestForm />
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppHeader from './components/AppHeader.vue';
import CarouselBanner from './components/CarouselBanner.vue';
import MangaCard from './components/MangaCard.vue';
import MangaRow from './components/MangaRow.vue';
import AppFooter from './components/AppFooter.vue';
import RequestForm from './components/RequestForm.vue';
import HearMeOut from './components/HearMeOut.vue';

const searchQuery = ref('');
const bannerItems = ref([ { id: 1, title: 'Featured: Attack on Titan', description: 'The epic conclusion has arrived. Witness the final battle for humanity\'s freedom in the last volume.', link: '#', imageUrl: 'https://placehold.co/1200x400/E8112D/white?text=Attack+on+Titan+Banner' }, { id: 2, title: 'New Chapter: One-Punch Man', description: 'Saitama faces his most baffling challenge yet: a supermarket sale. Don\'t miss the latest hilarious chapter.', link: '#', imageUrl: 'https://placehold.co/1200x400/FFC800/white?text=One-Punch+Man+Banner' }, { id: 3, title: 'Now Trending: Jujutsu Kaisen', description: 'Dive into a world of curses and sorcery. Find out why everyone is talking about Jujutsu High.', link: '#', imageUrl: 'https://placehold.co/1200x400/7B1FA2/white?text=Jujutsu+Kaisen+Banner' }, ]);

// --- 2. ADDED: Genre Filtering Logic ---
const genres = ref(['All', 'Action', 'Fantasy', 'Comedy', 'Seinen']);
const selectedGenre = ref('All');
// --- End of new logic section ---

// --- 3. UPDATED: Manga data now includes a 'genres' array ---
const trendingManga = ref([
  { id: 2, title: 'One-Punch Man', author: 'ONE', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/FFC800/white?text=One-Punch+Man', genres: ['Action', 'Comedy', 'Seinen'] },
  { id: 4, title: 'Jujutsu Kaisen', author: 'Gege Akutami', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/7B1FA2/white?text=Jujutsu+Kaisen', genres: ['Action', 'Fantasy'] },
  { id: 5, title: 'Chainsaw Man', author: 'Tatsuki Fujimoto', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/FF4500/white?text=Chainsaw+Man', genres: ['Action', 'Seinen'] },
  { id: 6, title: 'Vinland Saga', author: 'Makoto Yukimura', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/8B4513/white?text=Vinland+Saga', genres: ['Action', 'Seinen'] },
]);
const newReleases = ref([
  { id: 7, title: 'Spy x Family', author: 'Tatsuya Endo', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/32CD32/white?text=Spy+x+Family', genres: ['Action', 'Comedy'] },
  { id: 8, title: 'Kaiju No. 8', author: 'Naoya Matsumoto', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/4682B4/white?text=Kaiju+No.+8', genres: ['Action', 'Fantasy'] },
]);
const popularManga = ref([
  { id: 1, title: 'Shingeki no Kyojin', author: 'Hajime Isayama', status: 'Finished', imageUrl: 'https://placehold.co/400x600/E8112D/white?text=Attack+on+Titan', genres: ['Action', 'Fantasy', 'Seinen'] },
  { id: 3, title: 'Berserk', author: 'Kentaro Miura', status: 'Hiatus', imageUrl: 'https://placehold.co/400x600/1C1C1C/white?text=Berserk', genres: ['Action', 'Fantasy', 'Seinen'] },
  { id: 9, title: 'Vagabond', author: 'Takehiko Inoue', status: 'Hiatus', imageUrl: 'https://placehold.co/400x600/A52A2A/white?text=Vagabond', genres: ['Action', 'Seinen'] },
  { id: 10, title: 'Grand Blue', author: 'Kenji Inoue', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/1E90FF/white?text=Grand+Blue', genres: ['Comedy', 'Seinen'] },
]);

// --- 4. ADDED: Computed properties to dynamically filter the manga lists ---
const filterByGenre = (list) => {
  if (selectedGenre.value === 'All') {
    return list.value;
  }
  return list.value.filter(manga => manga.genres.includes(selectedGenre.value));
};

const filteredTrendingManga = computed(() => filterByGenre(trendingManga));
const filteredNewReleases = computed(() => filterByGenre(newReleases));
const filteredPopularManga = computed(() => filterByGenre(popularManga));

const allManga = computed(() => [...trendingManga.value, ...newReleases.value, ...popularManga.value]);
const filteredMangaList = computed(() => { if (!searchQuery.value) { return []; } return allManga.value.filter(manga => manga.title.toLowerCase().includes(searchQuery.value.toLowerCase())); });
</script>

<style>
/* --- Most styles remain the same --- */
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

/* --- 5. ADDED: Styles for the new genre filter tabs --- */
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
  #app-content { grid-template-columns: 1fr; }
  .right-sidebar-column { position: static; }
  .main-column { order: 1; }
  .left-sidebar-column { order: 2; }
  .right-sidebar-column { order: 3; }
}
.main-column { min-width: 0; }
.left-sidebar-column { /* Static column */ }
.right-sidebar-column { position: sticky; top: 2rem; }
.search-results { text-align: center; }
.manga-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 24px; }
</style>

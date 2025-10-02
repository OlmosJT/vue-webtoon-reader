<template>
  <div class="app-container">
    <AppHeader v-model="searchQuery" />

    <main id="app-content">
      <div class="main-column">
        <CarouselBanner :items="bannerItems" />

        <div v-if="searchQuery" class="search-results">
          <h2>Search Results for "{{ searchQuery }}"</h2>
          <div class="manga-container">
            <MangaCard
              v-for="manga in filteredMangaList"
              :key="manga.id"
              :title="manga.title"
              :author="manga.author"
              :status="manga.status"
              :image-url="manga.imageUrl"
            />
          </div>
        </div>

        <div v-else>
          <MangaRow title="Trending Now" :items="trendingManga" />
          <MangaRow title="New Releases" :items="newReleases" />
          <MangaRow title="Popular Titles" :items="popularManga" />
        </div>
      </div>

      <div class="sidebar-column">
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
import RequestForm from './components/RequestForm.vue'; // <-- Import the new component

const searchQuery = ref('');

// --- All data (bannerItems, trendingManga, etc.) remains the same ---
const bannerItems = ref([
  { id: 1, title: 'Featured: Attack on Titan', description: 'The epic conclusion has arrived. Witness the final battle for humanity\'s freedom in the last volume.', link: '#', imageUrl: 'https://placehold.co/1200x400/E8112D/white?text=Attack+on+Titan+Banner' },
  { id: 2, title: 'New Chapter: One-Punch Man', description: 'Saitama faces his most baffling challenge yet: a supermarket sale. Don\'t miss the latest hilarious chapter.', link: '#', imageUrl: 'https://placehold.co/1200x400/FFC800/white?text=One-Punch+Man+Banner' },
  { id: 3, title: 'Now Trending: Jujutsu Kaisen', description: 'Dive into a world of curses and sorcery. Find out why everyone is talking about Jujutsu High.', link: '#', imageUrl: 'https://placehold.co/1200x400/7B1FA2/white?text=Jujutsu+Kaisen+Banner' },
]);
const trendingManga = ref([ { id: 2, title: 'One-Punch Man', author: 'ONE', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/FFC800/white?text=One-Punch+Man' }, { id: 4, title: 'Jujutsu Kaisen', author: 'Gege Akutami', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/7B1FA2/white?text=Jujutsu+Kaisen' }, { id: 5, title: 'Chainsaw Man', author: 'Tatsuki Fujimoto', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/FF4500/white?text=Chainsaw+Man' }, { id: 6, title: 'Vinland Saga', author: 'Makoto Yukimura', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/8B4513/white?text=Vinland+Saga' }, ]);
const newReleases = ref([ { id: 7, title: 'Spy x Family', author: 'Tatsuya Endo', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/32CD32/white?text=Spy+x+Family' }, { id: 8, title: 'Kaiju No. 8', author: 'Naoya Matsumoto', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/4682B4/white?text=Kaiju+No.+8' }, ]);
const popularManga = ref([ { id: 1, title: 'Shingeki no Kyojin', author: 'Hajime Isayama', status: 'Finished', imageUrl: 'https://placehold.co/400x600/E8112D/white?text=Attack+on+Titan' }, { id: 3, title: 'Berserk', author: 'Kentaro Miura', status: 'Hiatus', imageUrl: 'https://placehold.co/400x600/1C1C1C/white?text=Berserk' }, { id: 9, title: 'Vagabond', author: 'Takehiko Inoue', status: 'Hiatus', imageUrl: 'https://placehold.co/400x600/A52A2A/white?text=Vagabond' }, { id: 10, title: 'Kingdom', author: 'Yasuhisa Hara', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/DC143C/white?text=Kingdom' }, ]);
const allManga = computed(() => [...trendingManga.value, ...newReleases.value, ...popularManga.value]);
const filteredMangaList = computed(() => { if (!searchQuery.value) { return []; } return allManga.value.filter(manga => manga.title.toLowerCase().includes(searchQuery.value.toLowerCase())); });
</script>

<style>
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
  max-width: 1440px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 3rem;
  box-sizing: border-box;

  /* --- Updated for 2-column layout --- */
  display: grid;
  grid-template-columns: 1fr 320px; /* Flexible main column, fixed sidebar */
  gap: 2.5rem;
  align-items: start;
}

/* --- Media query for responsiveness on smaller screens --- */
@media (max-width: 1024px) {
  #app-content {
    grid-template-columns: 1fr; /* Stack columns on top of each other */
  }
}

.main-column {
  /* This column will hold the main content */
}

.sidebar-column {
  /* This column will hold the form */
  position: sticky;
  top: 2rem; /* Makes the form stick to the top on scroll */
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

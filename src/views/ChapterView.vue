<template>
  <div class="chapter-view">
    <header class="chapter-header">
      <div class="header-content">
        <router-link :to="`/manga/${mangaId}`" class="back-link">&larr; Back to Details</router-link>
        <div class="chapter-info">
          <h1>{{ manga?.title }}</h1>
          <span>- {{ currentChapter?.title }}</span>
        </div>
        <div class="nav-placeholder"></div> </div>
    </header>

    <main class="reader-content">
      <img v-for="page in chapterPages" :key="page" :src="page" alt="Manga Page" />
    </main>

    <footer class="chapter-footer">
      <router-link
        v-if="prevChapterId"
        :to="{ name: 'chapter-view', params: { mangaId, chapterId: prevChapterId } }"
        class="btn btn-secondary"
      >
        &laquo; Previous Chapter
      </router-link>
      <div v-else></div> <router-link
      v-if="nextChapterId"
      :to="{ name: 'chapter-view', params: { mangaId, chapterId: nextChapterId } }"
      class="btn btn-primary"
    >
      Next Chapter &raquo;
    </router-link>
    </footer>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useMangaStore } from '../stores/mangaStore';

const props = defineProps({
  mangaId: { type: String, required: true },
  chapterId: { type: String, required: true },
});

const { getMangaById, getChaptersForManga } = useMangaStore();
const route = useRoute();

const manga = computed(() => getMangaById(props.mangaId));
const chapters = computed(() => getChaptersForManga(props.mangaId));

const currentChapter = computed(() => {
  return chapters.value.find(c => c.id === parseInt(props.chapterId));
});

const currentChapterIndex = computed(() => {
  return chapters.value.findIndex(c => c.id === parseInt(props.chapterId));
});

const prevChapterId = computed(() => {
  if (currentChapterIndex.value > 0) {
    return chapters.value[currentChapterIndex.value - 1].id;
  }
  return null;
});

const nextChapterId = computed(() => {
  if (currentChapterIndex.value < chapters.value.length - 1) {
    return chapters.value[currentChapterIndex.value + 1].id;
  }
  return null;
});

// Placeholder images for the chapter content
const chapterPages = [
  'https://placehold.co/800x1200/000000/FFF?text=Page+1',
  'https://placehold.co/800x1400/000000/FFF?text=Page+2',
  'https://placehold.co/800x1300/000000/FFF?text=Page+3',
  'https://placehold.co/800x1500/000000/FFF?text=Page+4',
];

// Scroll to top when chapter changes
watch(() => route.params.chapterId, () => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.chapter-view {
  background-color: #1a1a1a;
  color: white;
  padding: 0 0 5rem 0;
  min-height: 100vh;
}

.chapter-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(20, 20, 20, 0.9);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.5);
}
.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.back-link {
  color: #00aaff;
  text-decoration: none;
  font-weight: 600;
  min-width: 150px;
}
.chapter-info {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  text-align: center;
}
.chapter-info h1 {
  font-size: 1.25rem;
  margin: 0;
  white-space: nowrap;
}
.chapter-info span {
  font-size: 1rem;
  color: #ccc;
}
.nav-placeholder {
  min-width: 150px; /* Same width as back-link to keep title centered */
}

.reader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
}
.reader-content img {
  max-width: 100%;
  height: auto;
}

.chapter-footer {
  max-width: 800px;
  margin: 2rem auto 0;
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.btn {
  padding: 12px 24px;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}
.btn-primary {
  background-color: #007bff;
  color: white;
}
.btn-primary:hover {
  background-color: #0056b3;
}
.btn-secondary {
  background-color: #6c757d;
  color: white;
}
.btn-secondary:hover {
  background-color: #5a6268;
}
</style>

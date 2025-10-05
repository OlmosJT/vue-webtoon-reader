<template>
  <div v-if="manga" class="manga-detail-view">
    <div class="banner" :style="{ backgroundImage: `url(${manga.imageUrl})` }">
      <div class="banner-overlay"></div>
    </div>

    <div class="main-content">
      <div class="info-header">
        <img :src="manga.imageUrl" :alt="manga.title" class="cover-image" />
        <div class="details">
          <div>
            <h1 class="title">{{ manga.title }}</h1>
            <p class="author">by {{ manga.author }}</p>
            <div class="tags">
              <Tag :label="manga.status" />
              <span v-for="genre in manga.genres" :key="genre" class="genre-tag">{{ genre }}</span>
            </div>
            <p class="synopsis">{{ manga.synopsis }}</p>
            <div class="action-buttons">
              <router-link v-if="firstChapter" :to="{ name: 'chapter-view', params: { mangaId: manga.id, chapterId: firstChapter.id } }" class="btn btn-primary">Read First Chapter</router-link>
              <router-link v-if="lastChapter" :to="{ name: 'chapter-view', params: { mangaId: manga.id, chapterId: lastChapter.id } }" class="btn btn-secondary">Read Last Chapter</router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="chapters-section">
        <div class="chapters-header">
          <h2>Chapters</h2>
          <button @click="toggleSortOrder" class="sort-button">
            Sort by: {{ sortOrder === 'desc' ? 'Newest' : 'Oldest' }}
          </button>
        </div>
        <ul class="chapters-list">
          <li v-for="chapter in sortedChapters" :key="chapter.id" class="chapter-item">
            <router-link :to="{ name: 'chapter-view', params: { mangaId: manga.id, chapterId: chapter.id } }">
              <span class="chapter-title">{{ chapter.title }}</span>
              <span class="chapter-date">{{ chapter.date }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading manga details...</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useMangaStore } from '../stores/mangaStore';
import Tag from '../components/Tag.vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const { getMangaById, getChaptersForManga } = useMangaStore();
const manga = computed(() => getMangaById(props.id));

const sortOrder = ref('desc');

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'desc' ? 'asc' : 'desc';
};

const sortedChapters = computed(() => {
  if (!manga.value) return [];
  const chapters = getChaptersForManga(manga.value.id);
  return chapters.sort((a, b) => {
    return sortOrder.value === 'desc' ? b.id - a.id : a.id - b.id;
  });
});

const firstChapter = computed(() => {
  const chapters = sortedChapters.value;
  if (!chapters.length) return null;
  return chapters.reduce((prev, curr) => (prev.id < curr.id ? prev : curr));
});

const lastChapter = computed(() => {
  const chapters = sortedChapters.value;
  if (!chapters.length) return null;
  return chapters.reduce((prev, curr) => (prev.id > curr.id ? prev : curr));
});
</script>

<style scoped>
/* All styles from the previous turn remain the same */
.manga-detail-view {
  width: 100%;
}
.banner {
  height: 350px;
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  overflow: hidden;
  margin: -2rem -2rem 0 -2rem;
}
.banner-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
}
.main-content {
  position: relative;
  margin-top: -150px;
  padding: 0 2rem;
}
.info-header {
  display: flex;
  gap: 2rem;
  align-items: stretch;
}
.cover-image {
  width: 250px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border: 4px solid white;
  align-self: flex-end;
}
.details {
  flex-grow: 1;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 1rem;
}
.title {
  font-size: 3rem;
  margin: 0;
  font-weight: 700;
}
.author {
  font-size: 1.25rem;
  margin: 0.5rem 0 1rem;
  font-style: italic;
  opacity: 0.9;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.genre-tag {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
}
.synopsis {
  font-size: 1rem;
  line-height: 1.6;
  color: #2c3e50;
  text-shadow: none;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 8px;
  backdrop-filter: blur(5px);
  margin-top: 1.5rem;
}
.action-buttons {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
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
  display: inline-block;
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
.chapters-section {
  margin-top: 3rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
}
.chapters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eee;
  padding-bottom: 1rem;
}
.chapters-section h2 {
  margin: 0;
}
.sort-button {
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
  color: #555;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}
.sort-button:hover {
  background-color: #e9e9e9;
  border-color: #ccc;
}
.chapters-list {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 500px;
  overflow-y: auto;
}
.chapter-item a {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #f0f0f0;
  text-decoration: none;
  color: #333;
  transition: background-color 0.2s;
  border-radius: 8px;
}
.chapter-item a:hover {
  background-color: #f8f9fa;
}
.chapter-title {
  font-weight: 600;
}
.chapter-date {
  color: #888;
  font-size: 0.9rem;
}
</style>

<template>
  <div class="home-view">
    <section class="banner-section">
      <div class="banner-content">
        <p class="tagline">Now Trending: Jujutsu Kaisen</p>
        <h2 class="banner-title">Jujutsu Kaisen Banner</h2>
        <p class="description">Dive into a world of curses and sorcery. Find out why everyone is talking about Jujutsu High.</p>
        <router-link to="/manga/4" class="read-now-button">Read Now &rarr;</router-link>
      </div>
      <div class="banner-image">
      </div>
    </section>

    <div class="category-header">
      <h2 class="category-title">{{ getCategoryByName('trending').title }}</h2>
      <router-link to="/browse" class="see-all-button">See All &rarr;</router-link>
    </div>
    <div class="manga-grid">
      <MangaCard
        v-for="manga in getCategoryByName('trending').items"
        :key="manga.id"
        :manga="manga"
      />
    </div>

    <div class="category-header">
      <h2 class="category-title">{{ getCategoryByName('new-releases').title }}</h2>
      <router-link to="/browse" class="see-all-button">See All &rarr;</router-link>
    </div>
    <div class="manga-grid">
      <MangaCard
        v-for="manga in getCategoryByName('new-releases').items"
        :key="manga.id"
        :manga="manga"
      />
    </div>

    <div class="category-header">
      <h2 class="category-title">{{ getCategoryByName('popular').title }}</h2>
      <router-link to="/browse" class="see-all-button">See All &rarr;</router-link>
    </div>
    <div class="manga-grid">
      <MangaCard
        v-for="manga in getCategoryByName('popular').items"
        :key="manga.id"
        :manga="manga"
      />
    </div>
  </div>
</template>

<script setup>
import MangaCard from '../components/MangaCard.vue';
import { useMangaStore } from '../stores/mangaStore';

const { getCategoryByName } = useMangaStore();
</script>

<style scoped>
.home-view {
  padding: 0 0 2rem 0;
}
.banner-section {
  display: flex;
  background: linear-gradient(90deg, #5e35b1 0%, #7b1fa2 100%);
  color: white;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2.5rem;
  min-height: 250px;
  position: relative;
  z-index: 1; /* Ensure banner is below popup's z-index: 1000 */
}
.banner-content {
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60%;
}
.tagline {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}
.banner-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
}
.description {
  font-size: 1.1rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.6;
}
.read-now-button {
  display: inline-block;
  padding: 0.8rem 1.8rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  align-self: flex-start;
}
.read-now-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}
.banner-image {
  flex: 1;
  background: url('https://placehold.co/600x400/7B1FA2/white?text=Jujutsu+Kaisen+Banner') no-repeat center center;
  background-size: cover;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}
.category-title {
  font-size: 1.8rem;
  margin: 0;
  color: #2c3e50;
}
.see-all-button {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}
.see-all-button:hover {
  color: #0056b3;
}
.manga-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .banner-section {
    flex-direction: column;
    text-align: center;
  }
  .banner-content {
    max-width: 100%;
    padding: 2rem;
    align-items: center;
  }
  .banner-image {
    min-height: 200px;
  }
  .banner-title {
    font-size: 2rem;
  }
  .description {
    font-size: 1rem;
  }
}
</style>

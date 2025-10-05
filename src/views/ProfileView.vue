<template>
  <div class="profile-view">
    <div class="profile-header">
      <img :src="user.avatarUrl" alt="User Avatar" class="profile-avatar" />
      <div class="profile-info">
        <h1 class="username">{{ user.name }}</h1>
        <p class="join-date">Member since {{ user.joinDate }}</p>
      </div>
    </div>

    <div class="profile-bio">
      <h2>About Me</h2>
      <p>{{ user.bio }}</p>
    </div>

    <div class="favorites-section">
      <h2>Favorite Manga</h2>
      <div v-if="likedManga.length > 0" class="favorites-grid">
        <router-link
          v-for="manga in likedManga"
          :key="manga.id"
          :to="`/manga/${manga.id}`"
          class="favorite-item"
        >
          <img :src="manga.imageUrl" :alt="manga.title" />
          <span>{{ manga.title }}</span>
        </router-link>
      </div>
      <div v-else class="empty-state">
        <p>No favorite manga yet. Click the heart on any manga to add it here!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMangaStore } from '../stores/mangaStore.js';

const { likedManga } = useMangaStore();

const user = ref({
  name: 'olmosjt',
  avatarUrl: 'https://i.pravatar.cc/150',
  joinDate: 'October 2025',
  bio: 'A passionate reader and translator, bringing amazing stories to a wider audience. Currently focused on the works of Arthur Hailey and exploring the world of webtoons.',
});
</script>

<style scoped>
.profile-view {
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 12px;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #f0f0f0;
}

.username {
  font-size: 2.5rem;
  margin: 0;
  font-weight: 700;
}

.join-date {
  color: #888;
  margin: 0.5rem 0 0;
}

.profile-bio, .favorites-section {
  margin-top: 2rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.profile-bio p {
  color: #555;
  line-height: 1.7;
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
}

.favorite-item {
  text-decoration: none;
  color: #333;
  text-align: center;
  transition: transform 0.2s ease;
}

.favorite-item:hover {
  transform: translateY(-5px);
}

.favorite-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.favorite-item span {
  font-weight: 600;
  font-size: 0.9rem;
}

.empty-state {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  color: #666;
}
</style>

<template>
  <router-link :to="`/manga/${manga.id}`" class="manga-card-link">
    <div
      class="manga-card"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <MangaPopover v-if="isHovered" :manga="manga" />

      <button @click.prevent.stop="toggleLike(manga.id)" class="like-button" :class="{ liked: isLiked }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>

      <img :src="manga.imageUrl" :alt="manga.title" class="manga-card-image" />
      <div class="manga-card-content">
        <h3 class="manga-card-title">{{ manga.title }}</h3>
        <p class="manga-card-author">By {{ manga.author }}</p>
        <div class="tags-container">
          <Tag :label="manga.status" />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useMangaStore } from '../stores/mangaStore.js';
import Tag from './Tag.vue';
import MangaPopover from './MangaPopover.vue';

const isHovered = ref(false);

const props = defineProps({
  manga: {
    type: Object,
    required: true,
  },
});

const { likedMangaIds, toggleLike } = useMangaStore();
const isLiked = computed(() => likedMangaIds.value.has(props.manga.id));
</script>

<style scoped>
.manga-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}
.manga-card {
  position: relative;
  width: 250px;
  border-radius: 12px;
  overflow: clip;
  box-shadow: 0 4px 12px rgba(0,0,0,.1);
  background-color: #fff;
  transition: transform .3s ease,box-shadow .3s ease;
  font-family: sans-serif;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.manga-card:hover{
  transform:translateY(-5px);
  box-shadow:0 8px 20px rgba(0,0,0,.15)
}
.manga-card-image{
  width:100%;
  height:300px;
  object-fit:cover;
  transition: filter 0.3s ease;
}
.manga-card:hover .manga-card-image {
  filter: brightness(0.8);
}
.manga-card-content{
  padding:16px;
  flex-grow:1;
  display:flex;
  flex-direction:column
}
.manga-card-title{
  margin:0 0 4px;
  font-size:1.25rem;
  color:#333
}
.manga-card-author{
  margin:0 0 12px;
  font-size:.9rem;
  color:#666;
  line-height:1.4;
  flex-grow:1
}
.tags-container{
  text-align:left
}
.like-button {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease, background-color 0.2s ease;
}
.like-button:hover {
  transform: scale(1.1);
  background-color: white;
}
.like-button svg {
  width: 20px;
  height: 20px;
  fill: #aaa;
  transition: fill 0.2s ease;
}
.like-button.liked svg {
  fill: #E8112D;
}
</style>

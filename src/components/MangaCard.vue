<template>
  <div
    class="manga-card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <MangaPopover v-if="isHovered" :manga="manga" />

    <img :src="manga.imageUrl" :alt="manga.title" class="manga-card-image" />
    <div class="manga-card-content">
      <h3 class="manga-card-title">{{ manga.title }}</h3>
      <p class="manga-card-author">By {{ manga.author }}</p>
      <div class="tags-container">
        <Tag :label="manga.status" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tag from './Tag.vue';
import MangaPopover from './MangaPopover.vue';

const isHovered = ref(false);

defineProps({
  manga: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.manga-card {
  position: relative;
  width: 250px;
  border-radius: 12px;
  /* CHANGED: Changed overflow from hidden to clip for performance */
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
  transition: filter 0.3s ease; /* Added transition for the filter */
}

/* ADDED: Darken image on hover to make popover text stand out */
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
</style>

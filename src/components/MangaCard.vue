<template>
  <div class="manga-card">
    <img :src="imageUrl" :alt="title" class="manga-card-image" />
    <div class="manga-card-content">
      <h3 class="manga-card-title">{{ title }}</h3>
      <p class="manga-card-author">By {{ author }}</p>
      <div class="tags-container">
        <Tag :label="status" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Tag from './Tag.vue'; // <-- Import the new component

// Defines the properties this component accepts.
// 'description' is replaced with 'author' and 'status'.
defineProps({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.manga-card {
  width: 250px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: sans-serif;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.manga-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.manga-card-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.manga-card-content {
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.manga-card-title {
  margin: 0 0 4px 0;
  font-size: 1.25rem;
  color: #333;
}

.manga-card-author {
  margin: 0 0 12px 0;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
  flex-grow: 1; /* Pushes the tag to the bottom */
}

.tags-container {
  text-align: left;
}
</style>

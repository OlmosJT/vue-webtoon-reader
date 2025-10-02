<template>
  <section class="manga-row">
    <header class="row-header">
      <h2 class="row-title">{{ title }}</h2>
      <a href="#" class="see-all-link">See all &rarr;</a>
    </header>
    <div class="row-content">
      <MangaCard
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :author="item.author"
        :status="item.status"
        :image-url="item.imageUrl"
      />
    </div>
  </section>
</template>

<script setup>
// This row needs the MangaCard component to display the items
import MangaCard from './MangaCard.vue';

// It accepts a 'title' for the header and an 'items' array to display
defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.manga-row {
  margin-bottom: 2.5rem;
}

.row-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 10px; /* Adds a little padding on the sides */
}

.row-title {
  font-size: 1.75rem;
  color: #2c3e50;
  margin: 0;
}

.see-all-link {
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.see-all-link:hover {
  color: #0056b3;
}

/* This is the key for the horizontal scroll */
.row-content {
  display: flex;
  gap: 20px;
  overflow-x: auto; /* Enables horizontal scrolling */
  padding: 10px;
  /* Hides the scrollbar for a cleaner look */
  scrollbar-width: none; /* For Firefox */
}

/* For Chrome, Safari, and Opera */
.row-content::-webkit-scrollbar {
  display: none;
}
</style>

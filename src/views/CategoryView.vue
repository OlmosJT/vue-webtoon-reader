<template>
  <div class="category-view">
    <h2 class="page-title">{{ category.title }}</h2>
    <div v-if="paginatedManga.length" class="manga-grid">
      <MangaCard
        v-for="manga in paginatedManga"
        :key="manga.id"
        :manga="manga"
      />
    </div>
    <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-changed="handlePageChange"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useMangaStore } from '../stores/mangaStore';
import MangaCard from '../components/MangaCard.vue';
import Pagination from '../components/Pagination.vue';

const props = defineProps({
  categoryName: {
    type: String,
    required: true,
  },
});

const { getCategoryByName } = useMangaStore();
const category = computed(() => getCategoryByName(props.categoryName));

const currentPage = ref(1);
const itemsPerPage = ref(8);

const totalPages = computed(() => {
  if (!category.value.items) return 1;
  return Math.ceil(category.value.items.length / itemsPerPage.value);
});

const paginatedManga = computed(() => {
  if (!category.value.items) return [];
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return category.value.items.slice(start, end);
});

const handlePageChange = (newPage) => {
  currentPage.value = newPage;
  window.scrollTo(0, 0);
};
</script>

<style scoped>
.page-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 1rem;
}
.manga-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
}
</style>

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
      v-if="totalPages > 1"
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-changed="handlePageChange"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
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
const categoryItems = computed(() => category.value.items.value || []);

const currentPage = ref(1);
const itemsPerPage = ref(8);

const totalPages = computed(() => {
  return Math.ceil(categoryItems.value.length / itemsPerPage.value);
});

const paginatedManga = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return categoryItems.value.slice(start, end);
});

const handlePageChange = (newPage) => {
  currentPage.value = newPage;
  window.scrollTo(0, 0);
};

watch(() => props.categoryName, () => {
  currentPage.value = 1;
});
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

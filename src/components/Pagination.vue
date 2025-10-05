<template>
  <div class="pagination-controls">
    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
      &laquo; Prev
    </button>
    <span v-for="page in pages" :key="page">
      <button
        v-if="page !== '...'"
        @click="changePage(page)"
        :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>
      <span v-else class="ellipsis">...</span>
    </span>
    <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
      Next &raquo;
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
});

const emit = defineEmits(['page-changed']);

const changePage = (page) => {
  if (page > 0 && page <= props.totalPages) {
    emit('page-changed', page);
  }
};

const pages = computed(() => {
  const pagesToShow = [];
  const total = props.totalPages;
  const current = props.currentPage;
  const range = 2;

  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pagesToShow.push(i);
    }
    return pagesToShow;
  }

  pagesToShow.push(1);
  if (current > range + 2) {
    pagesToShow.push('...');
  }

  for (let i = Math.max(2, current - range); i <= Math.min(total - 1, current + range); i++) {
    pagesToShow.push(i);
  }

  if (current < total - (range + 1)) {
    pagesToShow.push('...');
  }
  pagesToShow.push(total);

  return pagesToShow;
});
</script>

<style scoped>
.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
}
button {
  padding: 8px 14px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
button:not(:disabled):hover {
  background-color: #f0f0f0;
}
button.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
.ellipsis {
  padding: 8px;
}
</style>

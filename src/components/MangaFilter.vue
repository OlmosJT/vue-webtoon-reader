<template>
  <aside class="manga-filter">
    <h3>Filter & Sort</h3>

    <div class="filter-group">
      <label for="search">Search</label>
      <input
        type="text"
        id="search"
        v-model="filters.searchQuery"
        @input="emitFilters"
        placeholder="Search by title..."
      />
    </div>

    <div class="filter-group">
      <label>Genres</label>
      <div class="genre-tags">
        <button
          v-for="genre in allGenres"
          :key="genre"
          :class="{ active: filters.genres.includes(genre) }"
          @click="toggleGenre(genre)"
        >
          {{ genre }}
        </button>
      </div>
    </div>

    <div class="filter-group">
      <label for="status">Status</label>
      <select id="status" v-model="filters.status" @change="emitFilters">
        <option value="">All</option>
        <option value="Ongoing">Ongoing</option>
        <option value="Finished">Finished</option>
        <option value="Hiatus">Hiatus</option>
      </select>
    </div>

    <div class="filter-group">
      <label for="sort-by">Sort By</label>
      <select id="sort-by" v-model="filters.sortBy" @change="emitFilters">
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
      </select>
    </div>
  </aside>
</template>

<script setup>
import { reactive } from 'vue'

const allGenres = ['Action', 'Fantasy', 'Comedy', 'Seinen']
const emit = defineEmits(['filter-change'])

const filters = reactive({
  searchQuery: '',
  genres: [],
  status: '',
  sortBy: 'title-asc',
})

const toggleGenre = (genre) => {
  const index = filters.genres.indexOf(genre)
  if (index === -1) {
    filters.genres.push(genre)
  } else {
    filters.genres.splice(index, 1)
  }
  emitFilters()
}

const emitFilters = () => {
  emit('filter-change', filters)
}
</script>

<style scoped>
.manga-filter {
  width: 280px; /* Increased width slightly */
  flex-shrink: 0;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  height: fit-content;
}
h3 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}
.filter-group {
  margin-bottom: 1.5rem;
}
label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #333;
}
input[type='text'],
select {
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 1rem;
  box-sizing: border-box; /* This is the main fix */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
input[type='text']:focus,
select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
}
select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  padding-right: 2.5rem;
}
.genre-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.genre-tags button {
  padding: 6px 14px;
  border-radius: 15px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
  color: #555;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}
.genre-tags button:hover {
  background-color: #e9e9e9;
  border-color: #ccc;
}
.genre-tags button.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>

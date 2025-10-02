<template>
  <header class="app-header">
    <div class="header-content">
      <div class="header-left">
        <div class="logo">MangaHub</div>
        <nav class="navigation">
          <ul>
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#">Browse</a></li>
            <li><a href="#">My List</a></li>
          </ul>
        </nav>
      </div>
      <div class="header-right">
        <SearchInput
          :model-value="modelValue"
          @update:model-value="$emit('update:modelValue', $event)"
        />
        <div class="profile">
          <img src="https://i.pravatar.cc/40" alt="Profile" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import SearchInput from './SearchInput.vue';

defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<style scoped>
.app-header {
  padding: 1rem 0;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1680px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
  box-sizing: border-box;
}
.header-left, .header-right {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}
.logo {
  font-size: 1.75rem;
  font-weight: bold;
  color: #2c3e50;
}
.navigation ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}
.navigation a {
  text-decoration: none;
  color: #555;
  font-weight: 600;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  transition: color 0.3s, border-color 0.3s;
}
.navigation a:hover {
  color: #007bff;
}
.navigation a.active {
  color: #007bff;
  border-bottom-color: #007bff;
}
.profile img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
</style>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="search-input"
    placeholder="Search for a manga..."
  />
</template>

<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<style scoped>
.search-input {
  width: 100%;
  min-width: 250px;
  padding: 10px 18px;
  border-radius: 25px;
  border: 1px solid #ccc;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.search-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
}
</style>

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
        :manga="item"
      />
    </div>
  </section>
</template>

<script setup>
import MangaCard from './MangaCard.vue';
defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
});
</script>

<style scoped>
.manga-row{
  margin-bottom:2.5rem
}
.row-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:1rem;
  padding:0 10px
}
.row-title{
  font-size:1.75rem;
  color:#2c3e50;
  margin:0
}
.see-all-link{
  font-size:1rem;
  color:#007bff;
  text-decoration:none;
  font-weight:600;
  transition:color .2s ease
}
.see-all-link:hover{
  color:#0056b3
}
.row-content{
  display:flex;
  gap:20px;
  overflow-x:auto;
  padding:10px;
  scrollbar-width:none
}
.row-content::-webkit-scrollbar{
  display:none
}
</style>

<template>
  <div v-if="currentBanner" class="carousel-banner" :style="{ backgroundImage: `url(${currentBanner.imageUrl})` }">
    <div class="banner-overlay"></div>

    <div class="banner-content">
      <h2 class="banner-title">{{ currentBanner.title }}</h2>
      <p class="banner-description">{{ currentBanner.description }}</p>
      <a :href="currentBanner.link" class="banner-button">Read Now &rarr;</a>
    </div>

    <button @click="prevSlide" class="nav-arrow prev">&lt;</button>
    <button @click="nextSlide" class="nav-arrow next">&gt;</button>

    <div class="indicator-dots">
      <span
        v-for="(item, index) in items"
        :key="item.id"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
        class="dot"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);
let intervalId = null;

const currentBanner = computed(() => {
  return props.items.length > 0 ? props.items[currentIndex.value] : null;
});

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

onMounted(() => {
  intervalId = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.carousel-banner {
  position: relative;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  margin-bottom: 2.5rem;
  transition: background-image 0.5s ease-in-out;
}
.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%);
}
.banner-content {
  position: relative;
  z-index: 2;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;
  max-width: 50%;
}
.banner-title {
  font-size: 2.5rem;
  margin: 0;
  font-weight: bold;
}
.banner-description {
  font-size: 1.1rem;
  margin: 1rem 0;
  line-height: 1.6;
}
.banner-button {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  align-self: flex-start;
}
.banner-button:hover {
  background-color: #0056b3;
}
.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}
.nav-arrow:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
.nav-arrow.prev {
  left: 20px;
}
.nav-arrow.next {
  right: 20px;
}
.indicator-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  gap: 10px;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s;
}
.dot.active {
  background-color: #fff;
}
</style>

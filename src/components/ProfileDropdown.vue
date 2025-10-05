<template>
  <div class="profile-dropdown">
    <ul>
      <li class="divider"></li>
      <li>
        <a href="#" @click.prevent="handleLogout" class="logout">
          <span>Log Out</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useMangaStore } from '../stores/mangaStore';

const { logout } = useMangaStore();
const router = useRouter();

const handleLogout = () => {
  logout();
  router.push('/');
};
</script>

<style scoped>
/* ... existing styles ... */
</style>

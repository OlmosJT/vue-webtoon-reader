<template>
  <header class="app-header">
    <div class="header-content">
      <div class="header-left">
        <div class="logo">MangaHub</div>
        <nav class="navigation">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/browse">Browse</router-link></li>
            <li v-if="isAuthenticated"><router-link to="/my-list">My List</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="header-right">
        <SearchInput v-model="filters.searchQuery" />

        <div v-if="isAuthenticated" class="user-actions">
          <div class="notification-icon" @click="toggleNotifications">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            </svg>
            <span v-if="hasUnreadNotifications" class="notification-badge"></span>
            <Transition name="dropdown-fade">
              <NotificationsDropdown v-if="isNotificationsVisible" />
            </Transition>
          </div>

          <div class="profile" @click="toggleProfileDropdown">
            <img src="https://i.pravatar.cc/40" alt="Profile" />
            <Transition name="dropdown-fade">
              <ProfileDropdown v-if="isProfileDropdownVisible" />
            </Transition>
          </div>
        </div>

        <div v-else class="auth-buttons">
          <router-link to="/login" class="btn-login">Log In</router-link>
        </div>

      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import SearchInput from './SearchInput.vue';
import ProfileDropdown from './ProfileDropdown.vue';
import NotificationsDropdown from './NotificationsDropdown.vue';
import { useMangaStore } from '../stores/mangaStore.js';

const isProfileDropdownVisible = ref(false);
const isNotificationsVisible = ref(false);

const { filters, hasUnreadNotifications, markNotificationsAsRead, isAuthenticated } = useMangaStore();
const router = useRouter();
const route = useRoute();

const toggleProfileDropdown = () => {
  isProfileDropdownVisible.value = !isProfileDropdownVisible.value;
  if (isProfileDropdownVisible.value) {
    isNotificationsVisible.value = false; // Close other dropdown
  }
};

const toggleNotifications = () => {
  isNotificationsVisible.value = !isNotificationsVisible.value;
  if (isNotificationsVisible.value) {
    isProfileDropdownVisible.value = false; // Close other dropdown
    markNotificationsAsRead();
  }
};

watch(() => filters.searchQuery, (newValue) => {
  if (newValue && route.path !== '/browse') {
    router.push('/browse');
  }
});

// Close dropdowns when navigating to a new page
watch(() => route.path, () => {
  isProfileDropdownVisible.value = false;
  isNotificationsVisible.value = false;
});
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

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
.navigation .router-link-exact-active {
  color: #007bff;
  border-bottom-color: #007bff;
}
.user-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.notification-icon, .profile {
  position: relative;
  cursor: pointer;
}
.notification-icon svg {
  width: 24px;
  height: 24px;
  fill: #555;
}
.notification-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 10px;
  height: 10px;
  background-color: #007bff;
  border: 2px solid white;
  border-radius: 50%;
}
.profile img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: block;
}
.auth-buttons .btn-login {
  padding: 8px 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  transition: all 0.2s ease;
}
.auth-buttons .btn-login:hover {
  background-color: #f1f5f9;
  border-color: #aaa;
}
</style>

<template>
  <div class="notifications-dropdown">
    <div class="dropdown-header">
      <h3>Notifications</h3>
    </div>
    <ul>
      <li v-for="notification in recentNotifications" :key="notification.id" class="notification-item">
        <a href="#">
          <span v-if="notification.unread" class="unread-dot"></span>
          <div class="notification-content">
            <p class="notification-text">{{ notification.text }}</p>
            <p class="notification-time">{{ notification.time }}</p>
          </div>
        </a>
      </li>
    </ul>
    <div class="dropdown-footer">
      <a href="#">See all notifications</a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useMangaStore } from '../stores/mangaStore.js';

const { notifications } = useMangaStore();

const recentNotifications = computed(() => notifications.value.slice(0, 5));
</script>

<style scoped>
.notifications-dropdown {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 360px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border: 1px solid #eee;
  z-index: 100;
}

.dropdown-header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
}

.dropdown-header h3 {
  margin: 0;
  font-size: 1rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 400px;
  overflow-y: auto;
}

.notification-item a {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.notification-item a:hover {
  background-color: #f8f9fa;
}

.unread-dot {
  width: 8px;
  height: 8px;
  background-color: #007bff;
  border-radius: 50%;
  flex-shrink: 0;
}

.notification-content {
  color: #333;
}

.notification-text {
  margin: 0 0 0.25rem 0;
  line-height: 1.4;
}

.notification-time {
  margin: 0;
  font-size: 0.8rem;
  color: #888;
}

.dropdown-footer {
  padding: 0.75rem;
  text-align: center;
  border-top: 1px solid #f0f0f0;
  background-color: #fcfcfc;
}

.dropdown-footer a {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}
</style>

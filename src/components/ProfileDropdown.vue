<template>
  <div class="profile-dropdown">
    <div class="dropdown-header">
      <p class="username">olmosjt</p>
    </div>
    <ul>
      <li>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          <span>Profile</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.75-1.23-3.5-2.07V8H12z"/>
          </svg>
          <span>Recently Read</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <span>Subscriptions</span>
        </a>
      </li>
      <li class="divider"></li>
      <li>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
          </svg>
          <span>Notifications</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
          </svg>
          <span>Settings</span>
        </a>
      </li>
      <li class="divider"></li>
      <li>
        <a href="#" class="logout">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
          </svg>
          <span>Log Out</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style scoped>
.profile-dropdown {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  width: 220px;
  border: 1px solid #eee;
  z-index: 100;
}

.dropdown-header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
}

.username {
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
  color: #333;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0.5rem;
}

li a {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  color: #333;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

li a:hover {
  background-color: #f4f4f9;
}

li a svg {
  width: 20px;
  height: 20px;
  fill: #555;
  transition: fill 0.2s ease;
}

li a:hover svg {
  fill: #007bff;
}

li a.logout:hover {
  background-color: #fff1f1;
  color: #d93030;
}
li a.logout:hover svg {
  fill: #d93030;
}

.divider {
  height: 1px;
  background-color: #f0f0f0;
  margin: 0.5rem;
}
</style>

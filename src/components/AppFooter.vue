<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-left">
        <p>&copy; 2025 MangaHub. All Rights Reserved.</p>
      </div>
      <div class="footer-right">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script logic needed
</script>

<style scoped>
.app-footer {
  background-color: #ffffff; /* Changed to white */
  color: #666; /* Changed to a softer dark gray */
  padding: 2rem 0;
  margin-top: auto;
  border-top: 1px solid #e0e0e0; /* Added a subtle top border for separation */
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  /* These rules ensure alignment with the header and main content */
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 3rem;
}

.footer-left p {
  margin: 0;
  font-size: 0.9rem;
}

.footer-right {
  display: flex;
  gap: 1.5rem;
}

.footer-right a {
  color: #666; /* Changed to match the main text color */
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-right a:hover {
  color: #007bff; /* Changed to the primary blue for hover effect */
}
</style>

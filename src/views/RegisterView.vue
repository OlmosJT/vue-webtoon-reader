<template>
  <div class="auth-container">
    <div class="auth-card">
      <h1 class="title">Create an Account</h1>
      <p class="subtitle">Join MangaHub today!</p>

      <form @submit.prevent="handleRegister" class="auth-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="olmosjt" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="you@example.com" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="••••••••" required />
        </div>
        <button type="submit" class="btn-submit">Create Account</button>
      </form>

      <div class="divider">OR</div>

      <button class="btn-google">
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18"><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z" fill="#4285F4"></path><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z" fill="#34A853"></path><path d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z" fill="#FBBC05"></path><path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.8 4.8 0 0 1 4.48-3.3z" fill="#EA4335"></path></svg>
        <span>Sign Up with Google</span>
      </button>

      <p class="redirect-link">
        Already have an account? <router-link to="/login">Sign In</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useMangaStore } from '../stores/mangaStore';

const { login } = useMangaStore();
const router = useRouter();

const handleRegister = () => {
  login({ name: 'olmosjt', email: 'olmosjt@example.com' });
  router.push('/');
};
</script>

<style scoped>
/* Scoped styles are similar to LoginView, copied for consistency */
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
}
.auth-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}
.title {
  font-size: 1.75rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.subtitle {
  margin-top: 0;
  margin-bottom: 2rem;
  color: #555;
}
.auth-form {
  text-align: left;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.form-group input {
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  box-sizing: border-box;
}
.btn-submit {
  width: 100%;
  padding: 0.8rem;
  border: none;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
}
.divider {
  margin: 1.5rem 0;
  color: #aaa;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.divider::before, .divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #eee;
}
.btn-google {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  background-color: white;
  color: #333;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
.redirect-link {
  margin-top: 2rem;
  font-size: 0.9rem;
}
.redirect-link a {
  color: #007bff;
  font-weight: 600;
}
</style>

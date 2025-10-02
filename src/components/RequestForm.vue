<template>
  <aside class="request-form-widget">
    <h3>Request a Manga</h3>
    <p>Want to see a specific manga on MangaHub? Fill out the form below!</p>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="manga-title">Manga Title</label>
        <input type="text" id="manga-title" v-model="formData.title" required />
      </div>

      <div class="form-group">
        <label for="manga-author">Author (Optional)</label>
        <input type="text" id="manga-author" v-model="formData.author" />
      </div>

      <div class="form-group">
        <label for="manga-reason">Reason for Request</label>
        <textarea id="manga-reason" v-model="formData.reason" rows="3"></textarea>
      </div>

      <div class="form-group">
        <label>Include a small donation (Optional)</label>
        <div class="donation-options">
          <button type="button" @click="setDonation(5)" :class="{ active: formData.donation === 5 }">$5</button>
          <button type="button" @click="setDonation(10)" :class="{ active: formData.donation === 10 }">$10</button>
          <button type="button" @click="setDonation(20)" :class="{ active: formData.donation === 20 }">$20</button>
        </div>
      </div>

      <button type="submit" class="submit-button">Submit Request</button>
    </form>
  </aside>
</template>

<script setup>
import { reactive } from 'vue';

const formData = reactive({
  title: '',
  author: '',
  reason: '',
  donation: null,
});

const setDonation = (amount) => {
  formData.donation = formData.donation === amount ? null : amount;
};

const handleSubmit = () => {
  console.log('Form Submitted:', formData);
  alert(`Thank you for requesting "${formData.title}"!`);

  formData.title = '';
  formData.author = '';
  formData.reason = '';
  formData.donation = null;
};
</script>

<style scoped>
.request-form-widget {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  height: fit-content;
}

h3 {
  margin-top: 0;
  color: #2c3e50;
}

p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.25rem; /* Increased spacing */
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 12px; /* Increased padding */
  border: 1px solid #ccc;
  border-radius: 12px; /* Matched border-radius */
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Added focus style to match the main search bar */
input[type="text"]:focus,
textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
}

.donation-options {
  display: flex;
  gap: 10px;
}

.donation-options button {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #ffffff; /* Changed to white */
  border-radius: 12px; /* Matched border-radius */
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  color: #555;
}

.donation-options button.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.submit-button {
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #007bff; /* Changed to primary blue */
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 12px; /* Matched border-radius */
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-button:hover {
  background-color: #0056b3; /* Darker blue on hover */
}
</style>

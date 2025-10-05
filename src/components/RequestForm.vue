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
        <textarea id="manga-reason" v-model="formData.reason" rows="3" required></textarea>
      </div>

      <div class="form-group">
        <label>Donation Amount (Minimum 10,000 UZS)</label>
        <div class="donation-input-group">
          <button type="button" @click="decrementDonation" class="stepper-btn">-</button>
          <input type="number" v-model="formData.donation" :min="minDonation" :step="step" />
          <span class="currency">UZS</span>
          <button type="button" @click="incrementDonation" class="stepper-btn">+</button>
        </div>
      </div>

      <button type="submit" class="submit-button">Submit Request</button>
    </form>

    <CustomPopup
      :visible="isPopupVisible"
      :message="popupMessage"
      @close="closePopup"
    />
  </aside>
</template>

<script setup>
import { ref, reactive } from 'vue';
import CustomPopup from './CustomPopup.vue';

const minDonation = 10000;
const step = 5000;

const isPopupVisible = ref(false);
const popupMessage = ref('');

const formData = reactive({
  title: '',
  author: '',
  reason: '',
  donation: minDonation,
});

const decrementDonation = () => {
  const newValue = formData.donation - step;
  if (newValue >= minDonation) {
    formData.donation = newValue;
  }
};

const incrementDonation = () => {
  formData.donation += step;
};

const handleSubmit = () => {
  if (formData.donation < minDonation) {
    alert(`Donation must be at least ${minDonation.toLocaleString()} UZS.`);
    return;
  }

  const amount = formData.donation.toLocaleString();
  popupMessage.value = `Thank you for your donation of ${amount} UZS. Your request was sent to team management and they will answer to your request in a couple of days. You could see the notification page for new updates or answers from the team to your request.`;

  isPopupVisible.value = true;
};

const closePopup = () => {
  isPopupVisible.value = false;

  // Reset form
  formData.title = '';
  formData.author = '';
  formData.reason = '';
  formData.donation = minDonation;
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
  margin-bottom: 1.25rem;
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
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
input[type="text"]:focus,
textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
}

.donation-input-group {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 12px;
  overflow: hidden;
}
.donation-input-group input {
  width: 100%;
  border: none;
  outline: none;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  -moz-appearance: textfield; /* Firefox */
}
.donation-input-group input::-webkit-outer-spin-button,
.donation-input-group input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.currency {
  padding: 0 1rem;
  color: #888;
  font-weight: 600;
}
.stepper-btn {
  background-color: #f8f9fa;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 20px;
  transition: background-color 0.2s;
}
.stepper-btn:hover {
  background-color: #e9ecef;
}

.submit-button {
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 1.25rem;
}
.submit-button:hover {
  background-color: #0056b3;
}
</style>

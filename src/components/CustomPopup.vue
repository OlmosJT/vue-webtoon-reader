<template>
  <Transition name="popup-fade">
    <div v-if="visible" class="popup-backdrop" @click.self="$emit('close')">
      <div class="popup-content">
        <div class="popup-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="popup-title">Request Sent!</h3>
        <p class="popup-message">{{ message }}</p>
        <button @click="$emit('close')" class="close-button">OK</button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  visible: { type: Boolean, required: true },
  message: { type: String, default: '' },
});
defineEmits(['close']);
</script>

<style scoped>
.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.popup-fade-enter-from,
.popup-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.popup-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Darker backdrop */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it's above other content */
}
.popup-content {
  background: linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%); /* Soft gradient */
  padding: 2.5rem;
  border-radius: 16px; /* More rounded */
  box-shadow: 0 10px 40px rgba(0,0,0,0.25); /* Stronger shadow */
  width: 90%;
  max-width: 450px; /* Slightly smaller */
  text-align: center;
  border: 1px solid #e0e0e0;
}

.popup-icon {
  color: #28a745; /* Green for success */
  margin-bottom: 1.5rem;
  width: 60px;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
}

.popup-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
}

.popup-message {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 2rem;
}

.close-button {
  padding: 12px 40px; /* Larger button */
  border: none;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  font-size: 1.05rem;
  border-radius: 10px; /* More rounded button */
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}
.close-button:hover {
  background-color: #0056b3;
  transform: translateY(-1px);
}
</style>

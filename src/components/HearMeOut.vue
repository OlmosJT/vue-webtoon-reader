<template>
  <aside class="hear-me-out-widget">
    <h3>Hear Me Out!</h3>
    <p>Share one thought with the community for today.</p>

    <form @submit.prevent="handleSubmit" v-if="!hasPostedToday">
      <div class="form-group">
        <textarea
          v-model="newComment"
          placeholder="What's on your mind?"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" class="submit-button">Share</button>
    </form>
    <div v-else class="posted-message">
      <p>Thanks for sharing today! Come back tomorrow to post again.</p>
    </div>

    <hr class="divider" />

    <div class="comment-list">
      <div v-for="comment in comments" :key="comment.id" class="comment-item">
        <img :src="comment.avatarUrl" :alt="comment.user" class="avatar" />
        <div class="comment-content">
          <strong>{{ comment.user }}</strong>
          <p>{{ comment.text }}</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, reactive } from 'vue';

const newComment = ref('');
const hasPostedToday = ref(false); // Simulates the "post once a day" rule

// Sample data for existing comments
const comments = reactive([
  { id: 1, user: 'Kaido', avatarUrl: 'https://i.pravatar.cc/40?u=kaido', text: 'Just finished the latest chapter of Kingdom. The hype is real!' },
  { id: 2, user: 'Asuka', avatarUrl: 'https://i.pravatar.cc/40?u=asuka', text: 'Does anyone have recommendations for a good completed fantasy series? Something like Berserk but less dark.' },
  { id: 3, user: 'Shinji', avatarUrl: 'https://i.pravatar.cc/40?u=shinji', text: 'I wish more people appreciated Vagabond. The art is on another level.' },
]);

const handleSubmit = () => {
  if (!newComment.value.trim()) return;

  // Add the new comment to the top of the list
  comments.unshift({
    id: Date.now(),
    user: 'You', // In a real app, this would be the logged-in user
    avatarUrl: 'https://i.pravatar.cc/40?u=currentuser',
    text: newComment.value,
  });

  newComment.value = '';
  hasPostedToday.value = true;
};
</script>

<style scoped>
.hear-me-out-widget {
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
}
.form-group {
  margin-bottom: 0.75rem;
}
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 1rem;
  box-sizing: border-box;
  resize: vertical;
}
.submit-button {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
}
.posted-message {
  background-color: #e9f7ef;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
}
.divider {
  border: 0;
  border-top: 1px solid #e0e0e0;
  margin: 1.5rem 0;
}
.comment-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.comment-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.comment-content strong {
  display: block;
  margin-bottom: 0.25rem;
}
.comment-content p {
  margin: 0;
  line-height: 1.5;
}
</style>

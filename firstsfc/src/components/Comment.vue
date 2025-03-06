<template>
  <h1>Comments</h1>
  <div class="comment-section">
    <ul>
      <li v-for="comment in comments" :key="comment.id" class="comment-item">
        <strong>{{ comment.name }}:</strong> {{ comment.comment }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';

const comments = ref([]);

async function getComments() {
  const { data } = await supabase.from('comments').select();
  comments.value = data;
}

onMounted(() => {
  getComments();
});
</script>

<style>
#app > div {
  border: dashed black 1px;
  display: flex;
  flex-direction: row;
  margin: 1rem;
  padding: 1rem;
  background-color: lightsteelblue;
  font-family: 'Courier New', Courier, monospace;
}

.comment-section {
  background-color: white; /* Light gray background for the comment section */
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 5px; /* Optional: Rounded corners */
}

.comment-item {
  margin-bottom: 0.5rem; /* Space between comments */
  padding: 0.5rem;
  background-color: #e8e8e8; /* slightly darker grey for each comment */
  border-radius: 3px;
}

</style>
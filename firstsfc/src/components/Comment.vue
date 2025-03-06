<template>
  <h1>Comments</h1>
  <ul>
    <li v-for="comment in comments" :key="comment.id">{{ comment.name }} {{ comment.comment }}</li>
  </ul>
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

<style scoped>
.comments-section {
  background-color: lightsteelblue;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-family: 'Courier New', Courier, monospace;
}

ul {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

li {
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
}

li:last-child{
    border-bottom: none;
}

h1 {
  margin-bottom: 15px;
}
</style>
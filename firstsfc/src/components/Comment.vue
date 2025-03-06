<template>
  <h1>Comments</h1>
  <ul>
    <li v-for="comment in comments" :key="comment.id">{{ comment.name }} {{ comment.comment }}</li>
  </ul>
</template>

<script setup>
import { ref, onMounted, defineExpose } from 'vue';
import { supabase } from '../lib/supabaseClient';

const comments = ref([]);

async function getComments() {
  const { data } = await supabase.from('comments').select();
  comments.value = data;
}

onMounted(() => {
  getComments();
});

defineExpose({
  getComments
});
</script>


<style>
#app > div {
  border: solid black 1px;
  display: flex;
  flex-direction: row;
  margin: 1rem;
  padding: 1rem;
  background-color: #f0f0f0; /* A light gray background */
  font-family: 'Courier New', Courier, monospace;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
</style>

<template>
  <personal-profile/> <br>
  <Comment ref="commentSection"/>

  <CommentForm @commentSubmitted="reloadComments"/>

</template>

<script>
import Comment from './components/Comment.vue';
import CommentForm from './components/CommentForm.vue';
import { ref } from 'vue';

const commentSection = ref(null);

const reloadComments = () =>{
    commentSection.value.getComments();
}
</script>

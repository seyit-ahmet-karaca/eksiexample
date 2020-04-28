<template>
  <div class="main">
    <p v-for="comment in comments" :key="comment.id">
      <app-comment :comment="comment"> </app-comment>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Comment from "./Comment";

export default {
  components: {
    appComment: Comment
  },
  computed: {
    ...mapGetters(["comments"])
  }
};
</script>

<style scoped>
.main {
  padding-top: 70px;
  margin-left: 300px;
  z-index: -1;
  height: 1500px; /* Used in this example to enable scrolling */
}
</style>

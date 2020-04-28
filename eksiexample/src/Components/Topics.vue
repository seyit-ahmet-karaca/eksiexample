<template>
  <div class="sidenav">
    <dl
      @click="asyncGetCommentsByTopic(topic.id)"
      v-for="topic in topics"
      :key="topic.title"
    >
      <dd>{{ topic.title }}</dd>
    </dl>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["asyncGetTopic", "asyncGetCommentsByTopic"]),
    myFunc: function(val) {
      this.asyncGetTopic(val);
    }
  },
  created: function() {
    this.asyncGetTopic("elma");
  },
  computed: {
    ...mapGetters(["topics"])
  }
};
</script>

<style scoped>
.sidenav {
  margin-top: 100px;
  height: 90%;
  width: 270px;
  position: fixed;
  z-index: 1;
  top: 0;

  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 6px 6px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}
</style>

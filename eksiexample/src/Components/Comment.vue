<template>
  <div>
    <p id="content">{{ comment.content }}</p>
    <p id="authorName">{{ comment.authorName }}</p>
    <p id="negativeRate">{{ comment.negativeRate }}</p>
    <p id="possitiveRate">{{ comment.possitiveRate }}</p>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
#content {
  text-align: left;
}

#authorName {
  text-align: right;
}
#negativeRate {
  text-align: left;
}
#possitiveRate {
  text-align: left;
}
</style>

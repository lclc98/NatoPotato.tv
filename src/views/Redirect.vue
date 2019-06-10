<template>
  <div>
    Redirecting please wait or click <a :href="redirectURL">here</a>
  </div>
</template>
<script>
export default {
  name: 'redirect',
  props: ['redirectURL'],
  created() {
    window.location.href = this.redirectURL;
  },
};
</script>

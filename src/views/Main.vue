<template lang="pug">
  .app-main-view
    router-view
    app-footer
</template>

<script>
import AppFooter from "~/components/layouts/Footer";

export default {
  name: "app-main",
  components: {
    AppFooter
  }
};
</script>

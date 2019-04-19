<template lang="pug">
  .app-main
    router-view
</template>

<style lang="scss" src="~/assets/styles/reset.scss"></style>
<style lang="scss" src="~/assets/styles/core.scss"></style>
<style lang="scss" src="~/assets/styles/plugins/indicator.scss"></style>
<style lang="scss" src="~/assets/styles/plugins/toast.scss"></style>
<style lang="scss" src="~/assets/styles/plugins/scroller.scss"></style>
<style lang="scss" src="~/assets/styles/plugins/picker.scss"></style>

<script>
import "swiper/dist/css/swiper.css";

export default {
  name: "app"
};
</script>

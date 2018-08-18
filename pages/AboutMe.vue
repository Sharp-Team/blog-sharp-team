<template>
  <div>
    <navigation></navigation>
    <br>
    <br>
    <br>
    <image-team></image-team>
    <section class="container">
    </section>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import Navigation from '../components/Header/Navigation.vue'
  import MyFooter from '../components/Footer/Footer.vue'
  import ImageTeam from '../components/Header/ImageTeam.vue';

  export default {
    components: {
      Navigation,
      MyFooter,
      ImageTeam
    }
  }
</script>
<style scoped>
</style>


<template>
  <div>
    <navigation></navigation>
    <section class="container">
      <div>
        <posts/>
      </div>
    </section>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import Posts from '../components/Posts'
  import Navigation from '../components/Header/Navigation'
  import MyFooter from '../components/Footer/Footer.vue'

  export default {
    components: {
      Posts,
      Navigation,
      MyFooter
    }
  }
</script>

<style scoped>
</style>

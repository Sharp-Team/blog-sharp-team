<template>
  <div>
    <navigation></navigation>
    <br>
    <br>
    <div class="container">
      <div class="card myCard">
        <div class="myLogoBack hexagon">
        </div>
        <!-- <i class="fas fa-hashtag myLogo"></i> -->
        <i class="fab fa-vuejs myLogo"></i>
        <div class="card-image">
          <figure class="image is-5by3">
            <img :src="post.featured_image" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
            <h2 class="title is-2 is-primary myTitle">{{ post.title }}</h2>

          <hr class="mySplit">
          <div class="myDetail has-text-centered">
            <i class="fas fa-user myIcon"></i>
            <time class="myInfo">{{ author.login }}</time>/
            <i class="fas fa-file-signature myIcon"></i>
            <p class="myInfo">{{ author.first_name }} {{ author.last_name }}</p>/
            <i class="fas fa-comments myIcon"></i>
            <p class="myInfo"> No Comments</p>/
            <i class="far fa-calendar-alt myIcon"></i>
            <p class="myInfo">{{ post.modified }}</p>
          </div>
          <hr class="mySplit2">
          <div class="content myContent" v-html="post.content">
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import config from '../../api/config'
  import Navigation from '../../components/Header/Navigation'
  import MyFooter from '../../components/Footer/Footer.vue'
  export default {
    components: {
      Navigation,
      MyFooter
    },
    data() {
      return {
        author: [],
        post: []
      }
    },
    methods: {
      display() {
        return this.$axios.get(config.baseUrl + 'posts/' + this.$route.params.id)
          .then((result) => {
            console.log(config.baseUrl + 'posts/' + this.$route.params.id)
            this.post = result.data
            this.author = result.data.author
          })
      }
    },
    mounted() {
      this.display()
    },
  };

</script>

<style scoped>
  .img-center {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

</style>

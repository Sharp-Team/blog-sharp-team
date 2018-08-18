<template>
  <div class="card myCardPost">
    <div class="myLogoBack hexagon">
    </div>
    <!-- <i class="fas fa-hashtag myLogo"></i> -->
    <i class="fab fa-vuejs myLogo"></i>
    <div class="card-image">
      <figure class="image is-5by3">
        <img :src="urlImage" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <nuxt-link :to="'/post/' + id">
        <h2 class="title is-2 is-primary myTitle">{{ title }}</h2>
      </nuxt-link>
      <hr class="mySplit">
      <div class="content myContent" v-html="excerpt">
      </div>
      <div class="has-text-centered">
        <nuxt-link :to="'/post/' + id">
          <a class="button is-danger myButton">Read More</a>
        </nuxt-link>
      </div>
      <hr class="mySplit2">
      <div class="myDetail has-text-centered">
        <i class="fas fa-user myIconPost"></i>
        <time class="myInfo">{{ user }}</time>/
        <i class="fas fa-file-signature myIconPost"></i>
        <p class="myInfo">{{ firstName }} {{ lastName }}</p>/
        <i class="fas fa-comments myIconPost"></i>
        <p class="myInfo"> No Comments</p>/
        <i class="far fa-calendar-alt myIconPost"></i>
        <p class="myInfo">{{ time }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      urlImage: {
        type: String,
        required: true
      },
      urlAvata: {
        type: String,
        required: true
      },
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      user: {
        type: String,
        required: true
      },
      excerpt: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      }
    }
  }

</script>
<style scoped>
  
</style>

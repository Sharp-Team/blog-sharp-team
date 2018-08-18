<template>
  <div>
    <!-- <image-team></image-team> -->
    <div class="columns">
      <div class="column is-9">
        <div v-for="post in posts" :key="post.ID">
          <!-- <nuxt-link
          :to="'/post/' + post.ID"> -->
          <post-preview :id="post.ID" :title="post.title" :urlImage="post.featured_image" :urlAvata="post.author.avatar_URL" :firstName="post.author.first_name"
            :lastName="post.author.last_name" :user="post.author.login" :excerpt="post.excerpt" :time="post.modified">
          </post-preview>
          <!-- </nuxt-link> -->
          <br>
        </div>
      </div>
      <div class="column">
        <hoapn></hoapn>
        <ducpv></ducpv>
        <nhattq></nhattq>
        <cuongnx></cuongnx>
        <manhnt></manhnt>
        <hiepdq></hiepdq>
      </div>
    </div>
  </div>
</template>

<script>
  import PostPreview from '../components/Blog/PostPreview'
  import ImageTeam from '../components/Header/ImageTeam.vue'
  import hoapn from '../components/SliderBar/hoapn.vue'
  import ducpv from '../components/SliderBar/ducpv.vue'
  import nhattq from '../components/SliderBar/nhattq.vue'
  import cuongnx from '../components/SliderBar/cuongnx.vue'
  import manhnt from '../components/SliderBar/manhnt.vue'
  import hiepdq from '../components/SliderBar/hiepdq.vue'
  import api from '../api/index.js'
  import config from '../api/config'
  export default {
    components: {
      PostPreview,
      ImageTeam,
      hoapn,
      ducpv,
      nhattq,
      cuongnx,
      manhnt,
      hiepdq
    },
    // async asyncData({ app }) {
    //   const ip = await app.$axios.$get(config.baseUrl + 'posts')
    //   return { id: ip.data.found }
    // },
    data() {
      return {
        posts: []
      }
    },
    methods: {
      display() {
        return this.$axios.get(config.baseUrl + 'posts')
          .then((result) => {
            this.posts = result.data.posts
          })
      }
    },
    mounted() {
      this.display()
    },
  }
</script>
<style>
</style>

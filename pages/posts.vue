<template>
  <div>
    <!-- <image-team></image-team> -->
    <div class="columns">
      <div class="column is-9">
        <div v-for="post in posts" :key="post.ID">
          <!-- <nuxt-link
          :to="'/post/' + post.ID"> -->
            <post-preview
            :id="post.ID"
            :title="post.title"
            :urlImage="post.featured_image"
            :urlAvata="post.author.avatar_URL"
            :firstName="post.author.first_name"
            :lastName="post.author.last_name"
            :user="post.author.login"
            :excerpt="post.excerpt"
            :time="post.modified">
            </post-preview>
          <!-- </nuxt-link> -->
          <br>
        </div>
      </div>
      <div class="column">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ipsam dolore quam id tenetur sequi quasi consequatur, assumenda rerum at modi. Id sit possimus rem omnis in inventore iste a.
      </div>
    </div>
  </div>
</template>

<script>
  import PostPreview from '../components/Blog/PostPreview'
  import ImageTeam from '../components/Header/ImageTeam.vue';
  import api from '../api/index.js'
  import config from '../api/config'
  export default {
    components: {
      PostPreview,
      ImageTeam
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

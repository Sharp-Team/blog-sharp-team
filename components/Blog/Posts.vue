<template>
  <div>
    <div v-for="post in posts" :key="post.ID">
      <post-preview
      :title="post.title"
      :urlImage="post.featured_image"
      :urlAvata="post.author.avatar_URL"
      :firstName="post.author.first_name"
      :lastName="post.author.last_name"
      :user="post.author.login"
      :excerpt="post.excerpt"
      :time="post.modified"></post-preview>
    <br>
    </div>
  </div>
</template>

<script>
  import PostPreview from '../Blog/PostPreview'
  import api from '../../api/index.js'
  import config from '../../api/config'
  import axios from 'axios'
  export default {
    components: {
      PostPreview
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
        return axios.get(config.baseUrl + 'posts')
          .then((result) => {
            console.log(result.data.posts)
            this.posts = result.data.posts
          })
      }
    },
    mounted() {
      this.display()
    },
  }

</script>

<template>
    <div class="container">
        <br>
        <div class="has-text-centered ">
            <figure class="image is-48x48 img-center">
              <img class="img" :src="author.avatar_URL">
            </figure>
            <p class="title is-4">{{ author.first_name }} {{ author.last_name }}</p>
            <p class="subtitle is-6">{{ author.login }}</p>
            <h2 class="title is-2 is-primary">{{ post.title }}</h2>
        </div>
        <hr>
        <div class="columns">
        <div class="column is-2">
        </div>
        <div class="column">
            <p v-html="post.content"></p>
        </div>
        <div class="column is-2">
        </div>
        </div>
    </div>
</template>
<script>
  import config from '../api/config'
  export default {
    data () {
      return {
        author: [],
        post: []
      }
    },
    methods: {
      display () {
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

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
        <member
          background="bg-nhattq"
          image="nhattq.jpg"
          fullname="Tran Quang Nhat"
          birthday="20/09/1998"
          job="FullStack Developer"
          bio="Defeat is simply a signal to press onward"
          github="jetaimefrc"
          facebook="kingsmantran"
        />
        <member
          background="bg-hoapn"
          image="hoapn.jpg"
          fullname="Pham Ngoc Hoa"
          birthday="20/03/1998"
          job="FullStack Developer, Designer"
          bio="Behind every successful man there is a woman"
          github="thaycacac"
          facebook="thaycacac"
        />
        <member
          background="bg-cuongnx"
          image="cuongnx.jpg"
          fullname="Nguyen Xuan Cuong"
          birthday="11/10/1998"
          job="Backend Developer"
          bio="Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers"
          github="xuancuong98bn"
          facebook="xuancuong.380431"
        />
        <member
          background="bg-hiepdq"
          image="hiepdq.jpg"
          fullname="Do Quang Hiep"
          birthday="28/02/1997"
          job="FullStack Developer"
          bio="Don’t cry because it’s over, smile because it happened"
          github="bacodekiller"
          facebook="bacodekiller"
        />
        <member
          background="bg-ducpv"
          image="ducpv.jpg"
          fullname="Phan Van Duc"
          birthday="21/10/1998"
          job="Backend Developer"
          bio="You only live once, but if you do it right, once is enough"
          github="phanduc0908"
          facebook="profile.php?id=100009850397613"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import PostPreview from '../components/Blog/PostPreview'
  import ImageTeam from '../components/Header/ImageTeam.vue'
  import Member from '../components/SliderBar';
  import api from '../api/index.js'
  import config from '../api/config'
  export default {
    components: {
      PostPreview,
      ImageTeam,
      Member,
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

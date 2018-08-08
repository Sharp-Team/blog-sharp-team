<template>
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by1">
          <img :src="urlImage" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <a href="">
          <h2 class="title is-2 is-primary">{{ title }}</h2>
        </a>
        <hr>
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="urlAvata" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ firstName }} {{ lastName }}</p>
            <p class="subtitle is-6">@{{ user }}</p>
          </div>
        </div>

        <div class="content" v-html="excerpt">
          <br>
          <time datetime="2016-1-1">{{ time }}</time>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      title: {
        type:String,
        required: true
      },
      urlImage: {
        type:String,
        required: true
      },
      urlAvata: {
        type:String,
        required: true
      },
      firstName: {
        type:String,
        required: true
      },
      lastName: {
        type:String,
        required: true
      },
      user: {
        type:String,
        required: true
      },
      excerpt: {
        type:String,
        required: true
      },
      time: {
        type:String,
        required: true
      }
    }
  }
</script>

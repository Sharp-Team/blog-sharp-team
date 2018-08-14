<template>
  <div class="card myCard">
    <div class="myLogoBack hexagon">
    </div>
    <i class="fas fa-hashtag myLogo"></i>
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
        <i class="fas fa-user myIcon"></i>
        <time class="myInfo">{{ user }}</time>/
        <i class="fas fa-file-signature myIcon"></i>
        <p class="myInfo">{{ firstName }} {{ lastName }}</p>/
        <i class="fas fa-comments myIcon"></i>
        <p class="myInfo"> No Comments</p>/
        <i class="far fa-calendar-alt myIcon"></i>
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
  .myCard {
    margin: 50px 0px 0px 0px;
    border-top: 4px solid #eb005d;
    position: relative;
  }
  .myLogoBack {
    position: absolute;
    left: 50%;
    margin-left: -50px;
    margin-top: -22px;
  }
  .myLogo {
    position: absolute;
    left: 51.5%;
    margin-left: -50px;
    margin-top: -22px;
    z-index: 3;
    font-size: 35px;
    color: white;
  }
  .myTitle {
    font-family: 'Lato', sans-serif;
    color: #515e6c;
    font-weight: 400;
    text-align: center;
    font-size: 31px;
  }
  .myTitle:hover {
    color: #eb005d;
  }

  .mySplit {
    /* background: #e6e4e4; */
    background: linear-gradient(to right, #e6e4e4 30%, red 50%, #e6e4e4 70%);
    height: 1px;
  }

  .mySplit2 {
    background: #e6e4e4;
    height: 1px;
  }

  .myContent {
    color: #99a1a9;
    font-size: 16px;
    line-height: 20px;
    /* font-family: 'Lato', sans-serif; */
  }

  .myButton {
    font-family: 'Lato', sans-serif;
    border-radius: 25px;
    font-size: 14px;
    padding: 0px 30px;
    min-width: 90px;
    height: 40px;
    line-height: 40px;
  }

  .myIcon {
    color: #eb005d;
    padding: 0px 0px 0px 10px;
  }

  .myInfo {
    display: inline;
    padding: 0px 10px;
  }

  .myDetail {
    color: #99a1a9;
    font-size: 14px;
  }
  .hexagon {
    width: 60px; 
    height: 34.64px;
    background-color: #eb005d;
    z-index: 2;
    box-shadow: 0 0 20px rgba(0,0,0,0.6);
  }

  .hexagon:before,
  .hexagon:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }

  .hexagon:before {
    bottom: 100%;
    border-bottom: 17.32px solid #eb005d;
  }

  .hexagon:after {
    top: 100%;
    width: 0;
    border-top: 17.32px solid #eb005d;
  }
</style>

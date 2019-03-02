<template>
  <div class="my-team">
    <div class="card my-card">
      <article
        :class="background"
        class="notification has-text-centered">
        <br>
        <br>
        <p class="subtitle"></p>
        <div class="content">
        </div>
      </article>
    </div>
    <div class="card my-card">
      <div class="my-image">
        <img
          :src="'/member/' + image"
          alt=""
          class="clip-hexagon image-specification">
      </div>
      <div class="my-image-back">
        <img
          src="/image/white.gif"
          alt=""
          class="clip-hexagon back-image-member">
      </div>
      <br>
      <br>
      <div class="card-content my-subtitle has-text-centered">
        <p>{{ fullname }}</p>
        <p>{{ birthday }}</p>
        <p>{{ job }}</p>
        <br>
        <p>Bio: {{ bio }}</p>
      </div>
      <hr class="split">
      <div class="has-text-centered is-flex wrap-link">
        <div class="my-icon">
          <a :href="'https://github.com/' + github">
            <i class="fab fa-github-square icon-github"></i>
          </a>
        </div>
        <div class="my-icon">
          <a :href="'http://facebook.com/' + facebook">
            <i class="fab fa-facebook icon-facebook"></i>
          </a>
        </div>
        <div class="my-icon">
          <a href="#">
            <i class="fas fa-envelope-square icon-email"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: String,
    image: String,
    fullname: String,
    birthday: String,
    job: String,
    bio: String,
    github: String,
    facebook: String
  }
}
</script>

<style>
.my-team {
  margin-top: 50px;
  margin-bottom: 15px;
}

.my-card {
  position: relative;
}

.my-image {
  position: absolute;
  width: 100%;
  top: -80px;
  z-index: 2;
  align-items: center;
  text-align: center;
}

.my-image-back {
  position: absolute;
  width: 100%;
  top: -92px;
  z-index: 1;
  align-items: center;
  text-align: center;
}

.back-image-member {
  width: 185px;
}

.my-subtitle {
  font-size: 13px;
  color: #464646;
  margin-top: 15px;
  padding-bottom: 0;
}

.image-specification {
  width: 150px;
}

.clip-hexagon {
  -webkit-clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
}

.my-break {
  height: 1px;
}

.my-icon {
  font-size: 25px;
  padding: 0;
}

.split {
  margin: 15px 0;
}

.icon-github {
  color: black;
}

.icon-facebook {
  color: #4267b2;
  margin: 0  10px;
}

.icon-email {
  color: firebrick;
}

.wrap-link {
  justify-content: center;
}

.bg-hoapn {
  background: #ff0099;
  background: -webkit-linear-gradient(to bottom, #ff0099, #493240);
  background: linear-gradient(to bottom, #ff0099, #493240);
}

.bg-nhattq {
  background: #23d160;
  background: -webkit-linear-gradient(to bottom, #23d160, #324932);
  background: linear-gradient(to bottom, #23d160, #324932);
}

.bg-cuongnx {
  background: #167df0;
  background: -webkit-linear-gradient(to bottom, #167df0, #343249);
  background: linear-gradient(to bottom, #167df0, #343249);
}

.bg-hiepdq {
  background: #ffdd57;
  background: -webkit-linear-gradient(to bottom, #ffdd57, #494532);
  background: linear-gradient(to bottom, #ffdd57, #494532);
}

.bg-ducpv {
  background: #23d1d1;
  background: -webkit-linear-gradient(to bottom, #23d1d1, #324949);
  background: linear-gradient(to bottom, #23d1d1, #324949);
}
</style>

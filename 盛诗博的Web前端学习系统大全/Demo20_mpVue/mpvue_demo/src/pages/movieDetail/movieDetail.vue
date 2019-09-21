<template>
  <div class="movieDetailContainer">
    <img class="movie_img" :src="movieDetail.images.large"/>
    <p class="movie_name">{{movieDetail.original_title}}</p>
    <div class="movie_detail">
      <span>评分：{{movieDetail.rating.average}}</span>
      <span>导演：{{movieDetail.directors[0].name}}</span>
      <span>主演：{{movieDetail.casts[0].name}} {{movieDetail.casts[1].name}} {{movieDetail.casts[2].name}}</span>
    </div>
    <button>我要观影</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      movieDetail: {}
    }
  },
  computed: {
    ...mapState(['moviesArr'])
  },
  beforeMount() {
    console.log(this.moviesArr, 123123)
     this.movieDetail = this.moviesArr[this.$mp.query.index]
     console.log(this.movieDetail, this.moviesArr)
  }
}
</script>

<style>
  .movieDetailContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .movie_img{
    width: 70%;
    height: 700rpx;
    margin: 20rpx 0rpx;
  }
  .movie_name{
    font-size: 40rpx;
    font-weight: bold;
  }
  .movie_detail{
    display: flex;
    flex-direction: column;
    font-size: 32rpx;
  }
  button{
    width: 70%;
    height: 80rpx;
    line-height: 80rpx;
    background: green;
    color: #FFF;
    margin-top: 50rpx;
  }
</style>
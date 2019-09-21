<template>
  <div>
    <div @tap="toMoviesDetail(index)" v-for="(movie, index) in moviesArr" :key="index" class="moviesContainer">
      <img class="movies_img" :src="movie.images.large"/>
      <div class="movies_info">
        <p class="movies_name">{{movie.original_title}}</p>
        <p class="movies_year">年份：{{movie.year}}</p>
        <p class="movies_dir">导演：{{movie.directors[0].name}}</p>
      </div>
      <p class="movies_rating">{{movie.rating.average}}</p>
    </div>
  </div>
</template>

<script>
const MOVIE_URL = "http://t.yushu.im/v2/movie/top250"
export default {
  data () {
    return {
      moviesArr: []
    }
  },
  beforeMount() {
    this.$fly.get(MOVIE_URL).then(response => {
      console.log(response)
      this.moviesArr = response.data.subjects
      this.$store.dispatch('getMoviesArr', this.moviesArr)
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    toMoviesDetail (index) {
      wx.navigateTo({
        url: "/pages/movieDetail/main?index=" + index
      })
    } 
  }
}
</script>

<style>
  .moviesContainer {display: flex;padding: 10rpx;border-bottom: 1rpx solid #eee;}
  .movies_img {width: 128rpx; height: 128rpx;margin-right: 20rpx;}
  .movies_info {width: 70%;}
  .movies_name {font-size: 32rpx;color: #333;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
  .movies_year {font-size: 28rpx;color: #999;margin: 5rpx 0;}
  .movies_dir {font-size: 30rpx;color: #666;}
  .movies_rating {font-size: 36rpx;font-weight: bold;color: red;}
</style>
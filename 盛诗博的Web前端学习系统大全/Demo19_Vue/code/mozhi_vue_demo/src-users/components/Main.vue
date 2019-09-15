<template>
  <div>
    <h2 v-if="firstView">输入用户名搜索</h2>
    <h2 v-if="loading">loading...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px;" alt='user'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import axios from 'axios'
export default { 
  data () {
    return {
      firstView: true,
      loading: false,
      users: null,
      errorMsg: ''
    }
  },
  mounted () {
    // 不是在这里发送ajax请求，是在点击search后
    // 订阅搜索的消息
    PubSub.subscribe('search', (msg, searchName) => { // 说明需要发ajax请求进行搜索
      const url = `https://api.github.com/search/users?q=${searchName}`
      // 更新状态
      this.firstView = false
      this.loading = true
      this.users = null
      this.errorMsg = ''
      axios.get(url).then(response => {
        const result = response.data
        const users = result.items.map(item => ({
          url: item.html_url,
          avatar_url: item.avatar_url,
          name: item.login
        }))
        // 成功更新状态（成功）
        this.loading = false
        this.users = users
      }).catch(error => {
        // 失败更新状态
        this.loading = false
        this.errorMsg = '请求失败'
      })
    })
  }
}
</script>

<style>
  .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>

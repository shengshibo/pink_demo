<template>
  <div>
    <input type="text" placeholder="enter the name you search" v-model="searchName"/>
    <button @click="search">Search</button>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  data () {
    return {
      searchName: ''
    }
  },
  methods: {
    search () {
      const searchName = this.searchName.trim()
      // 发布搜索消息
      if (searchName) {
        PubSub.publish('search', searchName)
      }
    }
  }
}
</script>

<style>
  
</style>
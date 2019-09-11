<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComments='addComments'/>
      <List :comments="comments" :deleteItem="deleteItem"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'
  export default {
    data () {
      return {
        comments: [
          {name: 'mozhi', content: 'Vue 很好学'},
          {name: 'yangyang', content: 'Vue 太简单了'},
          {name: 'wanghenan', content: '很好'}
        ]
      }
    },
    methods: {
      // 添加评论
      addComments (comment) {
        this.comments.unshift(comment)
      },
      // 删除指定下标的评论
      deleteItem (index) {
        this.comments.splice(index, 1)
      }
    },
    components: {
      Add,
      List
    }
  }
</script>

<style>
  
</style>

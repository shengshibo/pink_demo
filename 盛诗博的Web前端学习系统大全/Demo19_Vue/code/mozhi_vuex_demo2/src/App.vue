<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader/>
      <TodoList/>
      <TodoFooter/>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

  export default {
    // watch: { // 监视
    //   todos: {
    //     deep: true, // 深度监视
    //     handler: function (value) {
    //       // 将todos最新的值的json数据，保存到localstorage
    //       localStorage.setItem('todos_key', JSON.stringify(value))
    //     }
    //   }
    // },
    mounted () {
      this.$store.dispatch('reqTodos')
    },
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
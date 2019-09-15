<template>
  <div className="container">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <Search/>
    </section>    
    <UsersMain/>
  </div>
</template>

<script>
import Search from './components/Search'
import Main from './components/Main'
export default {
  components: {
    Search,
    UsersMain: Main
  }
}
</script>

<style>
  
</style>
<template>
  <div>
    <p>click {{$store.state.count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        // count: 0
      }
    },
    computed: {
      // evenOrOdd () {
      //   return this.$store.getters.evenOrOdd
      // }
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd'])
    },
    methods: {
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    }
    // methods: {
    //   increment () {
    //     this.$store.dispatch('increment')
    //   },
    //   decrement () {
    //     this.$store.dispatch('decrement')
    //   },
    //   incrementIfOdd () {
    //     this.$store.dispatch('incrementIfOdd')
    //   },
    //   incrementAsync () {
    //     this.$store.dispatch('incrementAsync')
    //   }
    // }
  }
</script>

<style>

</style>

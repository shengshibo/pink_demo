<template>
  <div>
    <p>ID: {{$route.params.id}}</p>
    <ul>
      <li>id: {{messageDetail.id}}</li>
      <li>title: {{messageDetail.title}}</li>
      <li>content: {{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messageDetail: {}
    }
  },
  mounted () {
    setTimeout(() => {
      const allMessageDetails = [
        {
          id: 1,
          title: 'message001',
          content: 'messageContent1'
        },
        {
          id: 2,
          title: 'message002',
          content: 'messageContent2'
        },
        {
          id: 3,
          title: 'message003',
          content: 'messageContent3'
        },
        {
          id: 4,
          title: 'message004',
          content: 'messageContent4'
        }
      ]
      this.allMessageDetails = allMessageDetails
      const id = this.$route.params.id * 1
      this.messageDetail = this.allMessageDetails.find(detail => detail.id === id)
    }, 1000)
  },
  watch: {
    $route: function (value) { // 路由路径（param）发生变化
      const id = value.params.id * 1
      this.messageDetail = this.allMessageDetails.find(detail => detail.id === id)
    }
  }
}
</script>

<style>
  
</style>
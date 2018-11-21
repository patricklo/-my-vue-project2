<template>
  <div class="vue_det">
    <h1>{{site}}</h1>
    <h1>{{url}}</h1>
    <h1>{{details()}}</h1>
  </div>
</template>

<script>
export default {
  name: 'vue_det',
  data () {
    return {
      site: 'VUE tutorial',
      url: 'www.pinpoint.com',
      alexa: '10000'
    }
  },
  methods: {
    details: function () {
      return this.site + " it's Magic!"
    }
  }
}
</script>

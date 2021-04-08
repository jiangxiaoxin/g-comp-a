<template>
  <div class="example-view">
    <GCompA :msg="msg" @click-btn="eventhandler"/>
    <ul>
      <li v-for="str in list" :key="str">{{ str }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GCompA from '@/component/GCompA.vue'

export default defineComponent({
  name: 'App',
  components: {
    GCompA
  },
  data() {
    return {
      msg: '从父组件里传入的msg',
      list: []
    }
  },
  methods: {
    eventhandler(str: string) {
      //@ts-ignore
      this.list.push(str)
    }
  }
})
</script>

<style>
</style>
<template>
  <div class="g-comp-a">
      <p>{{ msg }}</p>
      <button @click="dispatchEvent">dispatch</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'GCompA',
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    emits: ['click-btn'],
    methods: {
        dispatchEvent() {
            this.$emit('click-btn', new Date())
        }
    }
})
</script>

<style>
.g-comp-a {
    color: red;
    text-align: center;
}
</style>
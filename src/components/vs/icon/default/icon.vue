<script lang="ts">
import { defineComponent } from 'vue'
import { IconContract } from '../contract'
import { useIcon } from '../setup'

export default defineComponent({
  name: 'VsIcon',
  extends: IconContract,
  setup(props) {
    return useIcon(props)
  },
})
</script>

<template>
  <span
    class="vs-span"
    :style="styleIcon"
    v-html="content"
  />
</template>

<style lang="scss" scoped>
.vs-span {
  display: flex;
}
</style>
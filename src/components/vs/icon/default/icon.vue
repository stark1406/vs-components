<script lang="ts">
import { defineComponent } from 'vue'
import { IconContract } from '../contract'
import { useIcon } from '../setup'

export default defineComponent({
  name: 'VsIcon',
  extends: IconContract,
  setup(props, ctx) {
    return useIcon(props, ctx)
  },
})
</script>

<template>
  <span
    :style="`display: flex; height: ${height}; width: ${width};`"
    v-html="content"
  />
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import { IconContract } from '../contract'
import { useIcon } from '../setup'
import type { IconProps } from '../types'

export default defineComponent({
  name: 'VsIcon',
  extends: IconContract,
  setup(props: IconProps) {
    return useIcon(props)
  },
})
</script>

<template>
  <span
    :class="['vs-icon', `vs-icon--${size}`, isColor ? `vs-icon_${color}` : '']"
    :style="styleIcon"
    v-html="content"
  />
</template>

<style lang="scss" scoped src="../styles.scss"></style>

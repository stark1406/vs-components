<script lang="ts">
import { defineComponent } from 'vue'
import { PopperContract } from '../contract'
import { usePopper } from '../setup'
import type { PopperProps } from '../types'

export default defineComponent({
  name: 'VsPopper',
  extends: PopperContract,
  setup(props: PopperProps, ctx) {
    return usePopper(props, ctx)
  },
})
</script>

<template>
  <div
    v-show="isVisible"
    ref="popperRef"
    class="vs-popper"
    :style="{
      transform,
      width,
    }"
  >
    <Transition>
      <slot v-if="isVisible" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped src="../styles.scss"></style>

<script lang="ts">
import { defineComponent } from 'vue'
import { PopperContract } from '../contract'
import { usePopper } from '../setup'

export default defineComponent({
  name: 'VsPopper',
  extends: PopperContract,
  setup(props, ctx) {
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
      ...popperStyle,
      width: width
    }"
  >
    <Transition>
      <slot v-if="isVisible" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.vs-popper {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 7px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
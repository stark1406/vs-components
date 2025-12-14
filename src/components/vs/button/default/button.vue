<script lang="ts">
import { defineComponent } from 'vue'
import { useButton } from '../setup'
import { VsIcon } from '@vs/icon'
import { ButtonContract } from '../contract'
import { ButtonProps } from '../types'

export default defineComponent({
  name: 'VsButton',
  components: {
    VsIcon,
  },
  extends: ButtonContract,
  setup(props: ButtonProps, ctx) {
    return useButton(props, ctx)
  },
})
</script>

<template>
  <button
    :class="[
      'vs-btn',
      `vs-btn--${color}`,
      `vs-btn--${size}`,
      {
        'vs-btn--rounded': isRounded,
        'vs-btn--outlined': isOutlined,
        'vs-btn--icon': isIcon,
      },
    ]"
    :disabled="isDisabled"
    :type
    @click="onClick"
  >
    <vs-icon v-if="!isRightIcon && nameIcon != ''" :name="nameIcon" :size />
    <span v-if="!isIcon && label != ''">{{ label }}</span>
    <vs-icon v-if="isRightIcon && nameIcon != ''" :name="nameIcon" :size />
  </button>
</template>

<style lang="scss" scoped src="../styles.scss"></style>

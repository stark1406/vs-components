<script lang="ts" setup>
import { VsButton } from '@vs/button'
import type { Event } from '../types'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'

defineProps({
  header: {
    type: String,
    default: '',
  },
})

const ATTRIBUTES: Event[] = [
  {
    label: 'Click',
    '@click': '...',
  },
] as const

const clickBtn = () => {
  alert('Welcome VS-components')
}
</script>

<template>
  <h2>{{ header }}</h2>
  <widget-code-view component="button" :attributes="ATTRIBUTES">
    <div class="content">
      <vs-button label="Click" @click="clickBtn" />
    </div>
  </widget-code-view>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
}
</style>

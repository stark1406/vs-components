<script lang="ts" setup>
import { VsIcon } from '@vs/icon'
import { ICONS } from '../data'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { Default } from '../types'

defineProps({
  header: {
    type: String,
    default: '',
  },
})

const ATTRIBUTES: Default[] = [
  {
    name: 'heart',
    width: '2rem',
    height: '2rem',
  },
] as const
</script>

<template>
  <h2>{{ header }}</h2>
  <widget-code-view component="icon" :attributes="ATTRIBUTES">
    <div class="content">
      <vs-icon :name="ICONS[0].name" :height="ATTRIBUTES[0].height" :width="ATTRIBUTES[0].width" />
    </div>
  </widget-code-view>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
}
</style>

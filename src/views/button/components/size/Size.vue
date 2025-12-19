<script lang="ts" setup>
import { VsButton } from '@vs/button'
import type { Size } from '../types'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'

defineProps({
  header: {
    type: String,
    default: '',
  },
})

const ATTRIBUTES: Size[] = [
  {
    label: 'Small',
    size: 'small',
  },
  {
    label: 'Medium',
    size: 'medium',
  },
  {
    label: 'Large',
    size: 'large',
  },
] as const
</script>

<template>
  <h2>{{ header }}</h2>
  <widget-code-view component="button" :attributes="ATTRIBUTES">
    <div class="content">
      <div v-for="(items, index) in ATTRIBUTES" :key="index">
        <vs-button :label="items.label" :size="items.size" />
      </div>
    </div>
  </widget-code-view>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-2);
}
</style>

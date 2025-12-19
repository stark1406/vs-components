<script lang="ts" setup>
import { VsButton } from '@vs/button'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { Colors } from '../types'

defineProps({
  header: {
    type: String,
    default: '',
  },
})

const ATTRIBUTES: Colors[] = [
  {
    label: 'Primary',
    color: 'primary',
  },
  {
    label: 'Secondary',
    color: 'secondary',
  },
  {
    label: 'Success',
    color: 'success',
  },
  {
    label: 'Info',
    color: 'info',
  },
  {
    label: 'Warning',
    color: 'warning',
  },
  {
    label: 'Danger',
    color: 'danger',
  },
] as const
</script>

<template>
  <h2>{{ header }}</h2>
  <widget-code-view component="button" :attributes="ATTRIBUTES">
    <div class="content">
      <div v-for="(items, index) in ATTRIBUTES" :key="index">
        <vs-button :label="items.label" :color="items.color" />
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

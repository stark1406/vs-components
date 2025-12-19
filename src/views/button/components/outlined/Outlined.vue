<script lang="ts" setup>
import { VsButton } from '@vs/button'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { Outlined } from '../types'

defineProps({
  header: {
    type: String,
    default: '',
  },
})

const ATTRIBUTES: Outlined[] = [
  {
    label: 'Primary',
    color: 'primary',
    'is-outlined': true,
  },
  {
    label: 'Secondary',
    color: 'secondary',
    'is-outlined': true,
  },
  {
    label: 'Success',
    color: 'success',
    'is-outlined': true,
  },
  {
    label: 'Info',
    color: 'info',
    'is-outlined': true,
  },
  {
    label: 'Warning',
    color: 'warning',
    'is-outlined': true,
  },
  {
    label: 'Danger',
    color: 'danger',
    'is-outlined': true,
  },
] as const
</script>

<template>
  <h2>{{ header }}</h2>
  <widget-code-view component="button" :attributes="ATTRIBUTES">
    <div class="content">
      <div v-for="(items, index) in ATTRIBUTES" :key="index">
        <vs-button :label="items.label" :color="items.color" :is-outlined="items['is-outlined']" />
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

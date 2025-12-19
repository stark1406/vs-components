<script lang="ts" setup>
import { VsButton } from '@vs/button'
import type { Rounded } from '../types'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'

defineProps({
  header: {
    type: String,
    default: '',
  },
})

const ATTRIBUTES: Rounded[] = [
  {
    label: 'Primary',
    color: 'primary',
    'is-rounded': true,
  },
  {
    label: 'Secondary',
    color: 'secondary',
    'is-rounded': true,
  },
  {
    label: 'Success',
    color: 'success',
    'is-rounded': true,
  },
  {
    label: 'Info',
    color: 'info',
    'is-rounded': true,
  },
  {
    label: 'Warning',
    color: 'warning',
    'is-rounded': true,
  },
  {
    label: 'Danger',
    color: 'danger',
    'is-rounded': true,
  },
] as const
</script>

<template>
  <h2>{{ header }}</h2>
  <widget-code-view component="button" :attributes="ATTRIBUTES">
    <div class="content">
      <div v-for="(items, index) in ATTRIBUTES" :key="index">
        <vs-button :label="items.label" :color="items.color" :is-rounded="items['is-rounded']" />
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

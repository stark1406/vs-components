<script lang="ts" setup>
import { VsButton } from '@vs/button'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { Icon } from '../types'

defineProps({
  header: {
    type: String,
    default: '',
  },
})

const ATTRIBUTES: Icon[] = [
  {
    color: 'primary',
    'name-icon': 'heart',
    'is-outlined': true,
  },
  {
    color: 'secondary',
    'name-icon': 'hand',
  },
  {
    color: 'success',
    'name-icon': 'address-book',
    'is-outlined': true,
  },
  {
    color: 'info',
    'name-icon': 'credit-card',
  },
  {
    color: 'warning',
    'name-icon': 'lemon',
    'is-outlined': true,
  },
  {
    color: 'danger',
    'name-icon': 'hourglass',
  },
] as const
</script>

<template>
  <h2>{{ header }}</h2>
  <widget-code-view component="button" :attributes="ATTRIBUTES">
    <div class="content">
      <div v-for="(items, index) in ATTRIBUTES" :key="index">
        <vs-button
          :nameIcon="items['name-icon']"
          :color="items.color"
          :is-outlined="items['is-outlined']"
          is-icon
          is-rounded
          size="medium"
        />
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

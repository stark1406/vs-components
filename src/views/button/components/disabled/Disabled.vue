<script lang="ts" setup>
import { VsButton } from '@vs/button'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { Disabled } from '../types'

defineProps({
  header: {
    type: String,
    default: '',
  },
})

const ATTRIBUTES: Disabled[] = [
  {
    label: 'Submit',
    'is-disabled': true,
  },
] as const
</script>

<template>
  <h2>{{ header }}</h2>
  <widget-code-view component="button" :attributes="ATTRIBUTES">
    <div class="content">
      <div v-for="(items, index) in ATTRIBUTES" :key="index">
        <vs-button :label="items.label" :is-disabled="items['is-disabled']" />
      </div>
    </div>
  </widget-code-view>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
}
</style>

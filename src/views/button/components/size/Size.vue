<script lang="ts" setup>
import { VsButton } from '@vs/button'
import type { Size } from '../types'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'

const attributes: Size[] = [
  {
    label: 'Normal',
  },
  {
    label: 'Large',
    size: 'large'
  }
]
</script>

<template>
  <h2>
    Size
  </h2>
  <widget-code-view
    component="button"
    :attributes="attributes"
  >
    <div class="content">
      <div
        v-for="(items, ind) in attributes"
        :key="ind"
        class="item"
      >
        <vs-button
          :label="items.label"
          :size="items.size"
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
  min-width: 100%;
}

.item {
  margin: 10px;
}
</style>
<script lang="ts" setup>
import { VsButton } from '@vs/button'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { Colors } from '../types'

const attributes: Colors[] = [
  {
    label: 'Primary',
    color: 'primary'
  },
  {
    label: 'Secondary',
    color: 'secondary'
  },
  {
    label: 'Success',
    color: 'success'
  },
  {
    label: 'Info',
    color: 'info'
  },
  {
    label: 'Warning',
    color: 'warning'
  },
  {
    label: 'Danger',
    color: 'danger'
  }
]
</script>

<template>
  <h2>
    Colors
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
          :color="items.color"
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
<script lang="ts" setup>
import { VsButton } from '@vs/button'
import type { Rounded } from '../types'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'

const attributes: Rounded[] = [
  {
    label: 'Primary',
    color: 'primary',
    'is-rounded': true
  },
  {
    label: 'Secondary',
    color: 'secondary',
    'is-rounded': true
  },
  {
    label: 'Success',
    color: 'success',
    'is-rounded': true
  },
  {
    label: 'Info',
    color: 'info',
    'is-rounded': true
  },
  {
    label: 'Warning',
    color: 'warning',
    'is-rounded': true
  },
  {
    label: 'Danger',
    color: 'danger',
    'is-rounded': true
  }
]
</script>

<template>
  <h2>
    Rounded
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
          :is-rounded="items['is-rounded']"
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
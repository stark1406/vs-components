<script lang="ts" setup>
import { VsButton } from '@vs/button'
import type { Event } from '../types'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'

const attributes: Event[] = [
  {
    label: 'Click',
    "@click": '...'
  },
]

const clickBtn = () => {
  alert('Welcome VS-components')
}
</script>

<template>
  <h2>
    Event
  </h2>
  <widget-code-view
    component="button"
    :attributes="attributes"
  >
    <div class="content">
      <vs-button
        label="Click"
        @click="clickBtn"
      />
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
</style>
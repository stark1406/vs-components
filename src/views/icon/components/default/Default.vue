<script lang="ts" setup>
import { VsIcon } from '@vs/icon'
import { icons } from '../data'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { Default } from '../types'

const attributes: Default[] = [
  {
    name: 'heart',
    width: '30px',
    height: '30px',
  }
]
</script>

<template>
  <h2>
    Default
  </h2>
  <widget-code-view
    component="icon"
    :attributes="attributes"
  >
    <div class="content">
      <vs-icon
        :name="icons[0].name"
        height="30px"
        width="30px"
      />
    </div>
  </widget-code-view>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  min-width: 100%;
}
</style>
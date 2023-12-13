<script lang="ts" setup>
import { VsButton } from '@vs/button'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { Disabled } from '../types'

const attributes: Disabled[] = [
  {
    label: 'Submit',
    'is-disabled': true
  },
]
</script>

<template>
  <h2>
    Disabled
  </h2>
  <widget-code-view
    component="button"
    :attributes="attributes"
  >
    <div class="content">
      <div
        v-for="(items, ind) in attributes"
        :key="ind"
      >
        <vs-button
          :label="items.label"
          :is-disabled="items['is-disabled']"
        />
      </div>
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
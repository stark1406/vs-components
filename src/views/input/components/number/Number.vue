<script lang="ts" setup>
import { ref } from 'vue'
import { VsInput } from '@vs/input'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { InputNumber } from '../types'

const valueNumber = ref<number>(0)

const attributes: InputNumber[] = [
  {
    'v-model:value': '...',
    label: 'Number',
    name: 'number',
    width: '300px',
    type: 'number'
  }
]
</script>

<template>
  <h2>
    Number
  </h2>
  <widget-code-view
    component="input"
    :attributes="attributes"
  >
    <div class="content">
      <vs-input
        v-model:value="valueNumber"
        label="Number"
        name="number"
        type="number"
        width="300px"
      />
    </div>
  </widget-code-view>
</template>

<style lang="scss" scoped>
@import '../styles.scss';
</style>
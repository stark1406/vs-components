<script lang="ts" setup>
import { ref } from 'vue'
import { VsInput } from '@vs/input'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { InputDefault } from '../types'

const valueName = ref<string>('')

const attributes: InputDefault[] = [
  {
    'v-model:value': '...',
    label: 'Name',
    name: 'name',
    width: '300px',
    placeholder: 'Name',
    'show-clear-button': true
  }
]
</script>

<template>
  <h2>
    Default
  </h2>
  <widget-code-view
    component="input"
    :attributes="attributes"
  >
    <div class="content">
      <vs-input
        v-model:value="valueName"
        label="Name"
        name="name"
        width="300px"
        placeholder="Name"
        show-clear-button
      />
    </div>
  </widget-code-view>
</template>

<style lang="scss" scoped>
@import '../styles';
</style>
<script lang="ts" setup>
import { ref } from 'vue'
import { VsInput } from '@vs/input'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { InputUnderlined } from '../types'

const valueEmail = ref<string>('')

const attributes: InputUnderlined[] = [
  {
    'v-model:value': '...',
    label: 'Email',
    name: 'email',
    width: '300px',
    'styling-mode': 'underlined',
    type: 'email'
  }
]
</script>

<template>
  <h2>
    Underlined
  </h2>
  <widget-code-view
    component="input"
    :attributes="attributes"
  >
    <div class="content">
      <vs-input
        v-model:value="valueEmail"
        label="Email"
        name="email"
        type="email"
        width="300px"
        styling-mode="underlined"
        placeholder="Email"
      />
    </div>
  </widget-code-view>
</template>

<style lang="scss" scoped>
@import '../styles.scss';
</style>
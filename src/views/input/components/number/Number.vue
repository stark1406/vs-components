<script lang="ts" setup>
import { ref, computed, ComputedRef } from 'vue'
import { VsInput } from '@vs/input'
import { VsCard } from '@vs/card'
import { VsButton } from '@vs/button'
import GeneratorCode from '@/utils/GeneratorCode/GeneratorCode'
import type { InputNumber } from '../types'

const generatorCode = new GeneratorCode()
const valueNumber = ref<number>(0)

const isCode = ref<boolean>(false)
const code = ref<string>('')

function showCode(): void {
  const inputAttributes: InputNumber[] = [
    {
      'v-model:value': '...',
      label: 'Number',
      name: 'number',
      width: '300px',
      type: 'number'
    }
  ]

  isCode.value = !isCode.value
  code.value = generatorCode.getCode('input', inputAttributes)
}

const icon: ComputedRef<string> = computed(() => {
  return isCode.value ? 'chevron-up' : 'code'
})
</script>

<template>
  <h2>
    Number
  </h2>
  <vs-card>
    <template #title>
      <div class="title">
        <vs-button
          class="btn_icon"
          :is-outlined="true"
          :icon="icon"
          @click="showCode"
        />
      </div>
    </template>
    <div class="content">
      <vs-input
        v-model:value="valueNumber"
        label="Number"
        name="number"
        type="number"
        width="300px"
      />
    </div>
    <template #footer>
      <Transition>
        <highlightjs
          v-if="isCode"
          :code="code"
        />
      </Transition>
    </template>
  </vs-card>
</template>

<style lang="scss" scoped>
@import '../styles.scss';
</style>
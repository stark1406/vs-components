<script lang="ts" setup>
import { ref, computed, ComputedRef } from 'vue'
import { VsInput } from '@vs/input'
import { VsCard } from '@vs/card'
import { VsButton } from '@vs/button'
import GeneratorCode from '@/utils/GeneratorCode/GeneratorCode'
import type { InputDefault } from '../types'

const generatorCode = new GeneratorCode()
const valueName = ref<string>('')

const isCode = ref<boolean>(false)
const code = ref<string>('')

function showCode(): void {
  const inputAttributes: InputDefault[] = [
    {
      'v-model:value': '...',
      label: 'Name',
      name: 'name',
      width: '300px',
      placeholder: 'Name'
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
    Default
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
        v-model:value="valueName"
        label="Name"
        name="name"
        width="300px"
        placeholder="Name"
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
<script lang="ts" setup>
import { ref, computed, ComputedRef } from 'vue'
import { VsInput } from '@vs/input'
import { VsCard } from '@vs/card'
import { VsButton } from '@vs/button'
import GeneratorCode from '@/utils/GeneratorCode/GeneratorCode'
import type { InputUnderlined } from '../types'

const generatorCode = new GeneratorCode()
const valueEmail = ref<string>('')

const isCode = ref<boolean>(false)
const code = ref<string>('')

function showCode(): void {
  const inputAttributes: InputUnderlined[] = [
    {
      'v-model:value': '...',
      label: 'Email',
      name: 'email',
      width: '300px',
      'styling-mode': 'underlined',
      type: 'email'
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
    Underlined
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
        v-model:value="valueEmail"
        label="Email"
        name="email"
        type="email"
        width="300px"
        styling-mode="underlined"
        placeholder="Email"
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
<script lang="ts" setup>
import { ref, computed, ComputedRef } from 'vue'
import { VsIcon } from '@vs/icon'
import { VsCard } from '@vs/card'
import { VsButton } from '@vs/button'
import { icons } from '../data'
import GeneratorCode from '@/utils/GeneratorCode/GeneratorCode'
import type { Icon } from '../types'

const generatorCode = new GeneratorCode()

const isCode = ref<boolean>(false)
const code = ref<string>('')

function showCode(): void {
  const iconAttributes: Icon[] = [
    {
      name: 'heart',
      width: '30px',
      height: '30px',
    }
  ]

  isCode.value = !isCode.value
  code.value = generatorCode.getCode('icon', iconAttributes)
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
      <vs-icon
        :name="icons[0].name"
        height="30px"
        width="30px"
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
.title {
  display: flex;
  justify-content: end;
  min-width: 100%;
}

.btn_icon {
  color: var(--primary);
}

.content {
  display: flex;
  justify-content: center;
  min-width: 100%;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
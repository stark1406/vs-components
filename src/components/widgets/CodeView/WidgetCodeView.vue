<script lang="ts" setup>
import { ref, computed, ComputedRef, defineProps, PropType } from 'vue'
import { VsCard } from '@vs/card'
import { VsButton } from '@vs/button'
import GeneratorCode from '@/utils/GeneratorCode/GeneratorCode'

const generatorCode = new GeneratorCode()

const isCode = ref<boolean>(false)
const code = ref<string>('')

const props = defineProps({
  component: {
    type: String,
    default: ''
  },
  attributes: {
    type: Array as PropType<Record<string, string | number | boolean>[]>,
    default: () => []
  },
  slots: {
    type: Array as PropType<string[]>,
    default: () => []
  }
})

function showCode(): void {
  isCode.value = !isCode.value
  code.value = generatorCode.getCode(props.component, props.attributes, props.slots)
}

const icon: ComputedRef<string> = computed(() => {
  return isCode.value ? 'chevron-up' : 'code'
})
</script>

<template>
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
    
    <slot />

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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
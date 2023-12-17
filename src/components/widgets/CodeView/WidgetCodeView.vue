<script lang="ts" setup>
import { ref, computed, ComputedRef, defineProps, PropType } from 'vue'
import { VsCard } from '@vs/card'
import { VsButton } from '@vs/button'
import 'highlight.js/styles/vs2015.min.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from "@highlightjs/vue-plugin"
import GeneratorCode from '@/utils/GeneratorCode/GeneratorCode'

const highlightjs = hljsVuePlugin.component

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

const iconShowCode: ComputedRef<string> = computed(() => {
  return isCode.value ? 'chevron-up' : 'code'
})

const isCopy = ref<boolean>(false)

function copyCodeToClipboard(): void {
  if (code.value) {
    navigator.clipboard.writeText(code.value).then(() => {
      isCopy.value = true
      setTimeout(() => isCopy.value = false, 2000)
    }).catch((error) => {
      console.error('Unable to copy to clipboard', error)
    })
  }
}

const iconCopyCode: ComputedRef<string> = computed(() => {
  return isCopy.value ? 'check-mark' : 'clone-copy'
})
</script>

<template>
  <vs-card>
    <template #title>
      <div class="title">
        <vs-button
          class="btn_icon"
          :is-outlined="true"
          :icon="iconShowCode"
          @click="showCode"
        />
      </div>
    </template>
    
    <slot />

    <template #footer>
      <Transition>
        <div 
          v-if="isCode"
          class="highlightjs"
        >
          <highlightjs
            language="js"
            :code="code"
          />
          <vs-button
            :class="[
              'btn_copy',
              {
                'btn_copy_check': isCopy 
              }
            ]"
            :is-outlined="false"
            :icon="iconCopyCode"
            @click="copyCodeToClipboard"
          />
        </div>
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

.btn_copy {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  &_check {
    color: #0aff33;
  }
}
.highlightjs {
  background: #1e1e1e;
  padding: 5px;
  position: relative;
  border-radius: 10px;
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
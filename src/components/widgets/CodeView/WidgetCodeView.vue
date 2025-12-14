<script lang="ts" setup>
import { ref, computed, ComputedRef, PropType } from 'vue'
import { VsCard } from '@vs/card'
import { VsButton } from '@vs/button'
import 'highlight.js/styles/vs2015.min.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import GeneratorCode from '@/utils/GeneratorCode/GeneratorCode'

const highlightjs = hljsVuePlugin.component

const generatorCode = new GeneratorCode()

const isCode = ref<boolean>(false)
const code = ref<string>('')

const props = defineProps({
  component: {
    type: String,
    default: '',
  },
  attributes: {
    type: Array as PropType<Record<string, string | number | boolean>[]>,
    default: () => [],
  },
  slots: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
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
    navigator.clipboard
      .writeText(code.value)
      .then(() => {
        isCopy.value = true
        setTimeout(() => (isCopy.value = false), 2000)
      })
      .catch((error) => {
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
          class="title__btn-icon"
          is-outlined
          is-icon
          size="small"
          :name-icon="iconShowCode"
          @click="showCode"
        />
      </div>
    </template>

    <slot />

    <template #footer>
      <Transition>
        <div v-if="isCode" class="highlightjs">
          <highlightjs language="js" :code="code" />
          <vs-button
            :class="[
              'btn-copy',
              {
                'btn-copy__check': isCopy,
              },
            ]"
            is-icon
            size="small"
            :is-outlined="false"
            :name-icon="iconCopyCode"
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

  &__btn-icon {
    color: var(--primary);
  }
}

.btn-copy {
  position: absolute;
  top: 0;
  right: 0;
  margin: var(--spacing-2);

  &__check {
    color: var(--success);
  }
}

.highlightjs {
  background: var(--bg-dark);
  padding: var(--spacing-05);
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

<script lang="ts" setup>
import { ref, computed, ComputedRef } from 'vue'
import { VsCard } from '@vs/card'
import { VsButton } from '@vs/button'
import GeneratorCode from '@/utils/GeneratorCode/GeneratorCode'
import { CardProps } from '../types'

const generatorCode = new GeneratorCode()

const textCard: string = 
`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Commodi, ratione debitis quis est labore voluptatibus! 
Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!`

const isCode = ref<boolean>(false)
const code = ref<string>('')

function showCode(): void {
  const cardAttributes: CardProps[] = [
    {
      title: 'Title',
      subtitle: 'Subtitle',
      text: '...',
      footer: 'Footer',
      'max-width': '500px',
    }
  ]

  isCode.value = !isCode.value
  code.value = generatorCode.getCode('card', cardAttributes)
}

const icon: ComputedRef<string> = computed(() => {
  return isCode.value ? 'chevron-up' : 'code'
})
</script>

<template>
  <h2>
    Props
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
    <template #default>
      <div class="content">
        <vs-card
          title="Title"
          subtitle="Subtitle"
          :text="textCard"
          footer="Footer"
          max-width="500px"
        />
      </div>
    </template>
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

.content {
  display: flex;
  justify-content: center;
  min-width: 100%;
}
</style>
<script lang="ts" setup>
import { ref, computed, ComputedRef } from 'vue'
import { VsCard } from '@vs/card'
import { VsButton } from '@vs/button'
import GeneratorCode from '@/utils/GeneratorCode/GeneratorCode'
import type { CardAlign } from '../types'

const generatorCode = new GeneratorCode()

const textCard: string = 
`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Commodi, ratione debitis quis est labore voluptatibus! 
Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!`

const isCode = ref<boolean>(false)
const code = ref<string>('')

function showCode(): void {
  const cardAttributes: CardAlign[] = [
    {
      title: 'Default',
      subtitle: 'Subtitle',
      text: '...',
      footer: 'Footer',
    },
    {
      title: 'Center',
      subtitle: 'Subtitle',
      text: '...',
      'is-align-center': true,
      footer: 'Footer',
    },
    {
      title: 'Right',
      subtitle: 'Subtitle',
      text: '...',
      'is-align-right': true,
      footer: 'Footer'
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
    Align
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
          class="card"
          title="Default"
          subtitle="Subtitle"
          :text="textCard"
          footer="Footer"
        />
        <vs-card
          class="card"
          title="Center"
          subtitle="Subtitle"
          :text="textCard"
          is-align-center
          footer="Footer"
        />
        <vs-card
          class="card"
          title="Right"
          subtitle="Subtitle"
          :text="textCard"
          is-align-right
          footer="Footer"
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
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  & > .card {
    margin: 10px;
  }
}
</style>
<script lang="ts" setup>
import { VsCard } from '@vs/card'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { CardAlign } from '../types'

defineProps({
  header: {
    type: String,
    default: '',
  },
})

const TEXT_CARD: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Commodi, ratione debitis quis est labore voluptatibus!
Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!`

const ATTRIBUTES: CardAlign[] = [
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
    footer: 'Footer',
    'align-title': 'center',
    'align-subtitle': 'center',
    'align-text': 'center',
    'align-footer': 'center',
  },
  {
    title: 'Right',
    subtitle: 'Subtitle',
    text: '...',
    footer: 'Footer',
    'align-title': 'right',
    'align-subtitle': 'right',
    'align-text': 'right',
    'align-footer': 'right',
  },
] as const
</script>

<template>
  <h2>{{ header }}</h2>
  <widget-code-view component="card" :attributes="ATTRIBUTES">
    <template #default>
      <div class="content">
        <vs-card title="Default" subtitle="Subtitle" :text="TEXT_CARD" footer="Footer" />
        <vs-card
          title="Center"
          subtitle="Subtitle"
          :text="TEXT_CARD"
          footer="Footer"
          align-title="center"
          align-subtitle="center"
          align-text="center"
          align-footer="center"
        />
        <vs-card
          title="Right"
          subtitle="Subtitle"
          :text="TEXT_CARD"
          footer="Footer"
          align-title="right"
          align-subtitle="right"
          align-text="right"
          align-footer="right"
        />
      </div>
    </template>
  </widget-code-view>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  gap: var(--spacing-2);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}
</style>

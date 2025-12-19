<script lang="ts" setup>
import { VsCard } from '@vs/card'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import { CardProps } from '../types'

defineProps({
  header: {
    type: String,
    default: '',
  },
})

const TEXT_CARD: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Commodi, ratione debitis quis est labore voluptatibus! 
Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!`

const ATTRIBUTES: CardProps[] = [
  {
    title: 'Title',
    subtitle: 'Subtitle',
    text: '...',
    footer: 'Footer',
  },
] as const
</script>

<template>
  <h2>{{ header }}</h2>
  <widget-code-view component="card" :attributes="ATTRIBUTES">
    <template #default>
      <div class="content">
        <vs-card
          title="Title"
          subtitle="Subtitle"
          :text="TEXT_CARD"
          footer="Footer"
          class="content__card"
        />
      </div>
    </template>
  </widget-code-view>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;

  &__card {
    width: 50%;
  }
}
</style>

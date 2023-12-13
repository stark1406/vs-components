<script lang="ts" setup>
import { VsCard } from '@vs/card'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import { CardProps } from '../types'

const textCard: string = 
`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Commodi, ratione debitis quis est labore voluptatibus! 
Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!`

const attributes: CardProps[] = [
  {
    title: 'Title',
    subtitle: 'Subtitle',
    text: '...',
    footer: 'Footer',
    'max-width': '500px',
  }
]
</script>

<template>
  <h2>
    Props
  </h2>
  <widget-code-view
    component="card"
    :attributes="attributes"
  >
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
  </widget-code-view>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  min-width: 100%;
}
</style>
<script lang="ts" setup>
import { VsCard } from '@vs/card'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { CardAlign } from '../types'

const textCard: string = 
`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Commodi, ratione debitis quis est labore voluptatibus! 
Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!`

const attributes: CardAlign[] = [
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
</script>

<template>
  <h2>
    Align
  </h2>
  <widget-code-view
    component="card"
    :attributes="attributes"
  >
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
  </widget-code-view>
</template>

<style lang="scss" scoped>
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
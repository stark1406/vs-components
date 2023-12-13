<script lang="ts" setup>
import { VsCard } from '@vs/card'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'

const textCard: string = 
`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Commodi, ratione debitis quis est labore voluptatibus! 
Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!`

const attributes = [
  {
    'max-width': '500px',
  }
]
const slots: string[] = ['title', 'default', 'footer']

</script>

<template>
  <h2>
    Slot
  </h2>
  <widget-code-view
    component="card"
    :attributes="attributes"
    :slots="slots"
  >
    <template #default>
      <div class="content">
        <vs-card
          max-width="500px"
        >
          <template #title>
            <div class="title_content">
              Title
            </div>
          </template>
          <template #default>
            {{ textCard }}
          </template>
          <template #footer>
            Footer
          </template>
        </vs-card>
      </div>
    </template>
  </widget-code-view>
</template>

<style lang="scss" scoped>
.title_content {
  font-size: 1.25rem;
  font-weight: 500;
}

.content {
  display: flex;
  justify-content: center;
  min-width: 100%;
}
</style>
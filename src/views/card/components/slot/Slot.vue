<script lang="ts" setup>
import { VsCard } from '@vs/card'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'

defineProps({
  header: {
    type: String,
    default: '',
  },
})

const TEXT_CARD: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Commodi, ratione debitis quis est labore voluptatibus! 
Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!`

const SLOTS: string[] = ['title', 'default', 'footer'] as const
</script>

<template>
  <h2>{{ header }}</h2>
  <widget-code-view component="card" :slots="SLOTS">
    <template #default>
      <div class="content">
        <vs-card class="content__card">
          <template #title>
            <div class="title">Title</div>
          </template>
          <template #default>
            {{ TEXT_CARD }}
          </template>
          <template #footer>Footer</template>
        </vs-card>
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

.title {
  font-size: var(--font-size-large);
}
</style>

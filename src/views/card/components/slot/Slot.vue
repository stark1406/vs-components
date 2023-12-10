<script lang="ts" setup>
import { VsCard } from '@vs/card'

const textCard: string = 
`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Commodi, ratione debitis quis est labore voluptatibus! 
Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!`
</script>

<template>
  <h2>
    Slot
  </h2>
  <vs-card>
    <template #default>
      <div class="content">
        <vs-card
          max-width="500px"
        >
          <template #title>
            <div class="title">
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
  </vs-card>
</template>

<style lang="scss" scoped>
.title {
  font-size: 1.25rem;
  font-weight: 500;
}

.content {
  display: flex;
  justify-content: center;
  min-width: 100%;
}
</style>
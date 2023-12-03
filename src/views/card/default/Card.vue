<script lang="ts" setup>
import { VsCard } from '@vs/card'

const textCard = 
`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Commodi, ratione debitis quis est labore voluptatibus! 
Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!`
</script>

<template>
  <h1 class="heading">
    Card
  </h1>
  <h2>
    Slot
  </h2>
  <vs-card>
    <template #default>
      <div class="slot">
        <vs-card
          max-width="500px"
        >
          <template #title>
            <div class="title_slot">
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
  <h2>
    Props
  </h2>
  <vs-card>
    <template #default>
      <div class="props">
        <vs-card
          title="Title"
          subtitle="Subtitle"
          :text="textCard"
          footer="Footer"
          max-width="500px"
        />
      </div>
    </template>
  </vs-card>
  <h2>
    Align
  </h2>
  <vs-card>
    <template #default>
      <div class="align">
        <vs-card
          title="Default"
          subtitle="Subtitle"
          :text="textCard"
          footer="Footer"
        />
      </div>
      <div class="align">
        <vs-card
          title="Center"
          subtitle="Subtitle"
          :text="textCard"
          is-align-center
          footer="Footer"
        />
      </div>
      <div class="align">
        <vs-card
          title="Right"
          subtitle="Subtitle"
          :text="textCard"
          is-align-right
          footer="Footer"
        />
      </div>
    </template>
  </vs-card>
</template>

<style lang="scss" scoped>
.heading {
  border-left: 5px solid var(--primary);
  padding-left: 15px;
}

.title_slot {
  font-size: 1.25rem;
  font-weight: 500;
}

.slot, .props {
  display: flex;
  justify-content: center;
  min-width: 100%;
}
.align {
  margin: 10px;
}
</style>
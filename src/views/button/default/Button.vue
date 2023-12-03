<script lang="ts" setup>
import { VsButton } from '@/components/vs/button'
import { templates } from '../data'
import { VsCard } from '@vs/card'
</script>

<template>
  <h1 class="heading">
    Button
  </h1>
  <div
    v-for="(template, index) in templates"
    :key="index"
  >
    <h2>
      {{ template.header }}
    </h2>
    <vs-card>
      <div 
        class="content"
      >
        <div
          v-for="(items, ind) in template.items"
          :key="ind"
        >
          <vs-button
            :label="items.label"
            :color="items.color"
            :is-rounded="items.isRounded"
            :is-disabled="items.isDisabled"
            :is-outlined="items.isOutlined"
            :icon="items.icon"
            :size="items.size"
            @click="items.click"
          />
        </div>
      </div>
    </vs-card>
  </div>
</template>

<style lang="scss" scoped>
.heading {
  border-left: 5px solid var(--primary);
  padding-left: 15px;
}
.content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 100%;
  & > div {
    margin: 10px;
  }
}
</style>
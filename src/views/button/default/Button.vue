<script lang="ts" setup>
import { VsButton } from '@/components/vs/button'
import { templates } from '../data'
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
    <div
      class="card"
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
  </div>
</template>

<style lang="scss" scoped>
.heading {
  border-left: 5px solid var(--primary);
  padding-left: 15px;
}
.card {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: center;
  gap: 1rem;
  background: var(--surface-card);
  border: var(--card-border);
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 2rem;
}
</style>
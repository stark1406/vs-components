<script lang="ts" setup>
import { VsIcon } from '@vs/icon'
import { VsCard } from '@vs/card'
import { icons } from '../data'
</script>

<template>
  <h2>Variants</h2>
  <vs-card>
    <div class="content">
      <div v-for="(item, index) in icons" :key="index" class="content__row">
        <vs-icon :name="item.name" height="2rem" width="2rem" />
        {{ item.text }}
      </div>
    </div>
  </vs-card>
</template>

<style lang="scss" scoped>
.content {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  &__row {
    display: flex;
    align-items: center;
    gap: var(--spacing-1);
    margin: var(--spacing-2);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>

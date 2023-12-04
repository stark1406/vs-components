<script lang="ts" setup>
import { VsIcon } from '@vs/icon'
import { VsCard } from '@vs/card'
import { icons } from '../data'
</script>

<template>
  <h1 class="heading">
    Icon
  </h1>
  <h2>
    Variants
  </h2>
  <vs-card>
    <div class="content">
      <div
        v-for="item in icons"
        :key="item"
        class="row"
      >
        <vs-icon
          :name="item.name"
          height="30px"
          width="30px"
        />
        <span class="icon_name">
          {{ item.text }}
        </span>
      </div>
    </div>
  </vs-card>
</template>

<style lang="scss" scoped>
.heading {
  border-left: 5px solid var(--primary);
  padding-left: 15px;
}

.content {
  display: grid;
  justify-content: center;
  min-width: 100%;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.row {
  display: flex;
  margin: 10px;
}

.icon_name {
  margin-top: 6px;
  margin-left: 10px;
}
</style>
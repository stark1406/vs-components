<script lang="ts" setup>
import { Slot, Default, Align } from '../components'

const HEADER = 'Card'
const COMPONENTS = [
  { header: 'Default', component: Default },
  { header: 'Slot', component: Slot },
  { header: 'Align', component: Align },
] as const
</script>

<template>
  <h1 class="heading">{{ HEADER }}</h1>
  <component v-for="item in COMPONENTS" :is="item.component" :header="item.header" />
</template>

<style lang="scss" scoped>
.heading {
  border-left: 5px solid var(--primary);
  padding-left: var(--spacing-2);
}
</style>

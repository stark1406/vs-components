<script lang="ts" setup>
import { Colors, Rounded, Disabled, Outlined, Icon, Size, Event } from '../components'

const HEADER = 'Button'
const COMPONENTS = [
  { header: 'Colors', component: Colors },
  { header: 'Rounded', component: Rounded },
  { header: 'Disabled', component: Disabled },
  { header: 'Outlined', component: Outlined },
  { header: 'Icon', component: Icon },
  { header: 'Size', component: Size },
  { header: 'Event', component: Event },
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

<script lang="ts" setup>
import { Colors, Rounded, Disabled, Outlined, Icon, Size, Event } from '../components'
</script>

<template>
  <h1 class="heading">
    Button
  </h1>
  <Colors />
  <Rounded />
  <Disabled />
  <Outlined />
  <Icon />
  <Size />
  <Event />
</template>

<style lang="scss" scoped>
.heading {
  border-left: 5px solid var(--primary);
  padding-left: 15px;
}
</style>
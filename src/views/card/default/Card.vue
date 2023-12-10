<script lang="ts" setup>
import { Slot, Props, Align } from '../components'
</script>

<template>
  <h1 class="heading">
    Card
  </h1>
  <Slot />
  <Props />
  <Align />
</template>

<style lang="scss" scoped>
.heading {
  border-left: 5px solid var(--primary);
  padding-left: 15px;
}
</style>
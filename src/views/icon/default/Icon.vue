<script lang="ts" setup>
import { Variants, Default } from '../components'
</script>

<template>
  <h1 class="heading">
    Icon
  </h1>
  <Default />
  <Variants />
</template>

<style lang="scss" scoped>
.heading {
  border-left: 5px solid var(--primary);
  padding-left: 15px;
}
</style>
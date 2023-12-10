<script lang="ts" setup>
import { Default, Number, Underlined } from '../components'
</script>

<template>
  <h1 class="heading">
    Input
  </h1>
  <Default />
  <Underlined />
  <Number />
</template>

<style lang="scss" scoped>
.heading {
  border-left: 5px solid var(--primary);
  padding-left: 15px;
}
</style>
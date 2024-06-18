<script lang="ts" setup>
import {
  DateInline,
  MonthInline,
  YearInline,
  TimeInline
} from '../components'
</script>

<template>
  <h1 class="heading">
    Datepicker
  </h1>
  <date-inline />
  <month-inline />
  <year-inline />
  <time-inline />
</template>

<style lang="scss" scoped>
.heading {
  border-left: 5px solid var(--primary);
  padding-left: 15px;
}

</style>
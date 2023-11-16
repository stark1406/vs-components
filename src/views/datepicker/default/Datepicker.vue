<script lang="ts" setup>
import { ref } from 'vue'
import { VsDatePicker } from '@/components/vs/datepicker'
import { VsInput } from '@vs/input'

let valueDate = ref<string>('')

function updateValueDate(value: string) {
  valueDate.value = value
}
</script>

<template>
  <h1 class="heading">
    Datepicker
  </h1>
  <h2>
    Date-inline
  </h2>
  <div
    class="card"
  >
    <div class="date_inline">
      <div class="calendar">
        <vs-date-picker 
          @update:value="updateValueDate"
        />
      </div>
      <vs-input
        v-model:value="valueDate"
        label="Date:"
        name="date"
      />
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
  justify-content: center;
  gap: 1rem;
  background: var(--surface-card);
  border: var(--card-border);
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 2rem;
}
.date_inline {
  width: 280px;
}

.calendar {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>
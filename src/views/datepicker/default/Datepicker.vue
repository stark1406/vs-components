<script lang="ts" setup>
import { ref } from 'vue'
import { VsDatePicker } from '@/components/vs/datepicker'
import { VsInput } from '@vs/input'
import { VsCard } from '@vs/card'

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
  <vs-card>
    <div class="content">
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
  </vs-card>
</template>

<style lang="scss" scoped>
.heading {
  border-left: 5px solid var(--primary);
  padding-left: 15px;
}
.content {
  display: flex;
  justify-content: center;
  min-width: 100%;
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
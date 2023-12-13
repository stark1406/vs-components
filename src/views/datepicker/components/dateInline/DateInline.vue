<script lang="ts" setup>
import { ref } from 'vue'
import { VsDatePicker } from '@vs/datepicker'
import { VsInput } from '@vs/input'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { DateInline } from '../types'

let valueDate = ref<string>('12.12.2034')

function updateValueDate(value: string): void {
  valueDate.value = value
}

const attributes: DateInline[] = [
  {
    'model-value': '...',
    'show-today-button': true,
    'show-select-button': true,
    'show-clear-button': true,
    '@update:value': '...'
  }
]
</script>

<template>
  <h2>
    Date-inline
  </h2>
  <widget-code-view
    component="date-picker"
    :attributes="attributes"
  >
    <div class="calendar">
      <vs-date-picker
        :model-value="valueDate"
        show-today-button
        show-select-button
        show-clear-button
        @update:value="updateValueDate"
      />
    </div>
    <div class="input">
      <vs-input
        v-model:value="valueDate"
        label="Model value:"
        name="date"
        width="300px"
      />
    </div>
  </widget-code-view>
</template>

<style lang="scss" scoped>
.calendar {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.input {
  display: flex;
  justify-content: center;
}
</style>
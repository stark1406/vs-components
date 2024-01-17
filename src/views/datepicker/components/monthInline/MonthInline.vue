<script lang="ts" setup>
import { ref } from 'vue'
import { VsDatePicker } from '@vs/datepicker'
import { VsInput } from '@vs/input'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { MonthInline } from '../types'

let valueDate = ref<string>('01.2039')

const attributes: MonthInline[] = [
  {
    'v-model:value': '...',
    'type': 'month',
  }
]
</script>

<template>
  <h2>
    Month-inline
  </h2>
  <widget-code-view
    component="date-picker"
    :attributes="attributes"
  >
    <div class="calendar">
      <vs-date-picker
        v-model:value="valueDate"
        type="month"
        display-format="MM/YYYY"
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
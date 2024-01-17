<script lang="ts" setup>
import { ref } from 'vue'
import { VsDatePicker } from '@vs/datepicker'
import { VsInput } from '@vs/input'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { YearInline } from '../types'

let valueDate = ref<string>('2039')

const attributes: YearInline[] = [
  {
    'v-model:value': '...',
    'type': 'year',
  }
]
</script>

<template>
  <h2>
    Year-inline
  </h2>
  <widget-code-view
    component="date-picker"
    :attributes="attributes"
  >
    <div class="calendar">
      <vs-date-picker
        v-model:value="valueDate"
        type="year"
        display-format="YYYY"
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
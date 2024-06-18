<script lang="ts" setup>
import { ref } from 'vue'
import { VsDatePicker } from '@vs/datepicker'
import { VsInput } from '@vs/input'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { TimeInline } from '../types'

const time = ref({
  hours: new Date().getHours(),
  minutes: new Date().getMinutes()
})

const hours = time.value.hours < 10 ? `0${time.value.hours}` : time.value.hours

const minutes = time.value.minutes < 10 ? `0${time.value.minutes}` : time.value.minutes

let valueTime = ref<string>(`${hours}:${minutes}`)

const attributes: TimeInline[] = [
  {
    'v-model:value': '...',
    'show-select-button': true,
    'type': 'time',
  }
]
</script>

<template>
  <h2>
    Time-inline
  </h2>
  <widget-code-view
    component="date-picker"
    :attributes="attributes"
  >
    <div class="calendar">
      <vs-date-picker
        v-model:value="valueTime"
        show-select-button
        type="time"
      />
    </div>
    <div class="input">
      <vs-input
        v-model:value="valueTime"
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
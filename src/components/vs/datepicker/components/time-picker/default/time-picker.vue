<script lang="ts">
import { defineComponent, SetupContext } from 'vue'
import { useTimePicker } from '../setup'
import { TimePickerContract } from '../contract'
import { VsIcon } from '@/components/vs/icon'
import type { TimePikerProps } from '../types'

export default defineComponent({
  name: 'TimePicker',
  components: {
    VsIcon
  },
  extends: TimePickerContract,
  setup(props: TimePikerProps, ctx: SetupContext) {
    return useTimePicker(props, ctx)
  },
})
</script>

<template>
  <div
    v-if="selectedOption === 'time'"
    class="vs-time-container"
  >
    <div>
      <button
        class="vs-time-container_counter"
        @click="plusHours"
      >
        <vs-icon
          name="chevron-up" 
          height="40px"
          width="40px"
        />
      </button>
      <div class="vs-time-container_time">
        <button
          @click="selectHours"
        >
          {{ computeHours }}
        </button>
      </div>
      <button
        class="vs-time-container_counter"
        @click="minusHours"
      >
        <vs-icon
          name="chevron-down" 
          height="40px"
          width="40px"
        />
      </button>
    </div>
    <div class="vs-time-container_delimiter">
      :
    </div>
    <div>
      <button
        class="vs-time-container_counter"
        @click="plusMinutes"
      >
        <vs-icon
          name="chevron-up" 
          height="40px"
          width="40px"
        />
      </button>
      <div class="vs-time-container_time">
        <button
          @click="selectMinutes"
        >
          {{ computeMinutes }}
        </button>
      </div>
      <button
        class="vs-time-container_counter"
        @click="minusMinutes"
      >
        <vs-icon
          name="chevron-down" 
          height="40px"
          width="40px"
        />
      </button>
    </div>
  </div>
  <div
    v-else
    class="vs-hours-minutes-container"
  >
    <div
      v-for="(items, index) in timeData"
      :key="index"
      :class="{
        'vs-hours-minutes-container_hours' : selectedOption === 'hours',
        'vs-hours-minutes-container_minutes' : selectedOption === 'minutes'
      }"
    >
      <button
        v-for="item in items"
        :key="item"
        :class="{
          'vs-hours-minutes-container_selected': isSelected(item),
        }"
        @click="selectedItem(item)"
      >
        <span>
          {{ item }}
        </span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vs-time-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  &_counter {
    padding: 4px;
    color: rgb(156 163 175);

    &:hover {
      color: rgb(51 65 85);
    }
  }

  &_time {
    text-align: center;

    & > button {
      color: rgb(51 65 85);
      font-size: 30px;
      line-height: 36px;
    }
  }

  &_delimiter {
    font-size: 30px;
    line-height: 36px;
    margin: 0 28px
  }
}

.vs-hours-minutes-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  &_hours {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  &_minutes {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;


    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    &:enabled:hover {
      color: #000;
      background-color: rgb(241 245 249);
    }
  }

  &_selected {
    color: #fff;
    background-color: var(--primary);
  }
}
</style>
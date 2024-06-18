<script lang="ts">
import { defineComponent } from 'vue'
import { useDatepicker } from '../../setup'
import { DatepickerContract } from '../../contract'
import { VsIcon } from '@/components/vs/icon'
import { ActionButtons } from '../../components/action-buttons'
import { TimePicker } from '../../components/time-picker'
import type { DatePikerProps } from '../../types'

export default defineComponent({
  name: 'DatepikerInline',
  components: {
    VsIcon,
    ActionButtons,
    TimePicker
  },
  extends: DatepickerContract,
  setup(props: DatePikerProps) {
    return useDatepicker(props)
  },
})
</script>

<template>
  <div
    :class="[
      'vs-date',
      {
        'vs-date_disabled': disabled
      }
    ]"
  >
    <div
      v-if="selectedOption === 'calendar'"
      class="vs-date_container"
    >
      <div
        class="vs-toolbar"
      >
        <button
          class="vs-btn_get"
          @click="getPreviousToolbar"
        >
          <vs-icon
            name="chevron-left"
            height="25px"
            width="25px"
          />
        </button>
        <button 
          class="vs-btn_selected_header"
          @click="selectedHeaderToolbar"
        >
          {{ headerToolbar }}
        </button>
        <button
          class="vs-btn_get"
          @click="getNextToolbar"
        >
          <vs-icon
            name="chevron-right"
            height="25px"
            width="25px"
          />
        </button>
      </div>

      <input
        type="hidden"
        :name="name"
      >

      <div
        v-if="view === 'day'"
        class="vs-row_weekdays"
      >
        <div
          v-for="day in weekdays"
          :key="day"
        >
          {{ day }}
        </div>
      </div>

      <div class="vs-calendar">
        <div
          v-for="(items, index) in datas"
          :key="index"
          :class="[
            'vs-row',
            {
              'vs-row_day': view === 'day',
              'vs-row_month_year': view !== 'day'
            }
          ]"
        >
          <button
            v-for="(item, ind) in items"
            :key="ind"
            :data-date="item"
            :class="[
              'vs-btn',
              {
                'vs-btn_ecluded': !isExcluded(item),
                'vs-btn_current': isCurrent(item),
                'vs-btn_selected': isSelected(item),
              }
            ]"
            @click="selectItem(item)"
          >
            <span>
              {{ getValue(item) }}
            </span>
          </button>
        </div>
      </div>
    </div>

    <time-picker
      v-else 
      :selected-option="selectedOption"
      :show-select-button="showSelectButton"
      :show-clear-button="showClearButton"
      @update:selected-option="(value: unknown) => updateSelectedOption(value as string)"
    />

    <action-buttons
      v-if="showTodayButton || showSelectButton || showClearButton"
      :is-today="showTodayButton && selectedOption === 'calendar'"
      :is-select="showSelectButton"
      :is-clear="showClearButton && selectedOption === 'calendar'"
    />
  </div>
</template>

<style lang="scss" scoped>
.vs-date {
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;

  &_disabled {
    pointer-events: none;
    opacity: 0.4;
  }

  &_container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .vs-toolbar {
      display: flex;
      justify-content: space-between;
      margin-bottom: 6px;

      .vs-btn {
        &_get {
          display: flex;
          padding: 4px;
          color: rgb(156 163 175);

          &:hover {
            color: rgb(107 114 128);
          }
        }

        &_selected_header {
          flex: 1 1 auto;
          font-weight: 600;
          font-size: 14px;
          line-height: 20px;
          padding: 4px;
          color: rgb(156 163 175);

          &:hover {
            color: rgb(107 114 128);
          }
        }
      }
    }

    .vs-row_weekdays {
      display: grid;
      grid-template-columns: repeat(7, minmax(0, 1fr));

      & > div {
        text-align: center;
        padding-bottom: 6px;
        font-size: 12px;
        line-height: 24px;
        color: rgb(107 114 128);
        cursor: default;
      }
    }

    .vs-calendar {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      background-color: rgb(255 255 255);

      .vs-row {
        flex-grow: 1;
        display: grid;

        &_day {
          grid-template-columns: repeat(7, minmax(0, 1fr));
        }

        &_month_year {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .vs-btn {
          font-weight: 500;
          font-size: 0.875rem;
          line-height: 1.25rem;

          &:enabled:hover {
            color: #000;
            background-color: rgb(241 245 249);
          }

          &_ecluded {
            color: rgb(156 163 175);
          }

          &_current {
            color: rgb(79 70 229);
          }

          &_selected {
            color: #fff;
            background-color: var(--primary);
          }
        }
      }
    }
  }
}
</style>
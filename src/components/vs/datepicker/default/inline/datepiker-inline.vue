<script lang="ts">
import { defineComponent } from 'vue'
import { useDatepicker } from '../../setup'
import { DatepickerContract } from '../../contract'
import { VsIcon } from '@/components/vs/icon'

export default defineComponent({
  name: 'DatepikerInline',
  components: {
    VsIcon
  },
  extends: DatepickerContract,
  setup(props) {
    return useDatepicker(props)
  },
})
</script>

<template>
  <div
    :class="[
      'main',
      {
        'main_disabled': disabled
      }
    ]"
  >
    <div
      class="content_toolbar"
    >
      <button
        class="btn_get"
        @click="getPreviousToolbar"
      >
        <vs-icon
          name="chevron-left"
          height="25px"
          width="25px"
        />
      </button>
      <button 
        class="btn_selected"
        @click="selectedHeaderToolbar"
      >
        {{ headerToolbar }}
      </button>
      <button
        class="btn_get"
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
      class="row_weekdays row_day"
    >
      <div
        v-for="day in weekdays"
        :key="day"
      >
        {{ day }}
      </div>
    </div>

    <div class="content_calendar">
      <div
        v-for="(items, index) in datas"
        :key="index"
        :class="[
          'row',
          {
            'row_day': view === 'day',
            'row_month_year': view !== 'day'
          }
        ]"
      >
        <button
          v-for="(item, ind) in items"
          :key="ind"
          :data-date="item"
          :class="[
            'btn', 
            {
              'btn_ecluded': !isExcluded(item),
              'btn_current': isCurrent(item),
            }
          ]"
          @click="selectItem(item)"
        >
          <span 
            :class="[
              'span',
              {
                'span_selected': isSelected(item)
              }
            ]"
          >
            {{ getValue(item) }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 280px;
  &_disabled {
    pointer-events: none;
    opacity: 0.4;
  }
}
.content_toolbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.btn_get {
  display: flex;
  padding: 4px;
  color: rgb(156 163 175);
  &:hover {
    color: rgb(107 114 128);
  }
}

.btn_selected {
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

.row_weekdays {
  display: grid;
  & > div {
    text-align: center;
    padding-bottom: 6px;
    font-size: 12px;
    line-height: 24px;
    color: rgb(107 114 128);
    cursor: default;
  }
}

.content_calendar {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: rgb(255 255 255);
}

.row {
  flex-grow: 1;
  display: grid;
  &_day {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  &_month_year {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  &:enabled:hover {
    background-color: rgb(241 245 249);
  }
  &_ecluded {
    color: rgb(156 163 175);
  }
  &_current {
    color: rgb(79 70 229);
  }
  &_left_top {
    border-top-left-radius: 0.5rem;;
  }
  &_right_top {
    border-top-right-radius: 0.5rem; 
  }
  &_left_bottom {
    border-bottom-left-radius: 0.5rem;
  }
  &_right_bottom {
    border-bottom-right-radius: 0.5rem;
  }
}

.span {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 28px;
  &_selected {
    color: #fff;
    background-color: var(--primary);
    border-radius: 9999px;
  }
}
</style>
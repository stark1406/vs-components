<script lang="ts">
import { defineComponent } from 'vue'
import { useActionButtons } from '../setup'
import { ActionButtonsContract } from '../contract'

export default defineComponent({
  name: 'ActionButtons',
  extends: ActionButtonsContract,
  setup() {
    return useActionButtons()
  },
})
</script>

<template>
  <div
    class="vs-content"
  >
    <div>
      <button
        v-if="isToday"
        class="vs-btn_today"
        @click="today"
      >
        {{ currentDay }}
      </button>
    </div>
    <div>
      <button
        v-if="isSelect"
        class="vs-btn"
        @click="select"
      >
        Выбрать
      </button>
      <button
        v-if="isClear"
        class="vs-btn"
        @click="clear"
      >
        Очистить
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vs-content {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.vs-btn {
  padding: 5px;
  color: rgb(156 163 175);
  &:enabled:hover {
    color: rgb(51 65 85);
  }
}

.vs-btn_today {
  padding: 5px;
  color: var(--primary);
  &:enabled:hover {
    color: rgb(51 65 85);
  }
}
</style>
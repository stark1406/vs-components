<script lang="ts">
import { defineComponent, SetupContext } from 'vue'
import { InputContract } from '../contract'
import { useInput } from '../setup'
import { ActionButtons } from '../components/action-buttons/index'
import type { InputProps } from '../types'

export default defineComponent({
  name: 'VsInput',
  components: {
    ActionButtons
  },
  extends: InputContract,
  setup(props: InputProps, ctx: SetupContext) {
    return useInput(props, ctx)
  },
})
</script>

<template>
  <div
    class="vs-input"
    :style="{
      width: width
    }"
  >
    <label
      :for="name"
      class="vs-input_label"
    >
      {{ label }}
    </label>
    <div
      :class="[
        'vs-input_content',
        `vs-input_content_${stylingMode}`
      ]"
    >
      <input
        :id="name"
        :type="type"
        :value="valueInput"
        :name="name"
        :placeholder="placeholder"
        :disabled="isDisabled"
        v-on="events"
      >
      <action-buttons 
        v-if="showClearButton && valueInput && !isDisabled"
      />
      <TransitionGroup>
        <div
          v-for="element of error"
          :key="element"
          class="vs-input_content-error"
        >
          {{ element }}
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vs-input {
  &_label {
    font-weight: bold;
    font-size: 13px;
    margin-bottom: 3px;
    color: var(--primary);
  }

  &_content {
    display: flex;
    border: 1px solid var(--primary);
    position: relative;
    height: 40px;
    margin-top: 3px;

    input {
      margin: 0 10px;
      font-size: 15px;
      max-width: 100%;
      width: 100%;
      border: 0;

      &:focus {
        outline: none;
      }
    }

    &_default {
      border: 1px solid #ddd;
      border-radius: 7px;

      &:hover,
      &:focus-within {
        border: 1px solid var(--primary);
      }
    }

    &_underlined {
      border: 0;
      border-bottom: 1px solid #ddd;

      &:hover {
        border-bottom: 1px solid var(--primary);
      }

      &:focus-within {
        outline: none;
        border-bottom: 1px solid var(--primary);
      }
    }

    .vs-input_content-error {
      background: var(--danger);
      margin-top: 4px;
      border-radius: 7px;
      font-size: 13px;
      color: #fff;
      padding: 5px;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
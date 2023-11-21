<script lang="ts">
import { defineComponent } from 'vue'
import { InputContract } from '../contract'
import { useInput } from '../setup'

export default defineComponent({
  name: 'VsInput',
  extends: InputContract,
  setup(props, ctx) {
    return useInput(props, ctx)
  },
})
</script>

<template>
  <div
    class="form-input"
    :style="{
      width: width
    }"
  >
    <div
      :class="[
        'content',
        `content_${stylingMode}`
      ]"
    >
      <label
        :for="name"
        class="input-label"
      >
        {{ label }}
      </label>
      <input
        :id="name"
        :class="[
          'input',
          `input_${stylingMode}`
        ]"
        :type="type"
        :value="value"
        :name="name"
        :placeholder="placeholder"
        @input="updateValue"
      >
      <TransitionGroup>
        <div
          v-for="element of error"
          :key="element"
          class="form-error"
        >
          <div class="form-error__message">
            {{ element }}
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    &_underlined {
      border-bottom: 1px solid #ddd;
    }
  }
.form {
  &-input {
    margin-bottom: 30px;
    position: relative;
  }
  &-error {
    background: var(--danger);
    margin-top: 4px;
    border-radius: 7px;
    font-size: 13px;
    color: #fff;
    padding: 5px;
  }
}
.input {
  padding: 0 10px;
  height: 40px;
  font-size: 15px;
  width: 100%;
  position: relative;
  z-index: 1;
  &_default {
    border: 1px solid var(--primary);
    border-radius: 7px;
  }
  &_underlined {
    border: 0;
    &:focus {
      outline: none;
      border-bottom: 1px solid var(--primary);
    }
  }
  &-label {
    font-weight: bold;
    font-size: 13px;
    margin-bottom: 3px;
    color: var(--primary);
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
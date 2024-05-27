<script lang="ts">
import { defineComponent } from 'vue'
import { SelectContract } from '../contract'
import { useSelect } from '../setup'
import { VsIcon } from '@vs/icon'
import { VsPopper } from '@vs/popper'
import { SelectItemsObject } from '../components/select-items-object'
import type { SelectProps } from '../types'

export default defineComponent({
  name: 'VsSelect',
  components: {
    VsIcon,
    VsPopper,
    SelectItemsObject
  },
  extends: SelectContract,
  setup(props: SelectProps, ctx) {
    return useSelect(props, ctx)
  },
})
</script>

<template>
  <div 
    ref="refSelect"
    :style="{
      width: width
    }"
  >
    <label
      class="vs-select_label"
    >
      {{ label }}
    </label>
    <div
      :class="[
        'vs-select_content',
        {
          'vs-select_content_disabled': isDisabled
        }
      ]"
    >
      <input
        class="vs-input"
        placeholder="placeholder"
        autocomplete="off"
        type="text"
        :disabled="isDisabled"
        :readonly="true"
        :value="valueInput"
        @click="clickSelect"
      >
      <div class="vs-select_container-buttons">
        <div 
          v-if="showClearButton && keyValue && !isDisabled"
          class="vs-select_clear"
          @click="clickClear"
        >
          <vs-icon
            name="cross-delete"
            width="20px"
            height="20px"
            color="#999999"
            hover-color="var(--primary)"
          />
        </div>
        <div 
          v-if="showDropDownButton"
          class="vs-select_drop-down"
          @click="clickSelect"
        >
          <vs-icon
            :class="[
              'vs-icon-select_drop-down',
              {
                'vs-icon-select_drop-down_select': isVisibleItemsObject
              }
            ]"
            name="chevron-down"
            width="20px"
            height="20px"
          />
        </div>
      </div>
    </div>
  </div>

  <vs-popper
    v-model:visible="isVisibleItemsObject"
    :target="refSelect"
    placement="bottom"
    :width="selectWidth"
  >
    <select-items-object
      v-if="displayExpr && keyExpr"
      v-model:value="keyValue"
      :items="items"
      :display-expr="displayExpr"
      :key-expr="keyExpr"
      @changed:value="changedValue"
    />
  </vs-popper>
</template>

<style lang="scss" scoped>
.vs-select_label {
  font-weight: bold;
  font-size: 13px;
  color: var(--primary);
}

.vs-select_content {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 7px;
  position: relative;
  height: 40px;
  margin-top: 3px;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--primary);
  }

  &:focus-within {
    border: 1px solid var(--primary);
  }

  &_disabled {
    opacity: .5;
  }

  input {
    margin: 0 10px;
    font-size: 15px;
    max-width: 100%;
    width: 100%;
    cursor: pointer;
    border: 0;

    &:focus {
      outline: none;
    }
  }

  .vs-select_container-buttons {
    display: flex;

    .vs-select_clear, .vs-select_drop-down {
      padding: 10px;
    }

    .vs-icon-select_drop-down {
      transform: rotate(0deg);
      transition: transform .3s;

      &_select {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
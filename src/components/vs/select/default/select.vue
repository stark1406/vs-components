<script lang="ts">
import { defineComponent } from 'vue'
import { SelectContract } from '../contract'
import { useSelect } from '../setup'
import { VsIcon } from '@vs/icon'
import { VsPopper } from '@vs/popper'
import { SelectItemsObject } from '../components/select-items-object'

export default defineComponent({
  name: 'VsSelect',
  components: {
    VsIcon,
    VsPopper,
    SelectItemsObject
  },
  extends: SelectContract,
  setup(props, ctx) {
    
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
      class="vs-input_label"
    >
      {{ label }}
    </label>
    <div
      class="vs-content_select"
    >
      <input
        :class="[
          'vs-input',
          `vs-input_default`
        ]"
        placeholder="placeholder"
        autocomplete="off"
        type="text"
        :readonly="true"
        :value="valueInput"
        @click="clickSelect"
      >
      <div class="vs-container_buttons">
        <div 
          v-if="showClearButton && keyValue"
          class="vs-clear"
          @click="clickClear"
        >
          <vs-icon
            class="vs-icon_clear"
            name="cross-delete"
            width="20px"
            height="20px"
          />
        </div>
        <div 
          v-if="showDropDownButton"
          class="vs-drop_down"
          @click="clickSelect"
        >
          <vs-icon
            :class="[
              'vs-icon_drop_down',
              {
                'vs-icon_drop_down_select': isVisibleItemsObject
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
.vs-content_select {
  display: flex;
  border: 1px solid var(--primary);
  border-radius: 7px;
  position: relative;
  height: 40px;
  margin-top: 3px;
  cursor: pointer;
}

.vs-container_buttons {
  display: flex;
}
.vs-input {
  margin: 0 10px;
  font-size: 15px;
  max-width: 100%;
  width: 100%;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &_default {
    border: 0;

  }
  &_label {
    font-weight: bold;
    font-size: 13px;
    color: var(--primary);
  }
}

.vs-clear, .vs-drop_down {
  padding: 10px;
}

.vs-icon_clear {
  color: #999
}

.vs-icon_drop_down {
  transform: rotate(0deg);
  transition: transform .3s;
  &_select {
    transform: rotate(180deg);
  }
}
</style>
<script lang="ts">
import { defineComponent } from 'vue'
import { SelectItemsObjectContract } from '../contract'
import { useSelectItemsObject } from '../setup'

export default defineComponent({
  name: 'SelectItemsObject',
  extends: SelectItemsObjectContract,
  setup(props, ctx) {
    return useSelectItemsObject(props, ctx)
  },
})
</script>

<template>
  <div
    class="vs-items"
  >
    <div
      v-for="item in items"
      :key="item[keyExpr]"
      :class="[
        'vs-item',
        {
          'vs-item_selected': isSelected(item)
        }
      ]"
      @click="selectItem(item)"
    >
      {{ item[displayExpr] }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vs-items {
  z-index: 10px;
  background-color: #fff;
  border-radius: 7px;
  padding: 4px 0px;
  max-height: 300px;
  overflow: auto;
}

.vs-item {
  cursor: pointer;
  padding: 7px 9px;
  &_selected {
    background-color: var(--primary);
    color: #fff;
  }
  &:hover {
    background-color: #f1f1f1;
    color: #000;
  }
  &:active {
    background-color: var(--primary);
    color: #fff;
  }
}
</style>
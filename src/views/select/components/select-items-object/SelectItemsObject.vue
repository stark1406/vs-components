<script lang="ts" setup>
import { ref } from 'vue'
import { VsSelect } from '@vs/select'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { SelectItemsObject, ItemsObject } from '../types'

const valueSelect = ref<number>(4)

const items: ItemsObject[] = [
  {
    name: 'Item 1',
    id: 1
  },
  {
    name: 'Item 2',
    id: 2
  },
  {
    name: 'Item 3',
    id: 3
  },
  {
    name: 'Item 4',
    id: 4
  },
  {
    name: 'Item 5',
    id: 5
  }
]

const attributes: SelectItemsObject[] = [
  {
    'v-model:value': '...',
    label: 'Name',
    ':items': '...',
    'display-expr': 'name',
    'key-expr': 'id',
    ':show-clear-button': true,
    'width': '300px'
  }
]
</script>

<template>
  <h2>
    Select-items-object
  </h2>
  <widget-code-view
    component="select"
    :attributes="attributes"
  >
    <div class="content">
      <vs-select
        v-model:value="valueSelect"
        label="Items"
        :items="items"
        display-expr="name"
        key-expr="id"
        show-clear-button
        width="300px"
      />
    </div>
  </widget-code-view>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  min-width: 100%;
}
</style>
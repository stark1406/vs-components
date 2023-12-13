<script lang="ts" setup>
import { VsButton } from '@vs/button'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { Icon } from '../types'

const attributes: Icon[] = [
  {
    color: 'primary',
    icon: 'heart',
    'is-outlined': true,
  },
  {
    color: 'secondary',
    icon: 'hand'
  },
  {
    color: 'success',
    icon: 'address-book',
    'is-outlined': true,
  },
  {
    color: 'info',
    icon: 'credit-card'
  },
  {
    color: 'warning',
    icon: 'lemon',
    'is-outlined': true,
  },
  {
    color: 'danger',
    icon: 'hourglass'
  }
]
</script>

<template>
  <h2>
    Icon
  </h2>
  <widget-code-view
    component="button"
    :attributes="attributes"
  >
    <div class="content">
      <div
        v-for="(items, ind) in attributes"
        :key="ind"
        class="item"
      >
        <vs-button
          :icon="items.icon"
          :color="items.color"
          :is-outlined="items['is-outlined']"
        />
      </div>
    </div>
  </widget-code-view>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 100%;
}

.item {
  margin: 10px;
}
</style>
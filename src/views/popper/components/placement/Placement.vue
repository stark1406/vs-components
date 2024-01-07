<script lang="ts" setup>
import { ref } from 'vue'
import { VsPopper } from '@vs/popper'
import { VsButton } from '@vs/button'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { PopperPlacement } from '../types'

const buttonRefBottom = ref<HTMLElement | null>(null)
const isPopperVisibleBottom = ref<boolean>(false)

const buttonRefTop = ref<HTMLElement | null>(null)
const isPopperVisibleTop = ref<boolean>(false)

const buttonRefLeft = ref<HTMLElement | null>(null)
const isPopperVisibleLeft = ref<boolean>(false)

const buttonRefRight = ref<HTMLElement | null>(null)
const isPopperVisibleRight = ref<boolean>(false)

const togglePopper = (placement: string): void => {
  if (placement === 'bottom') {
    isPopperVisibleBottom.value = !isPopperVisibleBottom.value
  }
  else if (placement === 'top') {
    isPopperVisibleTop.value = !isPopperVisibleTop.value
  }
  else if (placement === 'left') {
    isPopperVisibleLeft.value = !isPopperVisibleLeft.value
  }
  else if (placement === 'right') {
    isPopperVisibleRight.value = !isPopperVisibleRight.value
  }
}

const attributes: PopperPlacement[] = [
  {
    'v-model:visible': 'isPopperVisibleLeft',
    ':target': 'buttonRefLeft',
    'placement': 'left',
    'width': '200px'
  },
  {
    'v-model:visible': 'isPopperVisibleBottom',
    ':target': 'buttonRefBottom',
    'placement': 'bottom',
    'width': '200px'
  },
  {
    'v-model:visible': 'isPopperVisibleTop',
    ':target': 'buttonRefTop',
    'placement': 'top',
    'width': '200px'
  },
  {
    'v-model:visible': 'isPopperVisibleRight',
    ':target': 'buttonRefRight',
    'placement': 'right',
    'width': '200px'
  }
]
</script>

<template>
  <h2>
    Placement
  </h2>
  <widget-code-view
    component="popper"
    :attributes="attributes"
  >
    <div class="content">
      <div class="row">
        <vs-button
          ref="buttonRefLeft"
          label="Left"
          @click="togglePopper('left')"
        />
        <vs-popper
          v-model:visible="isPopperVisibleLeft"
          :target="buttonRefLeft"
          placement="left"
          width="200px"
        >
          <div class="popper_content">
            Popper content posted here. Placement: left.
          </div>
        </vs-popper>
      </div>

      <div class="row">
        <vs-button
          ref="buttonRefBottom"
          label="Bottom"
          @click="togglePopper('bottom')"
        />
        <vs-popper
          v-model:visible="isPopperVisibleBottom"
          :target="buttonRefBottom"
          placement="bottom"
          width="200px"
        >
          <div class="popper_content">
            Popper content goes here. Placement: bottom.
          </div>
        </vs-popper>
      </div>

      <div class="row">
        <vs-button
          ref="buttonRefTop"
          label="Top"
          @click="togglePopper('top')"
        />
        <vs-popper
          v-model:visible="isPopperVisibleTop"
          :target="buttonRefTop"
          placement="top"
          width="200px"
        >
          <div class="popper_content">
            Popper content posted here. Placement: top.
          </div>
        </vs-popper>
      </div>

      <div class="row">
        <vs-button
          ref="buttonRefRight"
          label="Right"
          @click="togglePopper('right')"
        />
        <vs-popper
          v-model:visible="isPopperVisibleRight"
          :target="buttonRefRight"
          placement="right"
          width="200px"
        >
          <div class="popper_content">
            Popper content posted here. Placement: right.
          </div>
        </vs-popper>
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

.row {
  margin: 10px;
}

.popper_content {
  padding: 15px;
}
</style>
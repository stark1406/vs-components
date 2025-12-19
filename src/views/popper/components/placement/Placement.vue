<script lang="ts" setup>
import { ref } from 'vue'
import { type Target, VsPopper, type Placement } from '@vs/popper'
import { VsButton } from '@vs/button'
import WidgetCodeView from '@widgets/CodeView/WidgetCodeView.vue'
import type { PopperPlacement } from '../types'

defineProps({
  header: {
    type: String,
    default: '',
  },
})

const TEXT = 'Popper content posted here. Placement'

const PLACEMENTS = ['left', 'bottom', 'top', 'right'] as const

const buttonRefs = ref<Record<Placement, Target>>({
  left: null,
  bottom: null,
  top: null,
  right: null,
})

const popperVisible = ref<Record<Placement, boolean>>({
  left: false,
  bottom: false,
  top: false,
  right: false,
})

const togglePopper = (placement: Placement): void => {
  popperVisible.value[placement] = !popperVisible.value[placement]
}

const ATTRIBUTES: PopperPlacement[] = PLACEMENTS.map((placement) => ({
  'v-model:visible': `popperVisible.${placement}`,
  ':target': `buttonRefs.${placement}`,
  placement,
  width: '14rem',
}))
</script>

<template>
  <h2>{{ header }}</h2>
  <widget-code-view component="popper" :attributes="ATTRIBUTES">
    <div class="content">
      <div v-for="placement in PLACEMENTS" :key="placement">
        <vs-button
          :ref="(el) => (buttonRefs[placement] = el as Target)"
          :label="placement.charAt(0).toUpperCase() + placement.slice(1)"
          @click="togglePopper(placement)"
        />
        <vs-popper
          v-model:visible="popperVisible[placement]"
          :target="buttonRefs[placement]"
          :placement="placement"
          width="14rem"
        >
          <div class="popper-content">{{ TEXT }}: {{ placement }}.</div>
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
  gap: var(--spacing-2);
}

.popper-content {
  padding: var(--spacing-2);
}
</style>

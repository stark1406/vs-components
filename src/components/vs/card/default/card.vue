<script lang="ts">
import { defineComponent } from 'vue'
import { CardContract } from '../contract'

export default defineComponent({
  name: 'VsCard',
  extends: CardContract,
})
</script>

<template>
  <div class="vs-card">
    <div class="vs-card__header" v-if="title || $slots.title">
      <div v-if="title && !$slots.title">
        <div :class="['vs-title', alignTitle !== 'none' && `vs-title--${alignTitle}`]">
          {{ title }}
        </div>
        <div :class="['vs-subtitle', alignSubtitle !== 'none' && `vs-subtitle--${alignSubtitle}`]">
          {{ subtitle }}
        </div>
      </div>
      <slot v-else name="title" />
    </div>

    <div v-if="text && !$slots.default">
      <div :class="['vs-text', alignText !== 'none' && `vs-text--${alignText}`]">
        {{ text }}
      </div>
    </div>
    <slot v-else />

    <div class="vs-card__footer">
      <div v-if="footer && !$slots.footer">
        <div :class="['vs-footer', alignFooter !== 'none' && `vs-footer--${alignFooter}`]">
          {{ footer }}
        </div>
      </div>
      <slot v-else name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped src="../styles.scss"></style>

<script lang="ts">
import { defineComponent } from 'vue'
import { CardContract } from '../contract'
import { useCard } from '../setup'

export default defineComponent({
  name: 'VsCard',
  extends: CardContract,
  setup(props) {
    return useCard(props)
  },
})
</script>

<template>
  <div
    class="vs-card"
    :style="styleCard"
  >
    <div class="vs-card_header">
      <div v-if="title">
        <div
          :class="[
            'vs-title',
            {
              'vs-align_center': isAlignCenter,
              'vs-align_right': isAlignRight,
            }
          ]"
        >
          {{ title }}
        </div>
        <div
          :class="[
            'vs-subtitle',
            {
              'vs-align_center': isAlignCenter,
              'vs-align_right': isAlignRight,
            }
          ]"
        >
          {{ subtitle }}
        </div>
      </div>
      <slot
        name="title"
      />
    </div>

    <div class="vs-card_content">
      <div v-if="text">
        <div
          :class="[
            'vs-text',
            {
              'vs-align_center': isAlignCenter,
              'vs-align_right': isAlignRight,
            }
          ]"
        >
          {{ text }}
        </div>
      </div>
      <slot />
    </div>

    <div class="vs-card_footer">
      <div v-if="footer">
        <div
          :class="[
            'vs-footer',
            {
              'vs-align_center': isAlignCenter,
              'vs-align_right': isAlignRight,
            }
          ]"
        >
          {{ footer }}
        </div>
      </div>
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vs-card {
  background: var(--surface-card);
  border: var(--card-border);
  border-radius: 10px;
  padding: 2rem;
}

.vs-card_header {
  margin-bottom: 10px;
}
.vs-card_content {
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.vs-card_footer {
  margin-top: 10px;
}

.vs-title {
  display: block;
  flex: none;
  font-size: 1.25rem;
  font-weight: 500;
  hyphens: auto;
  letter-spacing: 0.0125em;
  min-width: 0;
  margin-bottom: 5px;
  overflow-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: none;
  white-space: nowrap;
  word-break: normal;
  word-wrap: break-word;
}

.vs-align_center {
  text-align: center;
}

.vs-align_right {
  text-align: right;
}

.vs-subtitle {
  display: block;
  flex: none;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  opacity: 0.6;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: none;
  white-space: nowrap;
}

.vs-text {
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  text-transform: none;
}
</style>
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
    class="card"
    :style="styleCard"
  >
    <div class="card_header">
      <div v-if="title">
        <div
          :class="[
            'title',
            {
              'align_center': isAlignCenter,
              'align_right': isAlignRight,
            }
          ]"
        >
          {{ title }}
        </div>
        <div
          :class="[
            'subtitle',
            {
              'align_center': isAlignCenter,
              'align_right': isAlignRight,
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

    <div class="card_content">
      <div v-if="text">
        <div
          :class="[
            'text',
            {
              'align_center': isAlignCenter,
              'align_right': isAlignRight,
            }
          ]"
        >
          {{ text }}
        </div>
      </div>
      <slot />
    </div>

    <div class="card_footer">
      <div v-if="footer">
        <div
          :class="[
            'footer',
            {
              'align_center': isAlignCenter,
              'align_right': isAlignRight,
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
.card {
  background: var(--surface-card);
  border: var(--card-border);
  border-radius: 10px;
  padding: 2rem;
}

.card_header {
  margin-bottom: 10px;
}
.card_content {
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.card_footer {
  margin-top: 10px;
}

.title {
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

.align_center {
  text-align: center;
}

.align_right {
  text-align: right;
}

.subtitle {
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

.text {
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  text-transform: none;
}
</style>
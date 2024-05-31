<script lang="ts">
import { defineComponent } from 'vue'
import { useActionButtons } from '../setup'
import { VsIcon } from '@vs/icon'

export default defineComponent({
  name: 'ActionButtons',
  components: {
    VsIcon,
  },
  setup() {
    return useActionButtons()
  },
})
</script>

<template>
  <div class="vs-input_container-buttons">
    <div @click="clear">
      <vs-icon
        name="cross-delete"
        width="20px"
        height="20px"
        color="#999999"
        hover-color="var(--primary)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vs-input_container-buttons {
  display: flex;

  div {
    padding: 10px;
    cursor: pointer;
  }
}
</style>
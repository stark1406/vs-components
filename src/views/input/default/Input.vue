<script lang="ts" setup>
import { ref } from 'vue'
import { VsInput } from '@vs/input'
import { VsCard } from '@vs/card'

const valueName = ref<string>('')
const valueEmail = ref<string>('')
const valueNumber = ref<number>(0)

</script>

<template>
  <h1 class="heading">
    Input
  </h1>
  <h2>
    Default
  </h2>
  <vs-card>
    <div class="content">
      <vs-input
        v-model:value="valueName"
        label="Name"
        name="name"
        width="300px"
        placeholder="Name"
      />
    </div>
  </vs-card>
  <h2>
    Underlined
  </h2>
  <vs-card>
    <div class="content">
      <vs-input
        v-model:value="valueEmail"
        label="Email"
        name="email"
        type="email"
        width="300px"
        styling-mode="underlined"
        placeholder="Email"
      />
    </div>
  </vs-card>
  <h2>
    Number
  </h2>
  <vs-card>
    <div class="content">
      <vs-input
        v-model:value="valueNumber"
        label="Number"
        name="number"
        type="number"
        width="300px"
      />
    </div>
  </vs-card>
</template>

<style lang="scss" scoped>
.heading {
  border-left: 5px solid var(--primary);
  padding-left: 15px;
}

.content {
  display: flex;
  justify-content: center;
  min-width: 100%;
}
</style>
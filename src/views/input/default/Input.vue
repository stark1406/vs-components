<script lang="ts" setup>
import { ref } from 'vue'
import { VsInput } from '@vs/input'

const valueName = ref<string>('')
const valueEmail = ref<string>('')
const valueNumber = ref<number>(0)

</script>

<template>
  <h1 class="heading">
    Input
  </h1>
  <div class="card">
    <vs-input
      v-model:value="valueName"
      label="Name"
      name="name"
      width="300px"
      placeholder="Name"
    />
    <vs-input
      v-model:value="valueEmail"
      label="Email"
      name="email"
      type="email"
      width="300px"
      styling-mode="underlined"
      placeholder="Email"
    />
    <vs-input
      v-model:value="valueNumber"
      label="Number"
      name="number"
      type="number"
      width="300px"
    />
  </div>
</template>

<style lang="scss" scoped>
.heading {
  border-left: 5px solid var(--primary);
  padding-left: 15px;
}
.card {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: center;
  gap: 1rem;
  background: var(--surface-card);
  border: var(--card-border);
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 2rem;
}
</style>
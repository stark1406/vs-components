<script setup lang="ts">
import { ref, computed } from 'vue'
import Header from '@/components/layout/Header.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import { VsIcon } from '@vs/icon'

const isOpenMenu = ref<boolean>(false)

function toggleMenu(): void {
  isOpenMenu.value = !isOpenMenu.value
}

const iconName = computed(() => {
  return isOpenMenu.value ? 'chevron-left' : 'chevron-right'
})
</script>

<template>
  <Header />
  <div class="container">
    <div
      class="sidebar-toggle"
      @click="toggleMenu"
    >
      <vs-icon 
        :name="iconName"
      />
    </div>
    <Sidebar :is-open-side-bar="isOpenMenu" />
    <div
      :class="[
        'content', 
        {
          content_full: !isOpenMenu
        }
      ]"
    >
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./styles/global.scss";
.content {
  margin-left: 250px;
  padding: 50px;
  transition: .2s;
  &_full {
    margin-left: 0;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background-color: var(--primary);
  height: 100%;
  top: 62px;
  z-index: 11;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

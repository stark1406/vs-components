<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import { ref } from 'vue'

const isOpenMenu = ref<boolean>(false)

function toggleMenu(): void {
  isOpenMenu.value = !isOpenMenu.value
}
</script>

<template>
  <Header />
  <div class="container">
    <div
      class="sidebar-toggle"
      @click="toggleMenu"
    >
      &#5125;
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
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background-color: var(--primary);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

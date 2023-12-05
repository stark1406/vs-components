<script lang="ts" setup>
import { ref, defineProps } from 'vue'

interface Link {
  name: string;
  href: string;
}

defineProps({
  isOpenSideBar: {
    type: Boolean,
    default: false,
    required: true,
  }
})

const links = ref<Array<Link>>([
  {
    name: 'Button',
    href: '/button'
  },
  {
    name: 'Input',
    href: '/input'
  },
  {
    name: 'Datepicker',
    href: '/datepicker'
  },
  {
    name: 'Card',
    href: '/card'
  },
  {
    name: 'Icon',
    href: '/icon'
  },
])
</script>

<template>
  <div
    :class="[
      'sidebar', 
      {
        sidebar_isopen: isOpenSideBar
      }
    ]"
  >
    <router-link
      v-for="link in links"
      :key="link.name"
      v-slot="{ isActive }"
      :to="link.href"
    >
      <div
        :class="[
          'sidebar__link',
          {
            'sidebar__active': isActive
          }
        ]"
      >
        {{ link.name }}
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.sidebar{
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  z-index: 10;
  &_isopen {
    transform: translateX(0px);
  }
  &__link {
    display: block;
    border-radius: 12px;
    padding: 10px;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
    &:hover {
      border-color: var(--primary)
    }
  }
  &__active {
    border-color: var(--primary)
  }
}
</style>
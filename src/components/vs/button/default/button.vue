<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useButton } from '../setup'
import type { color, type, size } from '../types'

export default defineComponent({
  name: 'VsButton',
  props: {
    label: {
      type: String,
      default: ''
    },
    color: {
      type: String as PropType<color>,
      default: 'primary',
    },
    isRounded: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<type>,
      default: 'button',
    },
    isOutlined: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String as PropType<size>,
      default: 'normal'
    }
  },
  emits: [ 'click' ],
  setup(props, ctx) {
    return useButton(props, ctx)
  },
})
</script>

<template>
  <button
    :class="[
      'btn', 
      `btn_${color}`,
      {
        'btn_rounded' : isRounded,
        'btn_outlined' : isOutlined,
        'btn_icon' : icon,
        'btn_large' : size === 'large',
      }
    ]"
    :disabled="isDisabled"
    :type="type"
    @click="clickOnButton"
  >
    <span v-if="icon">
      <font-awesome-icon :icon="`fa-regular fa-${icon}`" />
    </span>
    
    <span v-else>{{ label }}</span>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 0 20px;
  height: 40px;
  color: #fff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: .2s;
  &_primary {
    background: var(--primary);
    border: 1px solid var(--primary);
    &:enabled:hover {
      background: var(--primary-hover);
    }
  }
  &_secondary {
    background: var(--secondary);
    border: 1px solid var(--secondary);
    &:enabled:hover {
      background: var(--secondary-hover);
    }
  }
  &_success {
    background: var(--success);
    border: 1px solid var(--success);
    &:enabled:hover {
      background: var(--success-hover);
    }
  }
  &_info {
    background: var(--info);
    border: 1px solid var(--info);
    &:enabled:hover {
      background: var(--info-hover);
    }
  }
  &_warning {
    background: var(--warning);
    border: 1px solid var(--warning);
    &:enabled:hover {
      background: var(--warning-hover);
    }
  }
  &_danger {
    background: var(--danger);
    border: 1px solid var(--danger);
    &:enabled:hover {
      background: var(--danger-hover);
    }
  }
  &_rounded {
    border-radius: 15px;
  }
  &:disabled {
    opacity: .6;
    cursor: default;
  }
  &_outlined {
    background: transparent;
    color: #000;
    &:hover {
      color: #fff;
    }
  }
  &_icon {
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  &_large {
    height: 48px;
    padding: 0 30px;
  }
}
</style>
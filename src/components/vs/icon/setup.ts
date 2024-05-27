import { ref, watchEffect, computed, ComputedRef, CSSProperties } from 'vue'
import type { IconProps } from './types'

const cache = new Map<string, string | Promise<any>>()

export function useIcon(props: IconProps) {
  const content = ref<string>('')
  const colors: string[] = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger'
  ]

  watchEffect(async () => {
    const cachedContent = cache.get(props.name)

    if (typeof cachedContent === 'string') {
      content.value = cachedContent
    } else if (cachedContent) {
      content.value = await cachedContent
    } else {
      const response: Response = await fetch(`/src/assets/icons/${props.name}.svg`)
      const text: string = await response.text()

      cache.set(props.name, text)
      content.value = text
    }
  })

  const isColor: ComputedRef<boolean> = computed(() => colors.includes(props.color))

  const styleIcon: ComputedRef<CSSProperties> = computed(() => {
    const style: CSSProperties = {}

    if (props.height) {
      style.height = props.height
    }

    if (props.width) {
      style.width = props.width
    }

    if (props.color && !isColor.value) {
      style.color = props.color
    }

    if (props.hoverColor) {
      style['--vs-icon-hover-color'] = props.hoverColor
    }

    return style
  })

  return {
    content,
    styleIcon,
    isColor,
  }
}

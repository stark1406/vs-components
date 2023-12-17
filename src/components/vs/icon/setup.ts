import { ref, watchEffect, computed } from 'vue'

const cache = new Map<string, string | Promise<any>>()

export function useIcon(props) {
  const content = ref<string>('')

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

  const styleIcon = computed(() => {
    return `height: ${props.height}; width: ${props.width};`
  })

  return {
    content,
    styleIcon
  }
}

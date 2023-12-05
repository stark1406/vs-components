import { ref, watchEffect, computed } from 'vue'

export function useIcon(props) {
  const content = ref<string>('');

  watchEffect(async () => {
    const response: Response = await fetch(`/src/assets/icons/${props.name}.svg`);
    const text: string = await response.text();
    content.value = text
  })

  const styleIcon = computed(() => {
    return `height: ${props.height}; width: ${props.width};`
  })

  return {
    content,
    styleIcon
  }
}

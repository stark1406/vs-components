import { computed } from 'vue'

export function useCard(props) {
  const styleCard = computed(() => {
    return `
      height: ${props.height};
      max-height: ${props.maxHeight};
      min-height: ${props.minHeight};
      max-width: ${props.maxWidth};
      min-width: ${props.minWidth};
      width: ${props.width};
    `
  })

  return {
    styleCard
  }
}

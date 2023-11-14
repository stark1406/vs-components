import { SetupContext, onMounted, ref } from 'vue'

export function useIcon(props, ctx: SetupContext) {
  const content = ref<string>('');

  onMounted(async () => {
    const response: Response = await fetch(`/src/assets/icons/${props.name}.svg`);
    const text: string = await response.text();
    content.value = text
  });
  return {
    content
  }
}

import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { PopperStyle } from './types'

export function usePopper(props, ctx) {
  const isVisible = ref<boolean>(props.visible)
  const popperStyle = ref<PopperStyle>({
    position: 'absolute',
    zIndex: 1500,
    transform: '',
    top: '0px',
    left: '0px',
  })

  const indentation: number = 5
  const popperRef = ref<HTMLElement | null>(null)

  async function updatePopperPosition(): Promise<void> {
    const targetElement = props.target.$el || props.target
    const popperElement = popperRef.value

    await nextTick()

    if (targetElement && popperElement) {
      const targetRect = targetElement.getBoundingClientRect()
      const popperRect = popperElement.getBoundingClientRect()

      switch (props.placement) {
        case 'top':
          if (targetRect.top - popperRect.height < 0) {
            positionBottom(targetRect, popperRect)
          } else {
            positionTop(targetRect, popperRect)
          }
          break
  
        case 'bottom':
          if (targetRect.top + targetRect.height + popperRect.height > window.innerHeight) {
            positionTop(targetRect, popperRect)
          } else {
            positionBottom(targetRect, popperRect)
          }
          break
  
        case 'left':
          if (targetRect.left - popperRect.width < 0) {
            positionRight(targetRect, popperRect)
          } else {
            positionLeft(targetRect, popperRect)
          }
          break
  
        case 'right':
          if (targetRect.left + targetRect.width + popperRect.width > window.innerWidth) {
            positionLeft(targetRect, popperRect)
          } else {
            positionRight(targetRect, popperRect)
          }
          break
      }

    }
  }

  function positionTop(targetRect: DOMRect, popperRect: DOMRect): void {
    const tx: number = targetRect.left + targetRect.width / 2 - popperRect.width / 2
    const ty: number = targetRect.top - popperRect.height - indentation

    setTranslate(tx, ty)
  }

  function positionBottom(targetRect: DOMRect, popperRect: DOMRect): void {
    const tx: number = targetRect.left + targetRect.width / 2 - popperRect.width / 2
    const ty: number = targetRect.top + targetRect.height + indentation

    setTranslate(tx, ty)
  }

  function positionRight(targetRect: DOMRect, popperRect: DOMRect): void {
    const tx: number = targetRect.left + targetRect.width + indentation
    const ty: number = targetRect.top + targetRect.height / 2 - popperRect.height / 2

    setTranslate(tx, ty)
  }

  function positionLeft(targetRect: DOMRect, popperRect: DOMRect): void {
    const tx: number = targetRect.left - popperRect.width - indentation
    const ty: number = targetRect.top + targetRect.height / 2 - popperRect.height / 2

    setTranslate(tx, ty)
  }

  function setTranslate(tx: number, ty: number): void {
    popperStyle.value.transform = `translate(${tx}px, ${ty}px)`
  }
  
  async function handleOutsideClick(event: MouseEvent): void {
    const targetElement = props.target.$el || props.target
    const popperElement = popperRef.value

    await nextTick()

    if (targetElement && popperElement) {
      if (targetElement.contains(event.target as Node)) {
        return
      }
      if (!popperElement.contains(event.target as Node)) {
        ctx.emit('update:visible', false)
      }
    }
  }

  onMounted(() => {
    window.addEventListener('resize', updatePopperPosition)
    document.addEventListener('click', handleOutsideClick)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updatePopperPosition)
    document.removeEventListener('click', handleOutsideClick)
  })

  watch(() => props.visible, async (newVisible) => {
    isVisible.value = newVisible
    if (newVisible) {
      updatePopperPosition()
    }
  })

  return {
    popperRef,
    popperStyle,
    isVisible,
  }
}

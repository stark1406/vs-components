import {
  ref,
  onMounted,
  onBeforeUnmount,
  nextTick,
  watch,
  SetupContext,
  ComponentPublicInstance,
} from 'vue'
import type { PopperProps, Target } from './types'
import { HALF, INDENTATION } from './constants'

export function usePopper(props: PopperProps, ctx: SetupContext) {
  const isVisible = ref<boolean>(props.visible)
  const transform = ref<string>('')

  const popperRef = ref<HTMLElement | null>(null)

  function isVueComponent(target: unknown): target is ComponentPublicInstance {
    return !!target && typeof target === 'object' && '$el' in target
  }

  function getTargetElement(target: Target): HTMLElement | null {
    if (isVueComponent(target)) {
      return target.$el
    }

    return target
  }

  async function updatePopperPosition(): Promise<void> {
    const targetElement = getTargetElement(props.target)
    const popperElement = popperRef.value

    await nextTick()

    if (targetElement && popperElement) {
      const targetRect = targetElement.getBoundingClientRect()
      const popperRect = popperElement.getBoundingClientRect()

      switch (props.placement) {
        case 'top':
          if (targetRect.top - popperRect.height < 0) {
            positionBottom(targetRect, popperRect)
            return
          }
          positionTop(targetRect, popperRect)
          break

        case 'bottom':
          if (targetRect.top + targetRect.height + popperRect.height > window.innerHeight) {
            positionTop(targetRect, popperRect)
            return
          }
          positionBottom(targetRect, popperRect)
          break

        case 'left':
          if (targetRect.left - popperRect.width < 0) {
            positionRight(targetRect, popperRect)
            return
          }
          positionLeft(targetRect, popperRect)
          break

        case 'right':
          if (targetRect.left + targetRect.width + popperRect.width > window.innerWidth) {
            positionLeft(targetRect, popperRect)
            return
          }
          positionRight(targetRect, popperRect)
          break
      }
    }
  }

  function positionTop(targetRect: DOMRect, popperRect: DOMRect): void {
    const tx: number = targetRect.left + targetRect.width / HALF - popperRect.width / HALF
    const ty: number = targetRect.top - popperRect.height - INDENTATION

    setTranslate(tx, ty)
  }

  function positionBottom(targetRect: DOMRect, popperRect: DOMRect): void {
    const tx: number = targetRect.left + targetRect.width / HALF - popperRect.width / HALF
    const ty: number = targetRect.top + targetRect.height + INDENTATION

    setTranslate(tx, ty)
  }

  function positionRight(targetRect: DOMRect, popperRect: DOMRect): void {
    const tx: number = targetRect.left + targetRect.width + INDENTATION
    const ty: number = targetRect.top + targetRect.height / HALF - popperRect.height / HALF

    setTranslate(tx, ty)
  }

  function positionLeft(targetRect: DOMRect, popperRect: DOMRect): void {
    const tx: number = targetRect.left - popperRect.width - INDENTATION
    const ty: number = targetRect.top + targetRect.height / HALF - popperRect.height / HALF

    setTranslate(tx, ty)
  }

  function setTranslate(tx: number, ty: number): void {
    transform.value = `translate(${tx}px, ${ty}px)`
  }

  async function handleOutsideClick(event: MouseEvent): Promise<void> {
    const targetElement = getTargetElement(props.target)
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

  watch(
    () => props.visible,
    async (newVisible) => {
      isVisible.value = newVisible
      if (newVisible) {
        updatePopperPosition()
      }
    },
  )

  return {
    popperRef,
    transform,
    isVisible,
  }
}

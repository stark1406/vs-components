export default class generatorCode {
  private newLine: string = '\n'

  getCode(type: string, attributes: Record<string, string | number | boolean>[], slots: string[] = []): string {
    const componentBody: string = this.generateComponentBody(type, attributes, slots)

    return this.generateTemplate(componentBody)
  }

  private generateComponentStartTag(type: string): string {
    return `${this.newLine}${this.generateTab()}<vs-${type}${this.newLine}${this.generateTab(2)}`
  }

  private generateComponentAttributes(attributes: Record<string, string | number | boolean>): string {
    let componentAttributes: string = ''
    for (const [key, value] of Object.entries(attributes)) {
      if(typeof value === 'boolean' && value === true) {
        componentAttributes += `${key}${this.newLine}${this.generateTab(2)}`
      } else {
        componentAttributes += `${key}="${value}"${this.newLine}${this.generateTab(2)}`
      }
    }
    return componentAttributes
  }
  
  private generateComponentBody(type: string, attributesList: Record<string, string | number | boolean>[], slots: string[]): string {
    const startComponent: string = this.generateComponentStartTag(type)
    const components: string[] = []

    for (const attributes of attributesList) {
      const componentAttributes: string = this.generateComponentAttributes(attributes)
      components.push(componentAttributes.trim())
    }

    let bodyTemplate: string = ''
    let end: string = '/>'
    let slotsTemplate: string = ''

    if(slots.length > 0) {
      slotsTemplate = this.generateSlot(slots)
      end = `>${slotsTemplate}${this.newLine}${this.generateTab()}</vs-${type}>`
    }

    const endComponent: string = `${this.newLine}${this.generateTab()}${end}`

    for (const component of components) {
      bodyTemplate += startComponent + component + endComponent
    }

    return bodyTemplate
  }
  
  private generateTab(count: number = 1): string {
    return '\t'.repeat(count);
  }

  private generateTemplate(body: string, slot: string = ''): string {
    if(slot) {
      return `${this.newLine}${this.generateTab(2)}<template #${slot}>${this.newLine}${this.generateTab(3)}${body}${this.newLine}${this.generateTab(2)}</template>`
    }

    return `<template>${body}${this.newLine}</template>`
  }

  private generateSlot(slots: string[]): string {
    let content: string = ''

    for(const value of slots) {
      content += this.generateTemplate('...', value)
    }

    return content
  }
}
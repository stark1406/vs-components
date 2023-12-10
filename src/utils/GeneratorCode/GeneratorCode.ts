export default class generatorCode {
  private newLine: string = '\n'
  private tab: string = '\t'

  getCode(type: string, attributes: Record<string, string | number | boolean>[]): string {
    const componentBody: string = this.generateComponentBody(type, attributes)

    return this.generateTemplate(componentBody)
  }

  private generateComponentStartTag(type: string): string {
    return `${this.newLine}${this.tab}<vs-${type}${this.newLine}${this.tab}${this.tab}`
  }
  
  private generateComponentAttributes(attributes: Record<string, string | number | boolean>): string {
    let componentAttributes: string = ''
    for (const [key, value] of Object.entries(attributes)) {
      if(typeof value === 'boolean' && value === true) {
        componentAttributes += `${key}${this.newLine}${this.tab}${this.tab}`
      } else {
        componentAttributes += `${key}="${value}"${this.newLine}${this.tab}${this.tab}`
      }
    }
    return componentAttributes
  }
  
  private generateComponentBody(type: string, attributesList: Record<string, string | number | boolean>[]): string {
    const startComponent: string = this.generateComponentStartTag(type)
    const components: string[] = []
  
    for (const attributes of attributesList) {
      const componentAttributes: string = this.generateComponentAttributes(attributes)
      components.push(componentAttributes.trim())
    }
  
    let bodyTemplate: string = ''
    const endComponent: string = `${this.newLine}${this.tab}/>`
    
    for (const component of components) {
      bodyTemplate += startComponent + component + endComponent
    }
  
    return bodyTemplate
  }
  
  private generateTemplate(body: string): string {
    return `<template>${body}${this.newLine}</template>`
  }
}
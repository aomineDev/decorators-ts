import { performance } from 'perf_hooks'

const messure = (
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor => {
  const originalMethod = descriptor.value

  descriptor.value = (): number => {
    const start: number = performance.now()
    const result: number = originalMethod()
    const finish: number = performance.now()

    console.log(`Execution time: ${finish - start} milliseconds`)

    return result
  }

  return descriptor
}

class Rocket {
  @messure
  public launch (): void {
    console.log('Launching in 3... 2... 1... 🚀')
  }
}

const rocket: Rocket = new Rocket()
rocket.launch()

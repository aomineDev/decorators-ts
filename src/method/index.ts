const minimunFuel = (fuel: number) => (
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void => {
  const originalMethod = descriptor.value
  descriptor.value = function (): void {
    if (this.fuel > fuel) {
      originalMethod.apply(this)
    } else {
      console.log('Not enough fuel!')
    }
  }
}

class RocketThree {
  public readonly fuel: number = 75
  
  @minimunFuel(100)
  public launchToMars (): void {
    console.log('Launching to Mars in 3... 2... 1... 🚀')
  }

  @minimunFuel(50)
  public launchToMoon (): void {
    console.log('Launching to Moon in 3... 2... 1... 🚀')
  }
}

const rocketThree: RocketThree = new RocketThree()

rocketThree.launchToMars()
rocketThree.launchToMoon()

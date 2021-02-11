const changeValue = (value: number) => (target: Object, propertyKey: string) => {
  const getter = () => value

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: () => {}
   });
};

class RocketTwo {
  @changeValue(100)
  fuel = 50

  constructor(public name: string) {}
}

const rocketTwo: RocketTwo = new RocketTwo('dragon')
console.log('rocket name:', rocketTwo.name)
console.log('fuel:', rocketTwo.fuel) // 100
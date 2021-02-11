function BaseEntity (ctr: Function) {
  ctr.prototype.id = Math.random()
  ctr.prototype.created = new Date().toLocaleDateString()
}

function LuckyNumber (limit: number) {
  return function (ctr: Function) {
    ctr.prototype.lucky = Math.round(Math.random() * Math.round(limit))
  }
}

@BaseEntity
@LuckyNumber(3)
class UserTwo {
  constructor (public name: string) {}
}

@BaseEntity
@LuckyNumber(5)
class City {
  constructor (public zicode: number) {}
}

const userTwo: UserTwo = new UserTwo('aomine')
const city: City = new City(1)

console.log('user id:', userTwo.id)
console.log('user lucky number:', userTwo.lucky)
console.log('city id:', city.id)
console.log('city lucky number:', city.lucky)

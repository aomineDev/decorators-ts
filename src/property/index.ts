function min (limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string

    const getter = function (): string {
      return value
    }

    const setter = function (newVal: string): void {
      if (newVal.length < limit) {
        Object.defineProperty(target, 'errors', {
          value: `Your password should be bigger than ${limit}`
        })
      } else {
        value = newVal
      }
    }

    Object.defineProperty(target, propertyKey, { 
      get: getter,
      set: setter
     })
  }
}

class User {
  public readonly username: string

  @min(8)
  public readonly password: string

  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }
}

const user: User = new User('aomine', 'pass')

console.log(user.username)
console.log(user.errors)

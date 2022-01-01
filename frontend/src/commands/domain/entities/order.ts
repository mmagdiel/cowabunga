type IItemPrice = {
  id: number
  name: string
  image: string
  price: number
}

interface IBase {
  base: IItemPrice[]
}

interface IIngredient {
  ingredient: IItemPrice[]
}

class Base implements IBase {
  base: IItemPrice[]
  constructor() {
    this.base = []
  }
  get show(): IItemPrice[] {
    return this.base
  }
  set add(item: IItemPrice) {
    this.base.push(item)
  }
}

class Ingredient implements IIngredient {
  ingredient: IItemPrice[]
  constructor() {
    this.ingredient = []
  }
  get show(): IItemPrice[] {
    return this.ingredient
  }
  set add(item: IItemPrice) {
    this.ingredient.push(item)
  }
}
export { Base, Ingredient }

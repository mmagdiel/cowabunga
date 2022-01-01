type IItemPriceless = {
  id: number
  name: string
  image: string
}

interface IPizza {
  id: number
  name: string
  price: number
  base: IItemPriceless
  ingredients: IItemPriceless[]
}

class Pizza implements IPizza {
  id: number
  name: string
  price: number
  base: IItemPriceless
  ingredients: IItemPriceless[]
  constructor() {
    this.id = 0
    this.name = ""
    this.price = 0
    this.base = {
      id: 0,
      name: "",
      image: "",
    }
    this.ingredients = []
  }
  get showId() {
    return this.id
  }
}

interface IPizzas {
  pizzas: IPizza[]
}

export { Pizza }
export type { IPizza }

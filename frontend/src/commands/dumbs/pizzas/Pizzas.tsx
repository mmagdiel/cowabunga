import React from "react"
import { Crud, Error, Loading, useRoot } from "~core"
import { usePizzas } from "../../deal"

function Pizzas() {
  const root = useRoot()
  const { data, isLoading, isError } = usePizzas(root)
  if (isLoading) return <Loading />
  if (isError) return <Error />
  return <Crud data={data} />
}

export { Pizzas }

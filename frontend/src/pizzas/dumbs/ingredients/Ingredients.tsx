import React from "react"
import { Crud, Error, Loading, useRoot } from "~core"
import { useIngredients } from "../../deal"

function Ingredients() {
  const root = useRoot()
  const { data, isLoading, isError } = useIngredients(root)
  if (isLoading) return <Loading />
  if (isError) return <Error />
  return <Crud data={data} />
}

export { Ingredients }

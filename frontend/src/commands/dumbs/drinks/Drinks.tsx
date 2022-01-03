import React from "react"
import { Crud, Error, Loading, useRoot } from "~core"
import { useDrinks } from "../../deal"

function Drinks() {
  const root = useRoot()
  const { data, isLoading, isError } = useDrinks(root)
  if (isLoading) return <Loading />
  if (isError) return <Error />
  return <Crud data={data} />
}

export { Drinks }

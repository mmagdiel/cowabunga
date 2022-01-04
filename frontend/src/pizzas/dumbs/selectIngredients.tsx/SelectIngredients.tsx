import React from "react"
import { Error, Loading, Step, useRoot } from "~core"
import { useIngredients } from "../../deal"

function SelectIngredients() {
  const root = useRoot()
  const { data, isLoading, isError } = useIngredients(root)
  const handleClick = a => console.log(a.target)
  if (isLoading) return <Loading />
  if (isError) return <Error />
  return (
    <Step data={data} handleClick={handleClick}>
      <div>Hola</div>
    </Step>
  )
}

export { SelectIngredients }

import React from "react"
import { Crud, Error, Loading, useRoot } from "~core"
import { useDesserts } from "../../deal"

function Desserts() {
  const root = useRoot()
  const { data, isLoading, isError } = useDesserts(root)
  if (isLoading) return <Loading />
  if (isError) return <Error />
  return <Crud data={data} />
}

export { Desserts }

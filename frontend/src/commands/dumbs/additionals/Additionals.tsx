import React from "react"
import { Crud, Error, Loading, useRoot } from "~core"
import { useAdditionals } from "../../deal"

function Additionals() {
  const root = useRoot()
  const { data, isLoading, isError } = useAdditionals(root)
  if (isLoading) return <Loading />
  if (isError) return <Error />
  return <Crud data={data} />
}

export { Additionals }

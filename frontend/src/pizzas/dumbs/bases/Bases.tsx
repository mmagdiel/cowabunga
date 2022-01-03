import React from "react"
import { Crud, Error, Loading, useRoot } from "~core"
import { useBases } from "../../deal"

function Bases() {
  const root = useRoot()
  const { data, isLoading, isError } = useBases(root)
  if (isLoading) return <Loading />
  if (isError) return <Error />
  return <Crud data={data} />
}

export { Bases }

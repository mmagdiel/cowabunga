import React from "react"
import { Crud, Error, Loading, useRoot } from "~core"
import { useCommands } from "../../deal"

function Commands() {
  const root = useRoot()
  const { data, isLoading, isError } = useCommands(root)
  if (isLoading) return <Loading />
  if (isError) return <Error />
  return <Crud data={data} />
}

export { Commands }

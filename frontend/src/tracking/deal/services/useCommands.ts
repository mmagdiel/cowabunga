import useSWR from "swr"
import { earn } from "../../../core"

function useCommands(api) {
  const { data, error } = useSWR(`${api}/commands`, earn)
  const isLoading = !error && !data
  const isError = Boolean(error)
  return {
    data,
    isLoading,
    isError,
  }
}

export { useCommands }

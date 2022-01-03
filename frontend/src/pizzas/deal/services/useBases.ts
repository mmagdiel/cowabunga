import useSWR from "swr"
import { earn } from "../../../core"

function useBases(api) {
  const { data, error } = useSWR(`${api}/bases`, earn)
  const isLoading = !error && !data
  const isError = Boolean(error)
  return {
    data,
    isLoading,
    isError,
  }
}

export { useBases }

import useSWR from "swr"
import { earn } from "../../../core"

function useDesserts(api) {
  const { data, error } = useSWR(`${api}/desserts`, earn)
  const isLoading = !error && !data
  const isError = Boolean(error)
  return {
    data,
    isLoading,
    isError,
  }
}

export { useDesserts }

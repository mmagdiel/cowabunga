import useSWR from "swr"
import { earn } from "../../../core"

function useDrinks(api) {
  const { data, error } = useSWR(`${api}/drinks`, earn)
  const isLoading = !error && !data
  const isError = Boolean(error)
  return {
    data,
    isLoading,
    isError,
  }
}

export { useDrinks }

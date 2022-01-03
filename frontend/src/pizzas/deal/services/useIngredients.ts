import useSWR from "swr"
import { earn } from "../../../core"

function useIngredients(api) {
  const { data, error } = useSWR(`${api}/ingredients`, earn)
  const isLoading = !error && !data
  const isError = Boolean(error)
  return {
    data,
    isLoading,
    isError,
  }
}

export { useIngredients }

import useSWRImmutable from "swr/immutable"
import { earn } from "../../../core"

function useIngredients(api) {
  const { data, error } = useSWRImmutable(`${api}/ingredients`, earn)
  const isLoading = !error && !data
  const isError = Boolean(error)
  return {
    data,
    isLoading,
    isError,
  }
}

export { useIngredients }

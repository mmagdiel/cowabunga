import useSWR from "swr"
import { earn } from "../../../core"

function usePizzas(api) {
  const { data, error } = useSWR(`${api}/pizzas`, earn)
  const isLoading = !error && !data
  const isError = Boolean(error)
  return {
    data,
    isLoading,
    isError,
  }
}

export { usePizzas }

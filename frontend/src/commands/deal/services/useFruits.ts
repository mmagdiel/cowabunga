import useSWR from "swr"
import { earn } from "../../../core"

function useFruits(api) {
  const { data, error } = useSWR(`${api}/fruits`, earn)
  const isLoading = !error && !data
  const isError = Boolean(error)
  return {
    data,
    isLoading,
    isError,
  }
}

export { useFruits }

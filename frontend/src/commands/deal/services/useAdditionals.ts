import useSWR from "swr"
import { earn } from "../../../core"

function useAdditionals(api) {
  const { data, error } = useSWR(`${api}/additionals`, earn)
  const isLoading = !error && !data
  const isError = Boolean(error)
  return {
    data,
    isLoading,
    isError,
  }
}

export { useAdditionals }

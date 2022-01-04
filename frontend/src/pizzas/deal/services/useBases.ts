import useSWRImmutable from "swr/immutable"
import { earn } from "../../../core"

function useBases(api) {
  const { data, error } = useSWRImmutable(`${api}/bases`, earn)
  const isLoading = !error && !data
  const isError = Boolean(error)
  return {
    data,
    isLoading,
    isError,
  }
}

export { useBases }

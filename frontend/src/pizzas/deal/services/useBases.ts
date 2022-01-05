import useSWRImmutable from "swr/immutable"
import { earn } from "../../../core"
import { IBaseReturn } from "../../data"

function useBases(api: string): {
  data: IBaseReturn
  isLoading: boolean
  isError: boolean
} {
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

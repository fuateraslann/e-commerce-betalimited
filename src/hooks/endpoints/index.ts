import { useQuery, UseQueryResult } from 'react-query'
import { axios } from 'utils'
import { TCartProduct, TProduct } from 'types'

export const useGetListProducts = (): UseQueryResult<TProduct[]> => {
  return useQuery(
    'listProducts',
    async (): Promise<TProduct[]> => {
      return await axios
        .get(`/products`)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    {
      refetchOnWindowFocus: false,
    }
  )
}
export const useSearchProduct = (
  getSearch: () => Promise<TProduct[]>
): UseQueryResult<TProduct[]> => {
  return useQuery('searchProduct', getSearch, {
    refetchOnWindowFocus: false,
  })
}
export const useViewCart = (): UseQueryResult<TCartProduct[]> => {
  return useQuery(
    'viewCart',
    async (): Promise<TCartProduct[]> => {
      return await axios
        .get(`/view-cart`)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    {
      refetchOnWindowFocus: false,
    }
  )
}

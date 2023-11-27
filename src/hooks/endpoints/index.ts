import {
  useQuery,
  UseQueryResult,
  useMutation,
  UseMutationResult,
} from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'

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

export const useAddToCart = (): UseMutationResult<
  AxiosResponse<string, any>,
  unknown,
  { id: string },
  unknown
> => {
  const addToCart = useMutation({
    mutationFn: async (payload: {
      id: string
    }): Promise<AxiosResponse<string, any>> => {
      const data = await axios
        .post(`add-to-cart?id=${payload.id}`)
        .then((response) => {
          console.log(response.data)
          return response.data
        })
        .catch((error: AxiosError<{ error: any }>) => {
          console.log(error)
        })
      return data
    },
  })
  return addToCart
}

export const useSubtractFromCart = (): UseMutationResult<
  AxiosResponse<string, any>,
  unknown,
  { id: string },
  unknown
> => {
  const subtractFromCart = useMutation({
    mutationFn: async (payload: {
      id: string
    }): Promise<AxiosResponse<string, any>> => {
      const data = await axios
        .post(`subtract-from-cart?id=${payload.id}`)
        .then((response) => {
          console.log(response.data)
          return response.data
        })
        .catch((error: AxiosError<{ error: any }>) => {
          console.log(error)
          return error
        })
      return data
    },
  })
  return subtractFromCart
}

export const useViewCart = (): UseQueryResult<TCartProduct[]> => {
  return useQuery(
    'viewCart',
    async (): Promise<TCartProduct[]> => {
      return await axios
        .get(`/view-cart`)
        .then((response) => {
          if (typeof response.data == 'string') return []
          else return response.data
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

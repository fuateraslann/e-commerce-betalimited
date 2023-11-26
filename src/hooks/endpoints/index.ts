import { useQuery, UseQueryResult } from 'react-query'
import { AxiosResponse } from 'axios'
import { axios } from 'utils'

export const useGetListProducts = (): UseQueryResult<AxiosResponse> => {
  return useQuery(
    'listProducts',
    async (): Promise<any> => {
      return await axios
        .get(`/products`)
        .then((response) => {
          console.log(response)
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

import { Button, CircularProgress, Container, Grid } from '@mui/material'
import { useQueryClient, useIsFetching } from 'react-query'
import { isEmpty } from 'lodash'
import ProductCard from 'components/ProductCard'
import { useGetListProducts } from 'hooks/endpoints'
import { useEffect, useState } from 'react'
import { TProduct } from 'types'

const ProductList = () => {
  const queryClient = useQueryClient()

  const [products, setProducts] = useState<TProduct[] | undefined>([])
  const [sliceIndex, setSliceIndex] = useState<number>(3)
  const { data: listProductsData } = useGetListProducts()

  const searchedList = queryClient.getQueryData('searchProduct') as TProduct[]
  const isFetchingSearchedList = useIsFetching('searchProduct')

  useEffect(() => {
    if (!isFetchingSearchedList) {
      if (searchedList) setProducts(searchedList)
      else {
        setProducts(listProductsData)
      }
    }
  }, [listProductsData, searchedList, isFetchingSearchedList])

  const handleLoadMore = () => {
    setSliceIndex((prevState: number) => prevState + 3)
  }

  if (!products) return null

  return (
    <Container
      sx={{
        marginTop: '24px',
        height: '100vh',
        width: '100%',
      }}
    >
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {isEmpty(products) ? (
          <div>No Products Found ! </div>
        ) : (
          products.slice(0, sliceIndex).map((product: TProduct) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ marginBottom: 7 }}
              key={product.id}
            >
              <ProductCard product={product} />
            </Grid>
          ))
        )}
        {!(sliceIndex >= products.length) && (
          <Button
            onClick={handleLoadMore}
            variant="contained"
            sx={{ marginTop: 10 }}
          >
            Load More...
          </Button>
        )}
      </Grid>
    </Container>
  )
}

export default ProductList

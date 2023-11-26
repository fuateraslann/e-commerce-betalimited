import { Button, CircularProgress, Container, Grid } from '@mui/material'
import ProductCard from 'components/ProductCard'
import { useGetListProducts } from 'hooks/endpoints'
import { useState } from 'react'
import { TProduct } from 'types'

const ProductList = () => {
  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorOnFetchingProducts,
  } = useGetListProducts()

  const [sliceIndex, setSliceIndex] = useState<number>(3)
  const handleLoadMore = () => {
    setSliceIndex((prevState: number) => prevState + 3)
  }
  if (isLoadingProducts) return <CircularProgress />
  if (!products) return null

  return (
    <Container
      sx={{
        marginTop: '24px',
        height: '100vh',
        width: '100%',
      }}
    >
      {isLoadingProducts ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          {products.slice(0, sliceIndex).map((product: TProduct) => (
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
          ))}
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
      )}
    </Container>
  )
}

export default ProductList

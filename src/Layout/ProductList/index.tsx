import { Container, Grid } from '@mui/material'
import ProductCard from 'components/ProductCard'

const ProductList = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: '$10' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: '$20' },
  ]

  return (
    <Container
      sx={{
        marginTop: '24px',
        height: '100vh',
        width: '100%',
      }}
    >
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ProductList

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  useTheme,
  Rating,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useQueryClient } from 'react-query'
import { TProduct } from 'types'
import { useAddToCart, useSubtractFromCart } from 'hooks/endpoints'

const ProductCard = ({ product }: { product: TProduct }) => {
  const theme = useTheme()
  const queryClient = useQueryClient()
  const { mutateAsync: addToCart } = useAddToCart()
  const { mutateAsync: subtractFromCart } = useSubtractFromCart()

  const [quantity, setQuantity] = useState(0)

  const handleIncrease = async () => {
    await addToCart({ id: product.id }).then(() => {
      setQuantity(quantity + 1)
    })
    queryClient.refetchQueries('viewCart')
  }

  const handleDecrease = async () => {
    if (quantity > 0) {
      await subtractFromCart({ id: product.id }).then(() => {
        setQuantity(quantity - 1)
      })
    }
    queryClient.refetchQueries('viewCart')
  }

  return (
    <Card>
      <div style={{ backgroundColor: '#efefef', padding: 10 }}>
        <div
          style={{
            backgroundColor: theme.palette.primary.main,
            width: '20%',
            borderRadius: 10,
            textAlign: 'center',
          }}
        >
          <Typography sx={{ padding: 1 }} color={'white'}>
            {product.discount}
          </Typography>
        </div>
      </div>
      <CardMedia
        component="img"
        height="300px"
        src={product.image}
        alt={product.name}
        style={{ backgroundColor: '#efefef' }}
      ></CardMedia>

      <CardContent
        style={{
          height: 90,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Rating
              name={`rating-${product.id}`}
              value={product.rating}
              precision={0.1}
            />
            <Typography variant="body2" color="textSecondary">
              ({product.rating})
            </Typography>
          </div>
          <Typography
            style={{ marginTop: 15, fontWeight: 'bold' }}
            variant="body1"
            color={theme.palette.primary.main}
          >
            <span>${product.price} </span>
            <span
              style={{
                color: 'gray',
                textDecoration: 'line-through',
                marginLeft: 2,
              }}
            >
              ${product.originalPrice}
            </span>
          </Typography>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <div style={{ flex: 2 }}>
            <IconButton
              sx={{
                maxHeight: 30,
                border: '1px solid',
                borderColor: theme.palette.primary.main,
                borderRadius: 1,
                display: quantity == 0 ? 'none' : 'inline flex',
              }}
              onClick={handleDecrease}
            >
              <RemoveIcon sx={{ color: theme.palette.primary.main }} />
            </IconButton>
          </div>

          <Typography fontWeight={'bold'} style={{ flex: 1, margin: 5 }}>
            {quantity > 0 && quantity}
          </Typography>
          <IconButton
            sx={{
              flex: 2,
              maxHeight: 30,
              border: '1px solid',
              borderColor: theme.palette.primary.main,
              borderRadius: 1,
            }}
            onClick={handleIncrease}
          >
            <AddIcon sx={{ color: theme.palette.primary.main }} />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard

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

const ProductCard = ({ product }: any) => {
  const theme = useTheme()

  const [quantity, setQuantity] = useState(1)

  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <Card>
      <CardMedia
        component="img"
        height="240px"
        image={product.image}
        alt={product.name}
        style={{ objectFit: 'cover' }}
      />
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
              ({product.reviews} 1)
            </Typography>
          </div>
          <Typography
            style={{ marginTop: 15 }}
            variant="body1"
            color="textSecondary"
          >
            ${product.price}
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
                display: 'none',
              }}
            >
              <RemoveIcon sx={{ color: theme.palette.primary.main }} />
            </IconButton>
          </div>

          <div style={{ flex: 1, margin: 5 }}>1</div>
          <IconButton
            sx={{
              flex: 2,
              maxHeight: 30,
              border: '1px solid',
              borderColor: theme.palette.primary.main,
              borderRadius: 1,
            }}
          >
            <AddIcon sx={{ color: theme.palette.primary.main }} />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
import {
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useQueryClient } from 'react-query'
import { TCartProduct } from 'types'
import { useAddToCart, useSubtractFromCart } from 'hooks/endpoints'

interface IQuantityButtonsProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}
const QuantityButtons = ({
  quantity,
  onIncrease,
  onDecrease,
}: IQuantityButtonsProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={onDecrease}>
        <RemoveIcon />
      </IconButton>
      <Typography variant="body1" style={{ margin: '0 8px' }}>
        {quantity}
      </Typography>
      <IconButton onClick={onIncrease}>
        <AddIcon />
      </IconButton>
    </div>
  )
}

const CartProduct = ({ product }: { product: TCartProduct }) => {
  const theme = useTheme()
  const queryClient = useQueryClient()
  const { mutateAsync: addToCart } = useAddToCart()
  const { mutateAsync: subtractFromCart } = useSubtractFromCart()
  const handleIncrease = async () => {
    await addToCart({ id: product.productId })
    queryClient.refetchQueries('viewCart')
  }

  const handleDecrease = async () => {
    if (product.quantity > 0) {
      await subtractFromCart({ id: product.productId })
      queryClient.refetchQueries('viewCart')
    }
  }
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar></Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={product.name}
        secondary={
          <Typography
            style={{ fontWeight: 'bold' }}
            variant="body1"
            color={theme.palette.primary.main}
          >
            ${product.price}
          </Typography>
        }
        sx={{ marginRight: 10 }}
      />
      <QuantityButtons
        quantity={product.quantity}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
      />
    </ListItem>
  )
}

export default CartProduct

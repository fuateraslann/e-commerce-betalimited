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
import { TCartProduct } from 'types'

interface IQuantityButtonsProps {
  quantity: number
  onIncrease?: () => void
  onDecrease?: () => void
}
const QuantityButtons = ({
  quantity,
  onIncrease,
  onDecrease,
}: IQuantityButtonsProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={onDecrease} disabled={quantity === 1}>
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
      <QuantityButtons quantity={product.quantity} />
    </ListItem>
  )
}

export default CartProduct

import { Divider } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const ProductIcons = () => {
  return (
    <div
      style={{
        margin: 10,
        height: '1vh',
        width: '20%',
        display: 'flex',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
      }}
    >
      <VisibilityIcon />
      <Divider orientation="vertical" flexItem />
      <FavoriteBorderIcon />
      <Divider orientation="vertical" flexItem />
      <ShoppingCartIcon />
    </div>
  )
}

export default ProductIcons

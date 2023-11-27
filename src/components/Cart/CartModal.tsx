import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  DialogActions,
  Button,
  ListItem,
} from '@mui/material'
import { isEmpty } from 'lodash'

import { TCartProduct } from 'types'
import CartProduct from './CartProduct'
interface ICartModalProps {
  cartItems: TCartProduct[] | undefined
  onCloseModal: () => void
  openModal: boolean
}
const CartModal = ({ cartItems, onCloseModal, openModal }: ICartModalProps) => {
  return (
    <Dialog open={openModal} onClose={onCloseModal}>
      <DialogTitle>List Of Products</DialogTitle>
      <DialogContent>
        <List>
          {isEmpty(cartItems) ? (
            <ListItem> No Item Found...</ListItem>
          ) : (
            cartItems?.map((product: TCartProduct) => {
              return <CartProduct key={product.productId} product={product} />
            })
          )}
        </List>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onCloseModal}
          variant="contained"
          sx={{ marginTop: 10 }}
        >
          Buy Items
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CartModal

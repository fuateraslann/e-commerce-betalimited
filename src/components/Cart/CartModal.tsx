import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  DialogActions,
  Button,
} from '@mui/material'
import { useViewCart } from 'hooks/endpoints'
import React, { useEffect } from 'react'
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
          {cartItems &&
            cartItems?.map((product: TCartProduct) => {
              return <CartProduct key={product.productId} product={product} />
            })}
        </List>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onCloseModal}>
          Buy Items
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CartModal

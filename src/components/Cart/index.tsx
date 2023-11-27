import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useEffect, useMemo, useState } from 'react'
import { Container } from '@mui/material'
import CartModal from './CartModal'
import { useViewCart } from 'hooks/endpoints'
import { TCartProduct, TProduct } from 'types'

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

export default function Cart() {
  const [openModal, setOpenModal] = useState(false)
  const { data: cartItems, refetch } = useViewCart()

  const totalProductQuantity = useMemo(() => {
    return cartItems
      ?.map((e: TCartProduct) => e.quantity)
      .reduce((a: number, b: number) => a + b, 0)
  }, [cartItems])

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <Container>
      <IconButton onClick={handleOpenModal} aria-label="cart">
        <StyledBadge badgeContent={totalProductQuantity} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <CartModal
        cartItems={cartItems}
        openModal={openModal}
        onCloseModal={handleCloseModal}
      />
    </Container>
  )
}

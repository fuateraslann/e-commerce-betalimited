import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import CartModal from './CartModal'
import { useViewCart } from 'hooks/endpoints'

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

  useEffect(() => {
    if (openModal) {
      refetch()
    }
    console.log('asdas')
  }, [openModal])

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <Container>
      <IconButton onClick={handleOpenModal} aria-label="cart">
        <StyledBadge badgeContent={4} color="secondary">
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

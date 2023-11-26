export type TProduct = {
  id: string
  name: string
  price: number
  originalPrice: number
  rating: number
  image: string
  discount: string
}

export type TCartProduct = {
  productId: string
  quantity: number
  name: string
  price: number
}

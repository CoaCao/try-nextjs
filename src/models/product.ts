export interface ProductsResponse {
  data: Product[]
  pagination?: Pagination
}

export interface Product {
  id: number
  name: string
  shortDescription: string
  description: string
  originalPrice: number
  salePrice: number
  isPromotion: number
  promotionPercent: number
  images: string[]
  isFreeShip: boolean
  createdAt: number
  updatedAt: number
  categoryId: string
}

export interface Pagination {
  _page: number
  _limit: number
  _totalRows: number
}

// Internal types -------------------------------
type categoryType = {
  categoryId: string,
  name: string,
  commonId: string,
  parentId: any,
  thumbnailUrl: any
}

type pickingLocationType = 'PRO' | 'DRY';

type tagType = {
  tagId: string,
  name: string,
  commonId: string
}

// Exported Types ---------------------------------
export type Product = {
  productId: string,
  inventoryId: string,
  name: string,
  description: string,
  taxCodeId: string,
  taxProviderId: string,
  merchRank: number,
  pickingLocation?: pickingLocationType,
  showNutrition: boolean,
  variantId: string,
  baseUnitMultiplier?: any,
  sku: string,
  containerSize: number,
  orderBy: number,
  stock: number,
  realUnit?: any,
  realUnitFormatted?: any,
  realUnitAmount: any,
  realUnitIsApproximate: any,
  packagingUnitAmount: 2,
  packageUnitAmount: 2,
  packageUnit: string,
  packageUnitFormatted: string,
  price: 1.45,
  salePrice: any,
  saleMinQuantity: any,
  scalePrice: any,
  scaleMinQuantity: any,
  maxQuantity: any,
  retailPrice: any,
  saleStart: any,
  saleEnd: any,
  fromLocation: string,
  imperfectReason: string,
  productName: string,
  variantName?: any,
  productDescription?: any,
  imageFilename: string,
  hasNutritionInfo: boolean,
  tags: tagType[],
  categories: categoryType[],
  isVisible: boolean
}
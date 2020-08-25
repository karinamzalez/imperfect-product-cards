// Internal types -------------------------------
type pickingLocationType = 'PRO' | 'DRY';

type tagType = {
  tagId: string,
  name: string,
  commonId: string
}

// Exported Types ---------------------------------
export type CategoryObjType = {
  categoryId: string,
  name: CategoryName,
  commonId: CategoryCommonId,
  parentId: any,
  thumbnailUrl: any
}

export type CategoryName = 
  | "All Products"
  | "Produce"
  | "Fruit"
  | "Vegetables"cd 
  | "Non-Produce"
  | "Beverages"
  | "Breakfast"
  | "Bakery"
  | "Oils, Condiments, Spices and Spreads"
  | "Soups/Stocks"
  | "Dried Pantry Staples"
  | "Prepared Foods & Kits"
  | "Canned/Pickled Foods"
  | "Salty Snacks"
  | "Sweet Snacks"
  | "Bars"
  | "Baking"

export type CategoryCommonId =
  | "fruit"
  | "VEG"
  | "PRO"
  | "DRY"
  | "KNA7"
  | "BXD4"
  | "J2WO"
  | "5OBT"
  | "998D"
  | "4CX0"
  | "YISE"
  | "GY80"
  | "KIPB"
  | "O40D"
  | "GJYF"
  | "VTEF"

export type ProductType = {
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
  categories: CategoryObjType[],
  isVisible: boolean
}
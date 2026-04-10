export interface ProductBodySection {
  heading: string
  text: string
}

export interface ProductBody {
  componentId: string
  sections: ProductBodySection[]
}

import { retaBodies }   from './product-content-reta'
import { tirzBodies }   from './product-content-tirz'
import { semaBodies }   from './product-content-sema'
import { repairBodies } from './product-content-repair'
import { massBodies }   from './product-content-mass'

export const productBodies: Record<string, ProductBody> = {
  ...retaBodies,
  ...tirzBodies,
  ...semaBodies,
  ...repairBodies,
  ...massBodies,
}

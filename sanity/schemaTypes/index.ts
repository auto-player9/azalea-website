import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType],
}

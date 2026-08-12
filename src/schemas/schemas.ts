import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  price: z.coerce.number(),
  inventory: z.number(),
})

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string()
})

export const CategoriesResponseApiSchema = z.array(CategorySchema)

export const CategoryWithProductsResponseSchema = CategorySchema.extend({
  products: z.array(ProductSchema)
});

/** Shopping Cart */
const ContentsShoppingCartSchema = ProductSchema.pick({
  name: true,
  image: true,
  price: true,
  inventory: true,
}).extend({
  productId: z.number(),
  quantity: z.number()
});

export const CounponResponseSchema = z.object({
  name: z.string().default(''),
  message: z.string(),
  percentage: z.coerce.number().max(100).min(0).default(0),
});

export const ShoppingCartSchema = z.array(ContentsShoppingCartSchema);

const OrderContentSchema = z.object({
  productId: z.number(),
  quantity: z.number(),
  price: z.number()
});

export const OrderSchema = z.object({
  total: z.number(),
  coupon: z.string(),
  contents: z.array(OrderContentSchema).min(1, { message: 'The cart cannot be empty' })
});

/** Success / Error Response */
export const SuccessResponseSchema = z.object({
  message: z.string()
});

export const ErrorResponseSchema = z.object({
  message: z.array(z.string()),
  error: z.string(),
  statusCode: z.number()
});

export const ContentsSchema = z.object({
  id: z.number(),
  quantity: z.number(),
  price: z.string(),
  product: ProductSchema
});

export const TransactionResponseSchema = z.object({
  id: z.number(),
  total: z.string(),
  transactionDate: z.string(),
  discount: z.string(),
  coupon: z.string().nullable(),
  contents: z.array(ContentsSchema)
});

export const TransactionsResponseSchema = z.array(TransactionResponseSchema);

export type Product = z.infer<typeof ProductSchema>;
export type ShoppingCart = z.infer<typeof ShoppingCartSchema>;
export type CartItem = z.infer<typeof ContentsShoppingCartSchema>;
export type Coupon = z.infer<typeof CounponResponseSchema>;
export type Transaction = z.infer<typeof TransactionResponseSchema>;
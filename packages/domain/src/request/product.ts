import {z} from "@hono/zod-openapi"
import { type Product } from "../entity/product"

type productCreate_req = Partial<Record<keyof  Product , unknown>>

export const CreateProduct = z.object({
    code : z.string().min(4),
    product_name : z.string().min(6),
    cost : z.number().min(0),
} as productCreate_req)
import { createResponseSchema } from "../utils";
import { Product_Entity } from "../entity/product";
import {z} from 'zod';

export interface product_dto extends Omit<Product_Entity , "id" >{}
export interface productCreate extends Omit<Product_Entity , "id" | "is_publish" | "update_at" | "create_at"> {}
export interface productUpdate extends Omit<Product_Entity , "code"> {}


export const ProductSchema = z.object({
    code : z.number().optional(), 
    product_name : z.string().optional(),
    cost : z.number().optional(),
    created_at : z.string().optional(),
    updated_at : z.string().optional() 
} as Record<keyof Product_Entity , any> )

export const producRespone = createResponseSchema(ProductSchema)
export const productListRespone = createResponseSchema( z.array(ProductSchema) )
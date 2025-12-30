import type{Product_Entity} from "@repo/domain/entity/product.js"
import {int , sqliteTable , text,type SQLiteColumnBuilderBase } from "drizzle-orm/sqlite-core"

const productSchema: Record<keyof Product_Entity , SQLiteColumnBuilderBase> ={
    id: int().primaryKey({ autoIncrement: true }),
    code : text().unique().notNull(),
    product_name : text().notNull(),
    cost : int().notNull(),
    created_at : text().notNull(),
    updated_at : text().notNull(),
    is_publish: int("is_publish" , { mode: "boolean" }).notNull().default(true)
}

export const product = sqliteTable("user_table" , productSchema);
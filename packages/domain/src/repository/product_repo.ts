import { Product, Product_Entity } from "../entity/product";

export interface Product_Repository {
    
    getAll(): Promise<Product_Entity[]>
    getID(): Promise<Product_Entity>

    create(code : string , product_name : string , cost : number): Promise<Product_Entity>

    update(id: number , user: Partial<Product_Entity>):  Promise<Product_Entity>
    
    delete(id : number ) : Promise<boolean>
}
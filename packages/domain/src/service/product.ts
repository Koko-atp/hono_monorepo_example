import { product_dto, productCreate, productUpdate } from "../dto/product.dto";


export interface Product_Service {
    findallProduct() : Promise<product_dto[]>

    create(product: productCreate) : Promise<product_dto>
    update(product: productUpdate) : Promise<product_dto>
    delete(id : number) : Promise<boolean>
}
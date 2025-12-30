export interface Product {
    id : number,
    code : string,
    product_name : string ,
    cost : number , 
    created_at : string,
    updated_at : string,
    is_publish : boolean
}
export interface  Product_Entity  extends Partial<Product> {

}
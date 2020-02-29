export interface Category
{
  name: string;
  id: number;
  products: Array<Product>;
}


export interface Product
{
  product_id:number;
  name: string;
  rating: number;
  description: string;
  image: string;
  link: string;
}


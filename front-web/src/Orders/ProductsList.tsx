import ProductsCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[];
}

function ProductsList({ products }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(products => (  //mapeando a lista de produtos para aparecer na tela
                    <ProductsCard key={products.id} product={products} />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;
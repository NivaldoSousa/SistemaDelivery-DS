import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Product } from './types';

//construindo o array para montar a lista de produtos que vem do back
function Orders() {
const [products, setProducts] = useState<Product[]>([]);

//Fazendo a requisiçao para o back
useEffect(() =>{
fetchProducts()
.then(response => setProducts(response.data))
.catch(error => console.log(error))
}, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
        </div>
    )
}

export default Orders;
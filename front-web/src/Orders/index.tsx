import { useEffect, useState } from 'react';
import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { fetchProducts } from '../api';
import { Product } from './types';
import OrderLocation from './OrderLocation';


function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    //console.log(products);

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
       <div className = "orders-container">
           <StepsHeader />
           <ProductsList products = {products} />
           <OrderLocation />        
       </div>
    )
}
export default Orders;
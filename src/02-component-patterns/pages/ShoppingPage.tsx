import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

export const ShoppingPage = () => {

    const {shoppingCart, onProductCountChange} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>

                {
                    products.map( product => (
                        <ProductCard 
                            key={product.id}
                            product={product} 
                            className="bg-dark text-white" 
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                            >

                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-bold"/>
                            <ProductButtons className="custom-button"/>

                        </ProductCard>
                    ))
                }
            </div>
            <div className="shopping-cart">
                {
                    Object.values(shoppingCart).map( ({count, ...product}) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="small-card"
                            onChange={onProductCountChange}
                            value={count}
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}

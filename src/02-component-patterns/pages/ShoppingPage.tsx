import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
// import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {

    // const {shoppingCart, onProductCountChange} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <ProductCard 
                key={product.id}
                product={product} 
                className="bg-white"
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
                >
                {
                    ({reset, count , increaseBy,isMaxCountReached}) => (
                        <>
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-bold"/>
                            <ProductButtons className=""/>

                            <button onClick={reset}>Reset</button>
                            <button onClick={()=>increaseBy(-2)}>-2</button>
                            {!isMaxCountReached &&
                                <button onClick={()=>increaseBy(+2)}>+2</button>
                            }
                            {count}
                        </>
                    )
                }

            </ProductCard>
            
        </div>
    )
}

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>

                <ProductCard product={product}>
                  
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title className="text-bold"/>
                    <ProductCard.Buttons />
                  
                </ProductCard>

                <ProductCard product={product} className="bg-dark text-white">

                    <ProductImage className="custom-image"/>
                    <ProductTitle title={"nuevo cafe"} className="text-bold"/>
                    <ProductButtons className="custom-button"/>

                </ProductCard>

                <ProductCard product={product} style={{backgroundColor: '#70D1F8'}} >

                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />

                </ProductCard>

            </div>
        </div>
    )
}

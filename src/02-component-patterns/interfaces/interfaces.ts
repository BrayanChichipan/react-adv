import { Props as ProductCardProps} from '../components/ProductCard';
import { Props as ProductTitleProps} from '../components/ProductTitle';
import { Props as ProductImageProps} from '../components/ProductImage';

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: (v: number) => void;
}


export interface ProductCardHOCProps{
    ({ children, product }: ProductCardProps) : JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Buttons: () => JSX.Element;

}
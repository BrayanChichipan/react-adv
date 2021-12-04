import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps );
const {  Provider } = ProductContext;

export interface Props {
    product: Product;
    children: (args: ProductCardHandlers) => React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs)=>void;
    value?:number;
    initialValues?: InitialValues  //puede ser una interfaz para initalValues
}



export const ProductCard = ({ children ,product, className, style, onChange, value, initialValues }: Props) => {

    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct( { onChange, product, value, initialValues } );

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {
                children({
                    count: counter,
                    isMaxCountReached,
                    reset,
                    maxCount,
                    product,
                    increaseBy
                })
                }
            </div>
        </Provider>
    )
}

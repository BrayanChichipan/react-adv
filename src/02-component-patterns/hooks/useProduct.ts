import { useEffect, useRef, useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs{
    product: Product;
    onChange?: (args: onChangeArgs)=>void,
    value?: number
    initialValues?: InitialValues
}

export const useProduct = ({onChange, product, value = 0, initialValues}:useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);

    const increaseBy = (value: number) => {

        const newValue = counter+value;

        if( newValue >= 0 && newValue <= (initialValues?.maxCount || Infinity)  ){
            setCounter(newValue);
            onChange && onChange({product, count: newValue});
        }
        

    }

    const reset = () => setCounter(initialValues?.count || value); 

    useEffect(() => {
        if(isMounted.current) setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return { 
            counter, 
            maxCount: initialValues?.maxCount || Infinity,
            isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
            increaseBy,
            reset,
        }
}
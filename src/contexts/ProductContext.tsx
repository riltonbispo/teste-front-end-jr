import { useContext } from "react";
import { ProductType } from "../types/productType";

import { ProductActions, productReducer } from "../reducers/productReducer";
import { Dispatch, ReactNode, createContext, useReducer } from "react";

type ProductContextType = {
  product: ProductType;
  dispatch: Dispatch<ProductActions>;
};

export const ProductContext = createContext<ProductContextType | null>(null);

export const ProviderProductContext = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [product, dispatch] = useReducer(productReducer, {
    productName: "",
    descriptionShort: "",
    photo: "",
    price: 0,
  });

  return (
    <ProductContext.Provider value={{ product, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);

import { ProductType } from "../types/productType";

type AddAction = {
  type: "add";
  payload: ProductType;
};

export type ProductActions = AddAction;

export const productReducer = (
  product: ProductType,
  action: ProductActions
) => {
  switch (action.type) {
    case "add":
      return {
        productName: action.payload.productName,
        descriptionShort: action.payload.descriptionShort,
        photo: action.payload.photo,
        price: action.payload.price,
      };
    default:
      return product;
  }
};

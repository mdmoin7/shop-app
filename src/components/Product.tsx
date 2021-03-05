import React from "react";
import { ProductType } from "../types";
import Column from "./Column";
import ImageWithFallback from "./ImageWithFallback";
import ProductPrice from "./ProductPrice";

type ProductProps = {
  pData: ProductType;
  wishlist?: boolean;
  btnClick: (a: string) => void;
  selectedCurrency: string;
};

class Product extends React.Component<ProductProps> {
  renderStock(stock: boolean) {
    const testData = "abc";
    if (stock) {
      return (
        <button
          onClick={() => this.props.btnClick(testData)}
          className="btn btn-sm btn-success w-100"
        >
          Add to Cart
        </button>
      );
    }
    return (
      <button className="btn btn-sm btn-danger w-100" disabled>
        Out of Stock
      </button>
    );
  }
  render() {
    const { pData, wishlist, selectedCurrency } = this.props;

    return (
      <Column colSize={3}>
        <div className="p-4 text-center my-2 shadow-sm">
          <ImageWithFallback source={pData.productImage} />
          {/* <img src={pData.productImage} className="img-thumbnail" /> */}
          <h4 className="my-2">{pData.productName}</h4>
          {/* <h4>
          {selectedCurrency} {pData.productPrice}
        </h4> */}
          <ProductPrice
            code={selectedCurrency}
            productPrice={pData.productPrice}
            salePrice={pData.salePrice}
          />
          {/* <button>Add to {wishlist ? "Wishlist" : "Cart"}</button> */}
          {this.renderStock(pData.productStock)}
        </div>
      </Column>
    );
  }
}
export default Product;

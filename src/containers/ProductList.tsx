import React from "react";
import Product from "../components/Product";
import ProductService from "../services/ProductService";
import { ProductType, StoreType } from "../types";
import { connect } from "react-redux";
import Row from "../components/Row";
import { Dispatch } from "redux";
import CartActions from "../store/actions/CartActions";
import { RouteChildrenProps } from "react-router-dom";

type PListProps = {
  currencyCode: string;
  addItem: (p: ProductType) => void;
} & RouteChildrenProps;
type PListState = { pList: ProductType[] };

class ProductList extends React.Component<PListProps> {
  state: PListState = { pList: [] };
  componentDidMount(): void {
    this.getData();
  }
  async getData() {
    try {
      const response = await ProductService.getProducts();
      this.setState({ pList: response.data }); //console.log("success", response.data);
    } catch (e) {
      console.log("error", e);
    }
  }
  render() {
    return (
      <Row>
        {this.state.pList.map((value) => (
          <Product
            key={value.productId}
            selectedCurrency={this.props.currencyCode}
            pData={value}
            btnClick={(e) => {
              this.props.addItem(value); // add to cart
              this.props.history.push("/cart"); // navigate to cart
            }}
          />
        ))}
      </Row>
    );
  }
}
// connect(how to connect)(what to connect/component)
const mapStoreDataToProps = (storeData: StoreType) => {
  return {
    // prop_name : store_data
    currencyCode: storeData.currency,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addItem: (prod: ProductType) => dispatch(CartActions.addToCart(prod)),
    removeItem: (id: number) => dispatch(CartActions.removeItem(id)),
  };
};
export default connect(mapStoreDataToProps, mapDispatchToProps)(ProductList);

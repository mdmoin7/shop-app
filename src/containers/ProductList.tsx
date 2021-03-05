import React from "react";
import Product from "../components/Product";
import ProductService from "../services/ProductService";
import { ProductType, StoreType } from "../types";
import { connect } from "react-redux";
import Row from "../components/Row";

type PListProps = { currencyCode: string };
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
            btnClick={(e) => console.log("button clicked cart", e)}
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
export default connect(mapStoreDataToProps)(ProductList);

import React, { Component } from "react";
import $ from "jquery/dist/jquery";
import TopActions from "./TopActions";
import ProductsTable from "./ProductsTable";

export default class ReadProductsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.serverRequest = $.get(
      "http://localhost/d/php-rest-api/product/read.php",
      function(products) {
        this.setState({ products: products.records });
      }.bind(this)
    );
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    var filteredProducts = this.state.products;
    $(".page-header h1").text("Read Products");
    return (
      <div className="overflow-hidden">
        <TopActions changeAppMode={this.props.changeAppMode} />
        <ProductsTable
          products={filteredProducts}
          changeAppMode={this.props.changeAppMode}
        />
      </div>
    );
  }
}

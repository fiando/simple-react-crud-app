import React, { Component } from "react";
import $ from "jquery/dist/jquery";

export default class ReadOneProductComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: "",
      description: "",
      price: 0,
      category_name: ""
    };
  }

  componentDidMount() {
    var productId = this.props.productId;
    this.serverRequestProd = $.get(
      "http://localhost/d/php-rest-api/product/read_one.php?id=" + productId,
      function(product) {
        this.setState({ category_name: product.category_name });
        this.setState({ id: product.id });
        this.setState({ name: product.name });
        this.setState({ description: product.description });
        this.setState({ price: product.price });
      }.bind(this)
    );
    $(".page-header h1").text("Read Product");
  }

  componentWillUnmount() {
    this.serverRequestProd.abort();
  }

  render() {
    return (
      <div>
        <a
          href="#"
          onClick={() => this.props.changeAppMode("read")}
          className="btn btn-primary margin-bottom-1em"
        >
          Read Products
        </a>
        <form onSubmit={this.onSave}>
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{this.state.description}</td>
              </tr>
              <tr>
                <td>Price ($)</td>
                <td>${parseFloat(this.state.price).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>{this.state.category_name}</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

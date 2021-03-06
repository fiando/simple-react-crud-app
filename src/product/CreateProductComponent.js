import React, { Component } from "react";
import $ from "jquery/dist/jquery";

export default class CreateProductComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      selectedCategoryId: -1,
      name: "",
      description: "",
      price: "",
      successCreation: null
    };

    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    this.serverRequest = $.get(
      "http://localhost/d/php-rest-api/category/read.php",
      function (categories) {
        this.setState({
          categories: categories.records
        });
      }.bind(this)
    );

    $(".page-header h1").text("Create product");
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  onCategoryChange(e) {
    this.setState({ selectedCategoryId: e.target.value });
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  onPriceChange(e) {
    this.setState({ price: e.target.value });
  }

  onSave(e) {
    var form_data = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      category_id: this.state.selectedCategoryId
    };

    $.ajax({
      url: "http://localhost/d/php-rest-api/product/create.php",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(form_data),
      success: function (response) {
        this.setState({ successCreation: response["message"] });
        this.setState({ name: "" });
        this.setState({ description: "" });
        this.setState({ price: "" });
        this.setState({ selectedCategoryId: -1 });
      }.bind(this),
      error: function (xhr, resp, text) {
        console.log(xhr, resp, text);
      }
    });

    e.preventDefault();
  }

  render() {
    var categoriesOptions = this.state.categories.map(function (category) {
      return (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      );
    });

    return (
      <div>
        {this.state.successCreation === "Product was created." ? (
          <div className="alert alert-success">Product was saved.</div>
        ) : null}

        {this.state.successCreation === "Unable to create product." ? (
          <div className="alert alert-danger">
            Unable to save product. Please try again.
          </div>
        ) : null}

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
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    required
                    onChange={this.onNameChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <textarea
                    type="text"
                    className="form-control"
                    required
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Price ($)</td>
                <td>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    value={this.state.price}
                    required
                    onChange={this.onPriceChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Category</td>
                <td>
                  <select
                    onChange={this.onCategoryChange}
                    className="form-control"
                    value={this.state.selectedCategoryId}
                  >
                    <option value="-1">Select category...</option>
                    {categoriesOptions}
                  </select>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <button className="btn btn-primary" onClick={this.onSave}>
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

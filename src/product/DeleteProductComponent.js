import React, { Component } from "react";
import $ from "jquery/dist/jquery";

export default class DeleteProductComponent extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    $(".page-header h1").text("Delete Product");
  }

  onDelete(e) {
    var productId = this.props.productId;

    $.ajax({
      url: "http://localhost/d/php-rest-api/product/delete.php",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ id: productId }),
      success: function(response) {
        this.props.changeAppMode("read");
      }.bind(this),
      error: function(xhr, resp, text) {
        console.log(xhr, resp, text);
      }
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-body text-align-center">Are you sure?</div>
            <div className="panel-footer clearfix">
              <div className="text-align-center">
                <button
                  onClick={this.onDelete}
                  className="btn btn-danger m-r-1em"
                >
                  Yes
                </button>
                <button
                  onClick={() => this.props.changeAppMode("read")}
                  className="btn btn-primary"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}

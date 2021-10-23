import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      keyword: "",
    };
  }

  onChange(e) {
    this.setState({
      keyword: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.keyword === "") {
      this.props.setAlert("lütfen bir anahtar kelime giriniz !", "danger");
    } else {
      this.props.searchUsers(this.state.keyword);
      this.setState({
        keyword: "",
      });
    }
  }

  render() {
    return (
      <div className="container my-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              value={this.state.keyword}
              type="text"
              onChange={this.onChange}
              className="form-control"
            />
            <button type="submit" className="btn-dark btn-sm">
              Search
            </button>
          </div>
        </form>
        {this.props.showBtn && (
          <button
            onClick={this.props.clearUsers}
            className="btn btn-secondary mt-2 btn-sm btn-block"
          >
            Clear Result
          </button>
        )}
      </div>
    );
  }
}

export default Search;

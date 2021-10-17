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
    this.props.searchUsers(this.state.keyword);
    this.setState({
      keyword: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="container mt-5">
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
        </div>
      </form>
    );
  }
}

export default Search;

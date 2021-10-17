import React, { Component } from "react";

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "52704572",
      name: "Yusuf Taskiran",
      login: "yusuftask08",
      html_url: "https://github.com/yusuftask08",
      avatar_url: "https://avatars.githubusercontent.com/u/52704572?v=4",
      followers: 19,
    };
  }
  render() {
    const { name, login, avatar_url, html_url, followers } = this.state;
    return (
      <div>
        <div className="card m-2">
          <div className="row">
            <div className="col-md-3">
              <img src={avatar_url} alt="" className="card-img" />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Followers : {followers} </p>
                <a href={html_url} className="btn btn-dark btn-sm">
                  Go Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;

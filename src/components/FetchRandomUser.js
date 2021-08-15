import React, { Component } from "react"

export default class FetchRandomUser extends Component {
  state = {
    loading: true,
    person: null,
  }
  async componentDidMount() {
    const url = "https://api.randomuser.me/"
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ person: data.results[0], loading: false })
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="container mt-5 d-flex justify-content-center">
          <div className="spinner-border text-danger" style={{ width: "3rem", height: "3rem" }} role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )
    }
    if (!this.state.person) {
      return (
        <div className="container mt-5 d-flex justify-content-center">
          <div>Didn't get a Person</div>
        </div>
      )
    }
    return (
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card p-3">
          <div className="d-flex align-items-center">
            <div className="image">
              {" "}
              <img src={this.state.person.picture.large} className="rounded" width="155" alt="" />
            </div>
            <div className="ml-3 w-100">
              <h4 className="mb-0 mt-0">
                {this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}
              </h4>{" "}
              <span>{this.state.person.email}</span>
              <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                <div className="d-flex flex-column">
                  {" "}
                  <span className="articles">Articles</span> <span className="number1">{50 + Math.floor(Math.random() * (100 - 50))}</span>{" "}
                </div>
                <div className="d-flex flex-column">
                  {" "}
                  <span className="followers">Followers</span> <span className="number2">980</span>{" "}
                </div>
                <div className="d-flex flex-column">
                  {" "}
                  <span className="rating">Rating</span> <span className="number3">8.9</span>{" "}
                </div>
              </div>
              <div className="button mt-2 d-flex flex-row align-items-center">
                {" "}
                <button className="btn btn-sm btn-outline-primary w-100">Chat</button> <button className="btn btn-sm btn-primary w-100 ml-2">Follow</button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

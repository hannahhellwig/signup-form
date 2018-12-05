import React from "react"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }
    handleUsername = event => {
      this.setState({ username: event.target.value })
    }
    handleEmail = event => {
      this.setState({ email: event.target.value })
    }
    handlePassword = event => {
      this.setState({ password: event.target.value })
    }
    handleSubmit = event => {
      event.preventDefault()
      fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      })
        .then(response => {
          if (response.status === 201) {
            this.setState({
              username: "",
              email: "",
              password: ""
            })
          }
        })
        .catch(err => {
          console.log(err, "ERROR")
        })
    }
    render() {
      return (
        <div className="container">
          <h1>Sign up</h1>
          <form id="signupform" className="signupform" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={this.handleUsername}
              value={this.state.username}
              required />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={this.handleEmail}
              value={this.state.email}
              required />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handlePassword}
              value={this.state.password}
              required />
            <input
              className="submitButton"
              type="submit" />
          </form>
        </div>
      )
    }
}

export default App

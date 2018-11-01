import React from "react"

class App extends React.Component {

  render() {
    return (
      <div>
        <form method="post" action="http://localhost:8080/users">
          <input type="text" placeholder="Name" name="name" required />
          <input type="text" placeholder="exampel@email.com" name="email" required />
          <input type="password" placeholder="Password" name="password" required />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default App

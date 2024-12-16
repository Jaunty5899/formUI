// import { useState } from 'react'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
      <form className="subDiv1" action="/">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          placeholder="What should we call you?"
        />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Email" required />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="XXXXXXXX" required>
          asd
        </input>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="XXXXXXXX"
          required
        />
        <button>Update Profile</button>
      </form>
      <div className="subDiv2"></div>
    </div>
  );
}

export default App;

import "./App.css";

function App() {
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
        <div className="subContainer">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="XXXXXXXX"
            required
          />
          <span className="eyeCon material-symbols-outlined">visibility</span>
        </div>
        <div className="subContainer">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="XXXXXXXX"
            required
          />
          <span className="eyeCon material-symbols-outlined">visibility</span>
        </div>
        <button>Update Profile</button>
      </form>
      <div className="subDiv2">
        <div className="progressBar">
          <span className="progress">100%</span>
        </div>
        <span>Profile Completeness</span>
        <div className="subSubDiv">
          <ul className="list">
            <li>Create Account</li>
            <li>Update Roadmap Progress</li>
            <li>Setup Public Domain</li>
            <li>Complete your first project</li>
            <li>Invite your Friends</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

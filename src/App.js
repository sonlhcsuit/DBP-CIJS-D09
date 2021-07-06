import './App.css';
import {SignIn} from "./components/SignIn"
import {SignUp} from "./components/SignUp"

function App() {
  return (
    <div >
      {/* <SignUp text="Welcome to my web, please create account for better experience" 
      btnValue="Register Now"></SignUp> */}
      <SignIn ></SignIn>
    </div>
  );
}

export default App;

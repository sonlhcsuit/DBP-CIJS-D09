import './App.css';
import { SignInForm } from "./components/SignInForm"
import { Navigation } from './components/Navigation';

// JSX TSX 
// cho phép các bạn viết code html ở trong file javascript =>
// có một vài hạn chế 
// React hoạt động dựa trên cơ chế component-based
// element => html cơ bản
// component : a set of others components or elements
// phải làm quen với cách viết component & element

function App() {
  return (
    <div>
      <Navigation/>
    </div>
      );
}

      export default App;

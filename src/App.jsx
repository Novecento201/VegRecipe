import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

function App() {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
}

export default App;

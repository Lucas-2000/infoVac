import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Routes from "./routes/routes";
import './styles/global.scss'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes />
    </Router>
  );
}

export default App;

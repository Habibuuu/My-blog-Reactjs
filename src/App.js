import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Navbar  from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetail from "./BlogDetail";
import NotFound from "./NotFound";
import Edit from "./Edit";

function App() {
 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/create" element={<Create />}></Route>
              <Route exact path="/blogs/:id" element={<BlogDetail />}></Route>
              <Route exact path="/update/:id" element={<Edit />}></Route>
              <Route exact path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div> 
    </Router>
  );
}

export default App; 

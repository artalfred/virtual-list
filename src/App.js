import Nav from "./Components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import VirtualList from "./VirtualList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/virtualList" element={<VirtualList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

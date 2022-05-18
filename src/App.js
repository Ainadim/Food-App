import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/Not Found/NotFound";
import About from "./components/About/About";
import Post from "./components/Post/post";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Routes>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;

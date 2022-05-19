import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/Not Found/NotFound";
import About from "./components/About/About";
import Post from "./components/Post/post";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Header />
          <Routes>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home/" element={<Home />}>
              <Route path="contact" element={<h2>This is contact</h2>}></Route>
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;

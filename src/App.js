import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/Not Found/NotFound";
import About from "./components/About/About";
import Post from "./components/Post/post";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import AllPosts from "./components/AllPosts/AllPosts";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home/" element={<Home />}>
            <Route path="contact" element={<h2>This is contact</h2>}></Route>
          </Route>
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/posts/:postId" element={<Post />} />

          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;

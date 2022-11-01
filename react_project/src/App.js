import { Routes, Route, NavLink } from "react-router-dom";
import BlogLayout from "./pages/Blog/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Categories from "./pages/Blog/Categories";
import Post from "./pages/Blog/Post";
import BlogIndex from "./pages/Blog/BlogIndex";
import Page404 from "./pages/404Page";
function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Ana Sayfa</NavLink>
        <NavLink to="/contact">İletişim</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<BlogIndex />} />
          <Route path="categories" element={<Categories />} />
          <Route path="post/:url" element={<Post />} />
        </Route>
        <Route path="*" element={Page404}/>
      </Routes>
    </>
  );
}

export default App;

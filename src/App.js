import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostPage from './pages/PostPage';
import DetailsPage from './pages/DetailsPage';
import MyPostPage from './pages/MyPostPage';
import AddPostPage from './pages/AddPostPage';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link reloadDocument to={""}>Home</Link>
        </li>
        <li>
          <Link to={"about"}>About</Link>
        </li>
        <li>
          <Link to={"post/2"}>Post</Link>
        </li>
        <li>
          <Link to={"mypost/3"}>My Post 3</Link>
        </li>
        <li>
          <Link to={"create"}>New Post</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='' element={<HomePage/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='post/:id' element={<PostPage></PostPage>}/>
      <Route path='mypost/:id' element={<MyPostPage/>}/>
      <Route path='details' element={<DetailsPage/>}/>
      <Route path='create' element={<AddPostPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

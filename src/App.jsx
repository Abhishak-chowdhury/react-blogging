import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Error from "./components/Error"
import Author from "./components/Author"
import Postdetails from "./components/Postdetails"
import Register from "./components/Register"
import Login from "./components/Login"
import UserProfile from "./components/UserProfile"
import CreatePost from "./components/CreatePost"
import AuthorPosts from "./components/AuthorPosts"
import Dashboard from "./components/Dashboard"
import Edit from "./components/Edit"
import Logout from "./components/Logout"
import Category from "./components/Category"
import Header from "./layoutcomponents/Header"
import './index.css'
import Footer from "./layoutcomponents/Footer"
function App() {
  

  return (
    <>
    <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="author" element={<Author />} />
          <Route path="post/:id" element={<Postdetails />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profile/:id" element={<UserProfile />} />
          <Route path="CreatePost" element={<CreatePost />} />
          <Route path="post/categories/:category" element={<Category />} />
          <Route path="post/author/:id" element={<AuthorPosts />} />
          <Route path="mypost/:id" element={<Dashboard />} />
          <Route path="post/:id/edit" element={<Edit />} />
          <Route path="Logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
        </Routes>
    <Footer />
      
    </>
  )
}

export default App

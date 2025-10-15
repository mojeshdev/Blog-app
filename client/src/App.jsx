import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import AuthProvider from "./components/authContext.jsx"
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import CreatePost from './pages/CreatePost.jsx';
import PostDetail from './pages/PostDetails.jsx';
import EditPost from './pages/EditPost.jsx';


export default function App(){
return (
<AuthProvider>
<Navbar />
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/login" element={<Login/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/create" element={<CreatePost/>} />
<Route path="/posts/:id" element={<PostDetail/>} />
<Route path="/posts/:id/edit" element={<EditPost/>} />
</Routes>
</AuthProvider>
);
}

import  { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../components/authContext.jsx"


export default function Navbar(){
const { user, logout } = useContext(AuthContext);
const nav = useNavigate();
return (
<nav className="bg-white shadow p-4 flex justify-between items-center">
<Link to="/" className="font-bold text-lg">MERN Blog</Link>
<div className="flex items-center gap-4">
{user ? (
<>
<Link to="/create" className="px-3 py-1 bg-blue-500 text-white rounded">Create</Link>
<button onClick={() => { logout(); nav('/login'); }} className="px-3 py-1 border rounded">Logout</button>
</>
) : (
<>
<Link to="/login" className="px-3 py-1 border rounded">Login</Link>
<Link to="/signup" className="px-3 py-1 bg-green-500 text-white rounded">Signup</Link>
</>
)}
</div>
</nav>
);
}
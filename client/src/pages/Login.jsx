import  { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../components/authContext.jsx"


export default function Login(){
const { login } = useContext(AuthContext);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const nav = useNavigate();


const submit = async (e) => {
e.preventDefault();
try{
await login({ email, password });
nav('/');
}catch(err){ alert(err.response?.data?.message || 'Login failed'); }
};


return (
<div className="max-w-md mx-auto p-6 bg-white rounded mt-8">
<h2 className="text-xl font-semibold mb-4">Login</h2>
<form onSubmit={submit} className="flex flex-col gap-3">
<input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="p-2 border rounded" />
<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="p-2 border rounded" />
<button className="py-2 bg-blue-500 text-white rounded">Login</button>
</form>
</div>
);
}
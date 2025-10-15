import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../components/authContext.jsx"


export default function Signup(){
const { signup } = useContext(AuthContext);
const [userName, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const nav = useNavigate();


const submit = async (e) => {
e.preventDefault();
try{
await signup({ userName, email, password });
alert('Signup success. Please login');
nav('/login');
}catch(err){ alert(err.response?.data?.message || 'Signup failed'); }
};


return (
<div className="max-w-md mx-auto p-6 bg-white rounded mt-8">
<h2 className="text-xl font-semibold mb-4">Signup</h2>
<form onSubmit={submit} className="flex flex-col gap-3">
<input value={userName} onChange={e=>setUsername(e.target.value)} placeholder="Username" className="p-2 border rounded" />
<input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="p-2 border rounded" />
<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="p-2 border rounded" />
<button className="py-2 bg-green-500 text-white rounded">Signup</button>
</form>
</div>
);
}
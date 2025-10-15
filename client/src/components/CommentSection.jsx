import React, { useEffect, useState, useContext } from 'react';
import api from "../api/axios.js"
import { AuthContext } from "../components/authContext.jsx"


export default function CommentSection({ postId }){
const [comments, setComments] = useState([]);
const [text, setText] = useState('');
const { user } = useContext(AuthContext);


const load = async () => {
const res = await api.get(`/comments/${postId}`);
setComments(res.data);
};


useEffect(() => { load(); }, [postId]);


const add = async (e) => {
e.preventDefault();
if (!user) return alert('Login to comment');
await api.post(`/comments/${postId}`, { text });
setText('');
load();
};


return (
<div className="mt-4">
<h4 className="font-semibold">Comments</h4>
<form onSubmit={add} className="flex gap-2 mt-2">
<input value={text} onChange={e => setText(e.target.value)} placeholder="Write a comment..." className="flex-1 p-2 border rounded" />
<button className="px-3 py-1 bg-blue-500 text-white rounded">Post</button>
</form>
<ul className="mt-3 space-y-2">
{comments.map(c => (
<li key={c._id} className="p-2 border rounded">
<p className="text-sm text-gray-700">{c.text}</p>
<p className="text-xs text-gray-500">by {c.author?.username || 'Unknown'} • {new Date(c.createdAt).toLocaleString()}</p>
</li>
))}
</ul>
</div>
);
}
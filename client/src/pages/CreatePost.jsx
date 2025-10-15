import  { useState } from 'react';
import api from "../api/axios.js"
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function CreatePost(){
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [file, setFile] = useState(null);
const nav = useNavigate();


const submit = async (e) => {
e.preventDefault();
const fd = new FormData();
fd.append('title', title);
fd.append('content', content);
if (file) fd.append('image', file);
await api.post('/posts', fd);
nav('/');
};


return (
<div className="max-w-3xl mx-auto p-6 bg-white rounded mt-6">
<h2 className="text-xl font-semibold mb-4">Create Post</h2>
<form onSubmit={submit} className="flex flex-col gap-3">
<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="p-2 border rounded" />
<ReactQuill value={content} onChange={setContent} />
<input type="file" onChange={e=>setFile(e.target.files[0])} />
<button className="py-2 bg-blue-600 text-white rounded">Publish</button>
</form>
</div>
);
}
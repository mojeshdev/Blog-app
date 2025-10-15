import  { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from "../api/axios.js"
import ReactQuill from 'react-quill';


export default function EditPost(){
const { id } = useParams();
const nav = useNavigate();
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [file, setFile] = useState(null);


useEffect(() => {
(async ()=>{
const res = await api.get(`/posts/${id}`);
setTitle(res.data.title);
setContent(res.data.content);
})();
}, [id]);


const submit = async (e) => {
e.preventDefault();
const fd = new FormData();
fd.append('title', title);
fd.append('content', content);
if (file) fd.append('image', file);
await api.put(`/posts/${id}`, fd);
nav(`/posts/${id}`);
};


return (
<div className="max-w-3xl mx-auto p-6 bg-white rounded mt-6">
<h2 className="text-xl font-semibold mb-4">Edit Post</h2>
<form onSubmit={submit} className="flex flex-col gap-3">
<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="p-2 border rounded" />
<ReactQuill value={content} onChange={setContent} />
<input type="file" onChange={e=>setFile(e.target.files[0])} />
<button className="py-2 bg-blue-600 text-white rounded">Save</button>
</form>
</div>
);
}
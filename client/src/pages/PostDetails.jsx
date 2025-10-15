import  { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from "../api/axios.js"
import CommentSection from "../components/CommentSection.jsx"


export default function PostDetail(){
const { id } = useParams();
const [post, setPost] = useState(null);


const load = async () => {
const res = await api.get(`/posts/${id}`);
setPost(res.data);
};


useEffect(() => { load(); }, [id]);


if (!post) return <div className="p-6">Loading...</div>;


return (
<div className="max-w-3xl mx-auto p-6 bg-white rounded mt-6">
{post.image && <img src={post.image} className="w-full h-64 object-cover rounded mb-4" />}
<h1 className="text-2xl font-bold">{post.title}</h1>
<p className="text-sm text-gray-600">by {post.author?.username}</p>
<div className="mt-4" dangerouslySetInnerHTML={{ __html: post.content }} />
<div className="mt-4 flex gap-3">
<button onClick={async ()=>{await api.post(`/posts/${id}/like`); load();}} className="px-3 py-1 border rounded">❤️ {post.likes?.length || 0}</button>
<Link to={`/posts/${id}/edit`} className="px-3 py-1 border rounded">Edit</Link>
</div>


<CommentSection postId={id} />
</div>
);
}
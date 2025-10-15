    import  { useEffect, useState } from 'react';
import api from "../api/axios.js"
import PostCard from "../components/Postcard.jsx"


export default function Home(){
const [posts, setPosts] = useState([]);


const load = async () => {
const res = await api.get('/posts');
setPosts(res.data);
};


useEffect(() => { load(); }, []);


const like = async (id) => {
await api.post(`/posts/${id}/like`);
load();
};


return (
<div className="max-w-4xl mx-auto p-4 grid gap-4">
{posts.map(p => <PostCard key={p._id} post={p} onLike={like} />)}
</div>
);
}
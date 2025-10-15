import React from 'react';
import { Link } from 'react-router-dom';


export default function PostCard({ post, onLike }){
return (
<div className="bg-white p-4 rounded shadow">
{post.image && <img src={post.image} alt="cover" className="w-full h-48 object-cover rounded mb-3" />}
<h3 className="text-xl font-semibold"><Link to={`/posts/${post._id}`}>{post.title}</Link></h3>
<p className="text-sm text-gray-600">by {post.author?.username || 'Unknown'} • {new Date(post.createdAt).toLocaleString()}</p>
<p className="mt-2 line-clamp-3">{post.content?.slice(0, 200)}{post.content && post.content.length > 200 ? '...' : ''}</p>
<div className="mt-3 flex items-center gap-3">
<button onClick={() => onLike(post._id)} className="px-2 py-1 border rounded">❤️ {post.likes?.length || 0}</button>
<Link to={`/posts/${post._id}`} className="px-2 py-1 border rounded">Comments</Link>
</div>
</div>
);
}
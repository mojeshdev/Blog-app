import mongoose, { Schema } from 'mongoose';
import express from 'express';

const commentSchema = new mongoose.Schema({
    text: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
}, { timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
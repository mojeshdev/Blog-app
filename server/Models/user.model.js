import mongoose from 'mongoose';
import express from 'express';

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
            match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        },

        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 8
        },

        // isAdmin: { type: Boolean, default: false },
        
}, {timestamps: true}
);

const User = mongoose.model("User", userSchema);
export default User;
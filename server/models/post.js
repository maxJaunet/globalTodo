import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    category: String,
    date: Date
})

const Post = mongoose.model('Post', postSchema);

export default Post;
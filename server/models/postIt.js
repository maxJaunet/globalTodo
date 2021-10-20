import mongoose from "mongoose";

const postItSchema = mongoose.Schema({
    title: String,
    content: String,
    category: String,
    date: Date
})

const PostIt = mongoose.model('PostIt', postItSchema);

export default PostIt;
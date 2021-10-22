import Post from '../models/post.js';

export const getSinglePost = async (req, res) => {
    const postTitle = req.params.postTitle;
    try {
        const singlePost = await Post.findOne({title: postTitle});
        res.status(200).json(singlePost);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find();
        res.status(200).json(allPosts);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const postNewPost = (req, res) => {
    const newPost = new Post(req.body);
    try {
        newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const patchPost = async (req, res) => {
    const postTitle = req.params.postTitle;
    try { 
        const modifiedPost =  await Post.findOneAndUpdate({title: postTitle},
             {$set: req.body},
             {new: true});
        res.status(201).json(modifiedPost);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updatePost = async (req, res) => {
    const postTitle = req.params.postTitle;
    try {
        const modifiedPost =  await Post.findOneAndUpdate({title: postTitle},
            {$set: {
                title: req.body.title,
                desc: req.body.desc
            }},
            {new: true});
        res.status(201).json(modifiedPost);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deletePost = async (req, res) => {
    const postId = req.params.postId;
    try {
        const deletedPost = await Post.deleteOne({_id: postId});
        res.status(200).json(deletedPost);
    } catch (error) {
        res.status(403).json({ message: error.message });
    }
}
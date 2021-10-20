import PostIt from '../models/postIt.js';

export const getPostIt = async (req, res) => {
    try {
        const allPostIts = await PostIt.find();
        res.status(200).json(allPostIts);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const postNewPostIt = async (req, res) => {
    const postedPostIt = req.body;
    const newPostIt = new PostIt(postedPostIt);
    try {
        await newPostIt.save();
        res.status(201).json(newPostIt);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
    
}


import Category from '../models/category.js';

export const getSingleCategory = async (req, res) => {
    const catName = req.params.catTitle;
    try {
        const singleCategory = await Category.findOne({title: catTitle});
        res.status(200).json(singleCategory);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getAllCategories = async (req, res) => {
    try {
        const allCategories = await Category.find();
        res.status(200).json(allCategories);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const postNewCategory = (req, res) => {
    console.log("router call works")
    const newCategory = new Category(req.body);
    console.log(req.body)
    try {
        newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const patchCategory = async (req, res) => {
    const categoryTitle = req.params.catTitle;
    try { 
        const modifiedCat =  await Category.findOneAndUpdate({title: categoryTitle},
             {$set: req.body},
             {new: true});
        res.status(201).json(modifiedCat);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateCategory = async (req, res) => {
    const categoryTitle = req.params.catTitle;
    try {
        const modifiedCat =  await Category.findOneAndUpdate({title: categoryTitle},
            {$set: {
                title: req.body.title,
                desc: req.body.desc
            }},
            {new: true});
        res.status(201).json(modifiedCat);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteCategory = async (req, res) => {
    const categoryTitle = req.params.catTitle;
    try {
        const deletedCat = await Category.deleteOne({title: categoryTitle});
        res.status(200).json(deleteCategory);
    } catch (error) {
        res.status(403).json({ message: error.message });
    }
}
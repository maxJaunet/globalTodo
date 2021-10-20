import Category from '../models/category.js';

export const getCategory = async (req, res) => {
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

// export const patchCategory = async (req, res) => {
//     const category = req.params.catName;
//     try { 
//         const modifiedCat =  await Category.findOneAndUpdate({name: category}, {$set: req.body}, {new: true});
//         res.status(201).json(modifiedCat);
//     } catch (error) {
//         res.status(404).json({ message: error.message })
//     }
// }


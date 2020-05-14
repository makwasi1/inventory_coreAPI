const category = require('../models/categoryModel')
const Item = require('../models/itemsModel')
require('../config/con')


module.exports  = {
    addCat:(req,res) =>{
        const newCat = new category({
            name : req.body.name,
            description : req.body.description
            
        })
        newCat.save()
        .then(data =>{
            console.log("new category added",data)
            res.json(data)
        }).catch(error =>{
            console.log({message:error})
        })
    },
    viewCat:  async (req,res) =>{
        try {
            const viewCat = await category.find()
            res.json(viewCat)
            
        } catch (error) {
            res.json({message:error})
        }

    },

    getCategory: async (req,res,next) =>{
        try {
            const getCat = await category.findById(req.params.catId)
            res.status(200).json(getCat)            
        } catch (error) {
            res.json({message:error})
        }
    },
    replaceCategory: async (req,res,next) =>{
        try {
            const {catId} = req.params
            const newCategory = req.body
            const result = await category.findByIdAndUpdate(catId,newCategory)
            res.status(200).json({success : true})
        } catch (error) {
         res.json({message:error})   
        }
    },
    updateCategory: async (req,res,next) =>{
           try {
            const {catId} = req.params
            const newCategory = req.body
            const result = await category.findByIdAndUpdate(catId,newCategory)
            res.status(200).json({success : true})
        } catch (error) {
         res.json({message:error})   
        }
       
    },

     getCategoryItems: async (req,res,next) =>{
        try {
              const {catId} = req.params
            const cat = await category.findById(catId).populate('items')
            console.log('cat',cat)
            res.status(200).json(cat.items)
        } catch (error) {
            res.json({message:error})
        }   
    },

     newCategoryItem: async (req,res,next) =>{
        try {
          const {catId} = req.params  
          const newItem = new Item(req.body)
          //get category
          const cat = await category.findById(catId)
          //assign a category to an item
          newItem.Belongs = cat
          //save the item
          await newItem.save()
          //add item to the bellogs array
          cat.items.push(newItem) 
          //save the category
          await cat.save()
          res.status(201).json(cat)  
        } catch (error) {
         res.json({message:error})   
        }
     }   
    
}


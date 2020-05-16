const Items = require('../models/itemsModel')
const Category = require('../models/categoryModel')
require('../config')

module.exports  = {
    //adds an category to an item
    AddItems: async (req,res,next) =>{
     try {
         //find the category it belongs to
        
          const belongs = await Category.findById(req.body.belongs) 
        
        // create a new item
        const newItem = req.body
        delete newItem.belongs

        const item = new Items(newItem)
        Items.belongs = belongs
        await item.save()
        //add newly created item to the category
        belongs.items.push(item)
        await belongs.save()
        

        res.status(201).json(item)

     } catch (error) {
         res.status(500).json({message:error})
     }
    },
    viewItems:async (req,res) =>{
        try {
            const viewItems = await Items.find()
            res.json(viewItems)
            
        } catch (error) {
            res.json({message:error})
        }

    },
  specificItem: async (req,res)=>{
        try{
            const getItem = await Items.findById(req.params.itemsId)
            res.json(getItem)
        }catch(error){
            res.json({message:error})
        }

    },

  deleteItem: async (req,res) =>{
      try {
          const deleteItem = await Items.remove({_id: req.params.itemsId})
          res.json(deleteItem)
      } catch (error) { 
          res.json({message:error})
      }
      
  },  
  updateItem: async (req,res) =>{
 try {
    const updateItem = await Items.updateOne(
        {_id: req.params.itemsId},
        {$set: {price: req.body.price}}); 
        res.json(updateItem)
 } catch (error) {
     res.json({message:error})
 }
  }

}
const Items = require('../models/itemsModel')
require('../config/con')

module.exports  = {
    AddItems:(req,res) =>{
        const newItem = new Items({
            productName : req.body.productName,
            description : req.body.description,
            category : req.body.category,
            price: req.body.price,
            availableStock : req.body.availableStock,
            itemImage: req.body.image
        })
        newItem.save()
        .then(data =>{
            console.log("new item added",data)
            res.json(data)
        }).catch(error =>{
            console.log({message:error})
        })
    },
    viewItems:async (req,res) =>{
        try {
            const viewItems = await Items.find()
            res.json(viewItems)
            required: true
            
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
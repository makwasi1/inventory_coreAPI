const Joi = require('joi')

module.exports = {
    validateParam: (schema,name) => {
        return (req,res,next) =>{

            const result = Joi.validate({param: req['params'][name]}, schema);
            if (result.error) {
                //send error 
                return res.status(400).json(result.error)
            } else {
                if(!req.value)
                req.value = {}

                if(!req.value['params'])
                    req.value['params'] = {}


                req.value['params'][name] = result.value.param;

                next()
            }
        }
    },
    validateBody: (schema) =>{
        return(req,res,next) =>{
            const result = Joi.validate(req.body, schema)
            if (result.error) {
                return res.status(400).json(result.error)
            } else {
                if(!req.value)
                req.value = {}

                if(!req.value['body'])
                req.value['body'] = {}

                req.value['body'] = result.value
                next()
            }
        }
    },
    schemas :{
        categorySchema: Joi.object().keys({
            name: Joi.string().required(),
            description: Joi.string().required()
        }),
        optionalSchema: Joi.object().keys({
            name: Joi.string(),
            description: Joi.string()
        }),
        itemsSchema: Joi.object().keys({
            productName: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.string().required(),
            category: Joi.string().required(),
            availableStock: Joi.number().required()
        }),
        newItemSchema: Joi.object().keys({
            belongs: Joi.string().regex(/^[0-9a-zA-Z]{24}$/).required(),
            productName: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.string().required(),
            category: Joi.string().required(),
            availableStock: Joi.number().required()
        }),
        updateItemSchema: Joi.object().keys({
           
            productName: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.string().required(),
            category: Joi.string().required(),
            availableStock: Joi.number().required()
        }),
        
        optionalItemSchema: Joi.object().keys({
           
            productName: Joi.string(),
            description: Joi.string(),
            price: Joi.string(),
            category: Joi.string(),
            availableStock: Joi.number()
        }),
        
        idSchema : Joi.object().keys({
        param: Joi.string().regex(/^[0-9a-zA-Z]{24}$/).required() 
        })
    }
    //.regex(/^[0-9a-fA-F]{24}$/)
}
const Model = require('../model/model')

//GET
exports.getAllItems = async (req, res) => {
    try{
        const data = await Model.find()
        res.json(data)
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
}

//GET by ID
exports.getById = async (req, res) => {
    try{
        const data = await Model.findById(req.params.id)
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
}

//POST
exports.addItem = async (req, res) => {
    const data = new Model({
        name: req.body.name,
        price: req.body.price,
        currency: req.body.currency,
        category: req.body.category,
        rating: req.body.rating,
        image: req.body.image,
    })
    try {
        const dataToSave = await data.save() // saves to DB
        res.status(200).json(dataToSave) //if success - sends back data
    }
    catch (error) {
        res.status(404).json({message: error.message})
    }
}

//PATCH
exports.updateItem = async (req, res) => {
    try {
        const id = req.params.id
        const updatedData = req.body
        const options = {new: true}

        const result = await Model.findByIdAndUpdate(id, updatedData, options)
        res.send(result)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}

//DELETE
exports.deleteById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted...`)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}
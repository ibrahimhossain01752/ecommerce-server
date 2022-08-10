const router = require('express').Router();
const Product = require('../models/Product');
const user = require('../models/user');


//get product
router.get('/', async(req, res)=> {
    try{
        const sort = {'_id': -1}
        const product = await Product.find().sort(sort);
        res.status(200).json(products);
    } catch(e){
        res.send(400).send(e.message);
    }
})


// create product
router.post('/',async(req, res)=> {
    try{
        const {name, description, price, category, images:pictures} = req.body;
        const product = await Product.create({name, description, price, category, pictures});
        const products = await Product.find();
        res.status(201).json(products);
    } catch (e) {
        res.status(400).send(e.message);
    }
})

//update product 
router.patch('/:id',async(req, res) =>{
    const {id} = req.params;
    try{
        const {name, description, price, category, images:pictures} = req.body;
        const product = await Product.create({name, description, price, category, pictures});
        const products = await Product.find();
        res.status(200).json(products);
    } catch (e) {
        res.status(400).send(e.message);
    }
})

module.exports = router;
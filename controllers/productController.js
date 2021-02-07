const {Router} = require('express');
const uniqid = require('uniqid');
const Cube = require('../models/Cube');

const router = Router();

router.get('/', (req, res) =>{
    res.render('home', {title: 'Browse'})
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create'})
});

router.post('/create', (req, res) =>{
    let data = req.body;
    let cube = new Cube(
        uniqid(),
     data.name, 
     data.description,
      data.imageUrl,
       data.difficultyLevel);
    console.log(cube);

    res.redirect('/products');
})

router.get('/details/:productsId', (req, res) =>{
    res.render('details', {title: 'Product Details'})
});

module.exports = router;
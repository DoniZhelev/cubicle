const {Router} = require('express');

const productService = require('../servises/productService');
const router = Router();

router.get('/', (req, res) =>{
    res.render('home', {title: 'Browse'})
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create'})
});

router.post('/create', (req, res) =>{

    productService.create(req.body)
    res.redirect('/products');
})

router.get('/details/:productsId', (req, res) =>{
    res.render('details', {title: 'Product Details'})
});

module.exports = router;
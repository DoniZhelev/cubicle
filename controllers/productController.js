const {Router} = require('express');

const productService = require('../servises/productService');
const router = Router();

router.get('/', (req, res) =>{

    productService.getAll(req.query)
    .then(products => {

        res.render('home', {title: 'Browse', products})
    })
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create'})
});

router.post('/create', (req, res) =>{

    // productService.create(req.body, (err) =>{
    //     if(err) {
    //         return res.status(500).end();
    //     }
    //     res.redirect('/products');
    // })
   productService.create(req.body)
   .then(() => res.redirect('/products'))
   .catch(() => res.status(500).end())
})

router.get('/details/:productId',  async (req, res) =>{
    
    let product =  await productService.getOne(req.params.productId)
    
    res.render('details', {title: 'Product Details', product})
});

module.exports = router;
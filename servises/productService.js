const Cube = require('../models/Cube');
const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');
const Accessory = require('../models/Accessory')



 async function getAll(query) {
    let products =  await Cube.find({}).lean();

    if(query.search) {
        products = products.filter(x => x.name.toLocaleLowerCase().includes(query.search))
    }
    if(query.from) {
        products = products.filter(x => Number(x.level) >= query.from);
    }
    
    if(query.to) { 
        products = products.filter(x => Number(x.level) <= query.to);
    }
    
    return products;
}

function getOne(id) {
  return   Cube.findById(id).lean();
  
}

function getOneWithAccessories(id) {
    return Cube.findById(id).populate('accessories').lean();
}

function create(data) {
    let cube = new Cube(data)
  return cube.save();
 // call back WAY

   
}
async function attachAccessory(productId, accessoryId) {
    let product = await Cube.findById(productId)
    let accessory = await Accessory.findById(accessoryId);
    console.log(product);
    product.accessories.push(accessory);
    return product.save();
}

// return fs.writeFile(
//     path.join(__dirname, '../config/products.json'),
// JSON.stringify(productsData),
// )
// }

module.exports = {
    getAll,
    getOne,
    getOneWithAccessories,
    create,
    attachAccessory
}
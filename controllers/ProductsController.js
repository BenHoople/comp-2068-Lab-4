const viewPath = ('products');
const Product = require('../models/product');

exports.show = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render(`${viewPath}/show`, {
      pageTitle: product.name,
      product: product
  });
}

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'New Product'
  });
};

exports.create = async (req, res) => {
  try {
    // if(bool(req.body.image)){ 
    //   image =  'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'; 
    // }
    console.log(req.body.image.toString());
    const product = await Product.create(req.body);
    res.redirect(`/products/${product.id}`);
  } catch (err) {
    res.send(err);
  }
};
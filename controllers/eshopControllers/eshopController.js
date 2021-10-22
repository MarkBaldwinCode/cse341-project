const Product = require('../../models/product');

exports.getEshopHome = (req, res, next) => {
  Product
    .find()
    .then(products => {
      //console.log(products);
      res.render('pages/eShop/home', {
        pageTitle: 'E Shop Home Page',
        path: '/home',
        items: products,
        userSearchList: "" //searchList
      });
    })
    .catch(err => {
      console.log(err);
    });

  //for search features
  //const searchList = req.query.searchList || "";
  //let items = JSON.parse(data).filter(item => {
  //return item.title.includes(searchList);
  //});
}

exports.getAddProducts = (req, res, next) => {
  res.render('pages/eShop/add-products', {
    pageTitle: 'E Shop Admin Add Product',
    path: '/add-products'
  });
}

exports.postAddProducts = (req, res, next) => {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const author = req.body.author;
  const type = req.body.type;
  const imageUrl = req.body.imageUrl;
  const inCart = req.body.inCart;
  const category = req.body.category;

  const product = new Product({
    id: id,
    title: title,
    description: description,
    price: price,
    author: author,
    type: type,
    imageUrl: imageUrl,
    inCart: inCart,
    category: category
  });

  product
    .save()
    .then(result => {
      console.log('Created Product');
      res.redirect('/eShop');
    })
}

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('pages/eShop/product-details', {
        pageTitle: 'E Shop Product Details',
        path: '/product-details',
        item: product
      });
    });
}

exports.getProductDetails = (req, res, next) => {
  res.render('pages/eShop/product-details', {
    pageTitle: 'E Shop Product Details',
    path: '/product-details'
  });
}

exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('pages/eShop/edit-product', {
        pageTitle: 'Edit Product',
        path: '/edit-product',
        item: product
      });
    })
}

exports.postEditProduct = (req, res, next) => {
  return Product.findById(req.params.productId)
    .updateOne(req.body)
    .then(result => {
      console.log('Updated Product');
      console.log(req.body);
      console.log(result);
      console.log(req.params.productId);
      res.redirect('/eShop');
    })
    .catch(err => console.log(err));
}

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByIdAndRemove(prodId)
  .then(() => {
    console.log('Destroyed Product');
    res.redirect('/eShop');
  })
}

exports.getCart = (req, res, next) => {
  res.render('pages/eShop/cart', {
    pageTitle: 'Your Cart',
    path: '/cart'
  });
}
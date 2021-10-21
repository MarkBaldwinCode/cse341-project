const mongodb = require('mongodb');
const Product = require('../../models/product');

const ObjectId = mongodb.ObjectId;

exports.getEshopHome = (req, res, next) => {
  Product.fetchAll()
    .then(products => {

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


  const product = new Product(
    id,
    title,
    description,
    price,
    author,
    type,
    imageUrl,
    inCart,
    category);

  product
    .save()
    .then(result => {
      console.log('Created Product');
      res.redirect('/eShop');
    })

}


exports.getAddProducts = (req, res, next) => {
  res.render('pages/eShop/add-products', {
    pageTitle: 'E Shop Admin Add Product',
    path: '/add-products'
  });
}

exports.getCart = (req, res, next) => {
  res.render('pages/eShop/cart', {
    pageTitle: 'Your Cart',
    path: '/cart'
  });
}

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);

  Product.findById(prodId)
    .then(product => {
      console.log('Hitting getProduct');
      console.log(product);

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
  const editMode = req.query.edit;
  // if(!editMode){
  //   return res.redirect('/');
  // }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('pages/eShop/edit-product', {
        pageTitle: 'Edit Product',
        path: '/edit-product',
        //editing: editMode,
        item: product
      });
    })
}

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedDescription = req.body.description;
  const updatedPrice = req.body.price;
  const updatedAuthor = req.body.author;
  const updatedType = req.body.type;
  const updatedImageUrl = req.body.imageUrl;
  const updatedInCart = req.body.inCart;
  const updatedCategory = req.body.category;


  const product = new Product(
    new ObjectId(prodId),
    updatedTitle,
    updatedDescription,
    updatedPrice,
    updatedAuthor,
    updatedType,
    updatedImageUrl,
    updatedInCart,
    updatedCategory
    );

    console.log('made it to product save');
    console.log(product);
  product
    .save()
    .then(result => {
      console.log('Updated Product');
      res.redirect('/eShop');
    })
    .catch(err => console.log(err));
}
const Product = require('../../models/product');
const Order = require('../../models/order');
const User = require('../../models/user');
const bcrypt = require('bcryptjs');

exports.getLogin = (req, res, next) => {
  res.render('pages/eShop/login', {
    pageTitle: 'Welcome Back, Please Login',
    path: '/login'
  });
}

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User
    .findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.redirect('./login');
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            console.log('password matched');
            req.session.isLoggedIn = true;
            req.session.user = user;
            console.log(req.session.isLoggedIn);
            console.log(req.session.user);
            return req.session.save(err => {
              console.log(err);
              res.redirect('/eShop');
            });
          }
          console.log('password didnt match');
          res.redirect('./eShop');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        })
    })
    .catch(err => console.log(err));
};

exports.getSignUp = (req, res, next) => {
  res.render('pages/eShop/sign-up', {
    path: '/sign-up',
    pageTitle: 'Signup',
    isAuthenticated: false
  });
};

exports.postSignUp = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({ email: email }).then(userDoc => {
    if (userDoc) {
      return res.redirect('./sign-up');
    }
    return bcrypt
      .hash(password, 12)
      .then(hashedPassword => {
        const user = new User({
          email: email,
          password: hashedPassword,
          cart: { items: [] }
        });
        return user.save();;
      })
  })
    .then(result => {
      res.redirect('./login');
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  console.log('hit log out');
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/eShop');
  });
};


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
    category: category,
    userId: req.user._id
  });

  product
    .save()
    .then(result => {
      console.log('Created Product');
      console.log(product);
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
  console.log('In getCart');
  req.user
    .populate('cart.items.productId')
    .then(user => {
      console.log(user.cart.items);
      const products = user.cart.items;
      res.render('pages/eShop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      console.log('hitting postCart');
      res.redirect('/eShop/cart');
    });
}

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('./cart');
    })
    .catch(err => console.log(err));
};

exports.getOrder = (req, res, next) => {
  console.log('hitting getOrder');
  Order.find({ 'user.userId': req.user._id })
    .then(orders => {
      res.render('pages/eShop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, productData: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          name: req.user.name,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      return req.user.clearCart();
    })
    .then(() => {
      res.redirect('/eShop/orders');
    })
    .catch(err => console.log(err));
};
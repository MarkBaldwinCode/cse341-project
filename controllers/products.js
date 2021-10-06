let newBooks = ['A Century of Flight'];

exports.getAddProduct = (req, res, next) => {
    const books = newBooks.books;
    console.log(global.testBooks);
    res.render('./pages/proveActivities/prove02Shop', {
                docTitle: 'Add Product', 
                path:'/prove02AddProduct/addProduct',
                formsCSS: true,
                productCSS: true,
                activeAddProduct: true
            });
    }


exports.postAddProduct = (req, res, next) => {
        console.log(req.body);
        products.push({ title: req.body.title });
        res.redirect('/');
    };

exports.getProducts = (req, res, next) => {
        res.render('prove02Shop', {
            books: newBooks, 
            docTitle: 'Shop', 
            path:'/', 
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS:true
        });
    };

exports.getProducts;
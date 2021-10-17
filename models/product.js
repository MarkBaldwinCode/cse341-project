const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
    constructor(id, title, description, price, author, type, imageUrl, inCart, category) {
        this.id = Math.random();
        this.title = title;
        this.description = description;
        this.price = price;
        this.author = author;
        this.type = type;
        this.imageUrl = imageUrl;
        this.inCart = false;
        this.category = category;
    }

    save() {
        const db = getDb();
        return db.collection('products')
        .insertOne(this)
        .then(result => {
            //console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    }

    static fetchAll(){
        const db = getDb();
        //this type of find returns all products in products collection in mongo
        return db.collection('products')
        .find()
        .toArray()
        .then(products => {
            //console.log(products);
            return products;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static findById(prodId){
        const db = getDb();
        return db
        .collection('products')
        .find({_id: new mongodb.ObjectId(prodId)})
        .next()
        .then(product => {
            //console.log("In findById");
            //console.log(product);
            return product;
        })
        .catch(err => {
            console.log(err);
        });
    }

    

}

module.exports = Product;
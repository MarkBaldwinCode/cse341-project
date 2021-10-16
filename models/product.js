const getDb = require('../util/database').getDb;

class Product {
    constructor(title, price, description, imageUrl, author, type, category) {
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
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    }

}

module.exports = Product;
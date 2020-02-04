const products = require('../products.json')

const getProducts = (req, res) => {
    console.log(req.query)
    if(req.query.price) {
    res.status(200).send(products.filter(product => product.price >= +req.query.price))
    } else if (!req.query.price) {
        res.status(420).send(products)
    }
}

module.exports = getProducts
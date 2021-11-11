const { Console } = require('console');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
let productsList = require('../common/consts/products')
let shopingList = [];
router.get('/', (req, res) => {
  res.status(200).json(products.map((product) =>
  ({id: product.id, name: product.name, isFood: product.isFood})))
})

router.get('/shopingList', (req, res) => {
  const plainList = shopingList.filter(value => Object.keys(value).length !== 0);
  setTimeout(() => {
    res.status(200).json(plainList.map((product) => ({id: product.id, name: product.name})))
}, 3000);
})

router.post('/shopingList/new', jsonParser, (req, res) => {
  shopingList.push(req.body)
  setTimeout(() => {
    res.status(200).json(req.body)
}, 3000);
})

router.delete('/shopingList/:shopingListId', jsonParser, (req, res) => {
  shopingList.push(req.body)
  setTimeout(() => {
    res.status(200).json(req.body)
}, 3000);
})

router.post('/new', jsonParser, (req, res) => {
    products.push(req.body)
    res.status(200).json(req.body)
})

router.get("/:id", (req, res) => {
    setTimeout(() => {
        res.status(200).json(req.productsToReturn)
    }, 2000);
})

router.route("/:id")
    .get((req, res) => {
        res.status(200).json(req.productsToReturn)
    })
    .put(jsonParser,(req, res) => {
        const idFromParams = req.params.id;
        const existingIndex = products.findIndex((product) => product.id == idFromParams);
        products[existingIndex] = req.body;
        res.send(`Update get by id ${req.params.id}`)
    })
    .delete((req, res) => {
        if (req.productToDelete) {
            res.status(200).json(req.productToDelete);
            res.send(`HAS BEEN DELETED`)
        } else {
            res.status(404).json({error: 'Product not exist'})
        }
    })

    let products = productsList;
    router.param("id", (req, res, next, id) => {
        req.productsList = products;
        if (req.method === 'GET') {
            req.productsToReturn = products.find((product) => product.id === id);
        }
        if (req.method === 'DELETE') {
            req.productToDelete = products.find((product) => product.id === id);
            products = products.filter((product) => product.id !== id)
            req.productsList = products;
        }

        next();
    })

    router.param("shopingListId", (req, res, next, id) => {
      req.shopingList = shopingList;
      if (req.method === 'DELETE') {
          req.productToDelete = shopingList.find((product) => product.id === id);
          shopingList = shopingList.filter((product) => product.id !== id)
          req.shopingList = shopingList;
      }

      next();
  })

    router.param("/new", (req, res, next, id) => {
        next();
    })


module.exports = router;
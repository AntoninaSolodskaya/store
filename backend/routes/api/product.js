const express = require("express");
const Product = require("../../models/Product");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    Product.find({}, (err, products) => {
      res.json(products);
    });
  })
  .post((req, res) => {
    let product = new Product(req.body);
    product.save();
    res.status(201).send(product);
  });

// Middleware
router.use("/:id", (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) res.status(500).send(err);
    else {
      req.product = product;
      next();
    }
  });
});

router
  .route("/:id")
  .get((req, res) => {
    res.json(req.product);
  })
  .put((req, res) => {
    req.product.title = req.body.title,
    req.product.description = req.body.description,
    req.product.price = req.body.price,
    req.product.image = req.body.image,
    req.product.category = req.body.category,
    req.product.save();
    res.json(req.product);
  })
  .patch((req, res) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (let p in req.body) {
      req.product[p] = req.body[p];
    }
    req.product.save();
    res.json(req.product);
  })
  .delete((req, res) => {
    req.product.remove(err => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send("removed");
      }
    });
  });

module.exports = router;

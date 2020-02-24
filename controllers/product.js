const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Task',
    path: 'add-product'
  });
};
exports.postAddProduct = (req, res) => {
    const {title} = req.body;
    const product = new Product(null, title);
    console.log(product);
    product
      .save()
      .then(() => {
        res.redirect('/');
      })
      .catch(err => console.log(err));
  };


  exports.deleteProduct = (req, res) => {
  const {
    id
  } = req.params;

  Product.deleteById(id).then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.getEditProduct = (req, res) => {
  const {
    id
  } = req.params;

  Product.findById(id).
  then(([rows, fieldData]) => {
      res.render('shop/edit-product', {
        product: rows[0],
        pageTitle: 'Edit Task',
        path: ''
      });
    })
    .catch(err => console.log(err));
};

exports.postUpdateProduct = (req, res) => {
  const {
    id,
    title,
  } = req.body;

  const product = new Product(id, title);
  console.log(product);

  product
    .update()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('admin/add-product', {
        prods: rows,
        pageTitle: 'All Task',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};

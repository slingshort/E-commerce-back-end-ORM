const router = require('express').Router();
const { Product, Category, Tag } = require('../../models');

// GET all products
router.get('/', async(req, res)=> {
    try {
        const productData = await Product.findAll()
        res.status(200).json(productData)
    } catch(err) {
        res.status(404).json(err)
    }
});

// GET one product by id
router.get('/:id', async (req, res) => {
    try {
      const productData = await Product.findByPk(req.params.id, {
        include: [{ model: Tag }, { model: Category }],
      });
      if (productData) {
        res.status(200).json(productData);
      } else {
        res.status(404).json({ message: "No product with this id!" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

// POST req to create a new product
router.post('/', (req, res) => {
    Product.create({
        product_name: req.body.product_name,
        price: req.body.price,
        stock: req.body.stock,
        category_id: req.body.category_id,
        tagIds: req.body.tagIds
    })
        .then((product) => {
            // bulk create product tags
            if (req.body.tagIds.length) {
                const productTagIdArr = req.body.tagIds.map((tag_id) => {
                    return {
                        product_id: product.id,
                        tag_id,
                    };
                });
                return ProductTag.bulkCreate(productTagIdArr);
            }
            // if no product tags
            res.status(200).json(product);
        })
        .then((productTagIds) => res.status(200).json(productTagIds))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// DELETE a product
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: { id: req.params.id }
    });
    if (!productData) {
      res.status(404).json({ message: 'No product with this id!' });
      return;
    }
    res.status(200).json({message: 'Product deleted successfully'});
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;

const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET all categories
router.get('/', async(req, res)=> {
    try {
        const categoryData = await Category.findAll()
        res.status(200).json(categoryData)
    } catch(err) {
        res.status(404).json(err)
    }
});
// GET category by ID
router.get('/:id', async (req, res) => {
    try {
      const catgoryData = await Category.findByPk(req.params.id);
      if (catgoryData) {
        res.status(200).json(catgoryData);
      } else {
        res.status(404).json({ message: "No category with this id!" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

// POST req to create new category
router.post('/', async (req, res) => {
    try {
      const catgoryData = await Category.create({
        category_name: req.body.category_name,
      });
      res.status(200).json(catgoryData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// UPDATE req for category
router.put('/:id', async (req, res) => {
    try {
      let catgoryData = await Category.findByPk(req.params.id);
      if (catgoryData) {
        catgoryData = await Category.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
      } else {
        res.status(404).json({ message: "No category with this id!" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

// DELETE category by ID
router.delete('/:id', async (req, res) => {
    try {
      const categoryData = await Category.destroy({
        where: { id: req.params.id }
      });
      if (!categoryData) {
        res.status(404).json({ message: 'No category with this id!' });
        return;
      }
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
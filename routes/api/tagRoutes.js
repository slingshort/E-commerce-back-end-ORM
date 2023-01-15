const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// GET req to get all tags
router.get('/', async (req, res) => {
    try {
      const tagData = await tagData.findAll();
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET a single tag by ID
router.get('/:id', async (req, res) => {
    try {
      const tagData = await Tag.findByPk(req.params.id);
      if (tagData) {
        res.status(200).json(tagData);
      } else {
        res.status(404).json({ message: "No tag with this id!" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

// POST req to create a new tag
router.post('/', async (req, res) => {
    try {
      const tagData = await Product.create(req.body);
      res.status(200).json(tagData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// UPDATE a tag by ID
router.put('/:id', async (req, res) => {
    try {
      let data = await Tag.findByPk(req.params.id);
      if (data) {
        data = await Tag.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
      } else {
        res.status(404).json({ message: "No tag with this id!" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });


// DELETE a tag
router.delete('/:id', async (req, res) => {
    try {
      const tagData = await Product.destroy({
        where: { id: req.params.id }
      });
      if (!tagData) {
        res.status(404).json({ message: 'No tag with this id!' });
        return;
      }
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;
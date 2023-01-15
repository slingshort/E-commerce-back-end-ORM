const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
    foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: true
  },
  foreignKey: 'product_id',
//   dependent existence
  onDelete:'CASCADE'
});

Tag.belongsToMany(Product, {
  through: {
  model: ProductTag,
  unique: true,
  },
  foreignKey: 'tag_id',
  onDelete: 'CASCADE'
});

module.exports = { Product, Category, Tag, ProductTag,};
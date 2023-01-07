const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product);

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: true
  },
//   dependent existence
  onDelete:'CASCADE'
});

Tag.belongsToMany(Product, {
  through: {
  model: ProductTag,
  unique: true,
  },
  onDelete: 'CASCADE'
});

module.exports = { Product, Category, Tag, ProductTag,};
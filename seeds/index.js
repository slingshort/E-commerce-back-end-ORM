const seedCategories = require('./categorySeeds');
const seedProducts = require('./productSeeds');
const seedTags = require('./tagSeeds');
const seedProductTags = require('./productTagSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');

    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');

    await seedProductTags();
    console.log('\n----- PRODUCT TAGS SEEDED -----\n');

    process.exit(0);
};

seedAll();
require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

cosnt q1 = knexInstance.from('amazong_products').select('*').toQuery;

knexInstance('amazong_products')
    .select('*');
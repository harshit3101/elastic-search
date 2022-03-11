const { Client } = require('@elastic/elasticsearch')

const client = new Client({
   node: 'https://elastic:'+process.env.elasticPass+'@localhost:9200'
})

module.exports = client;  
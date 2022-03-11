// https://localhost:9200/gov/_mapping

var client = require('./es-connection.js');

async function createIndex(){

    const index = await client.indices.putMapping({
        index: 'gov',
        properties: {
            ConstituencyName: {
                type: 'keyword'
            },
            location: {
                type: "geo_point"
            }
        }

    });

    console.log('Harshit success');
    console.log(index);

    //{ acknowledged: true, shards_acknowledged: true, index: 'testindex' }
}

createIndex().catch(console.log);
var client = require('./es-connection.js');

async function createIndex(){

    const index = await client.indices.create({
        index: 'testindex' //lowercase only
    });

    console.log(index);

    //{ acknowledged: true, shards_acknowledged: true, index: 'testindex' }
}

createIndex().catch(console.log);
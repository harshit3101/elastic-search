var client = require('./es-connection.js');

async function deleteIndex(){

    const index = await client.indices.delete({
        index: 'testindex' //lowercase only
    });

    console.log(index);
    // { acknowledged: true }
}

deleteIndex().catch(console.log);
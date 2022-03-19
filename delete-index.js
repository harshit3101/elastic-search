var client = require('./es-connection.js');

async function deleteIndex(){

    try {
        const index = await client.indices.delete({
            index: 'mongo-users' //lowercase only
        });
    
        console.log('Harshit success');
        console.log(index);
        // { acknowledged: true }
        
    } catch (error) {
        console.log('Harshit Error');
        console.log(error);
    }
    
}

deleteIndex();
const client = require('./es-connection.js');
const handlers = require('./errorHandle.js');


async function addDocument(){

  client.search({
        index: 'gov',
        
      }).then(
        ...handlers
    ).finally(
        ()=>{
            console.log('Harshit Finally');
        }
    );

   

    //{ acknowledged: true, shards_acknowledged: true, index: 'testindex' }
}

addDocument();
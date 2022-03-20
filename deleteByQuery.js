const client = require('./es-connection.js');
const handlers = require('./errorHandle.js');


const index_name = "mongo-users";

async function deleteDocument(){

    client.deleteByQuery({  
        index: index_name,
        body: {
            query: {
                match: {
                    username: 'Devil1'
                }
            }
        }
      }).then(
        ...handlers
      )


}

deleteDocument();


const client = require('./es-connection.js');
const handlers = require('./errorHandle.js');

async function queryString(){

    try {
        let res = await client.search({
            index: 'gov',
            query: {
                query_string: {
                    "query" : "tony"
                }
            }
        });
        console.log("Harshit ES res hits");
        console.log(res?.hits);
        
    } catch (error) {
        console.log(error);
    }

}

queryString();

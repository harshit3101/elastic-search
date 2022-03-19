const client = require('./es-connection.js');
const handlers = require('./errorHandle.js');

const index_name = "mongo-users";

async function queryString(){

    try {
        let res = await client.search({
            index: index_name,
            body: {
                    query: {
                        bool: {
                            filter: {
                                geo_distance : {
                                    distance: '10km',
                                    location: {
                                        lat: '28.332862',
                                        lon: '77.339506'
                                    }
                                }
                            }
                        }
                    }
            }
        });
        console.log("Harshit ES res hits");
        console.log(JSON.stringify(res));
        let users = (res?.body?.hits?.hits|| []).flatMap(hit => hit._source);
        console.log(users);
        
    } catch (error) {
        console.log(error);
    }

}

queryString();

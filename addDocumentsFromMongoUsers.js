const client = require('./es-connection.js');
const handlers = require('./errorHandle.js');
const axios = require('axios');

axios.get('http://localhost:3000/get-users-data').then(
    res => {
    
        const operations = (res?.data || [])
        .flatMap(doc => [
            { index: { _index: 'mongo-users'}}
            ,{username: doc.username, location: {lat:doc.location.latitude, lon: doc.location.longitude}}
        ]);

        // console.log(operations);
        addDocument(operations);
    },
    err => {

    }

);

async function addDocument(operations){

    if(operations.length > 0){
        client.bulk({  
            body: operations 
          }).then(
            ...handlers
        ).finally(
            ()=>{
                console.log('Harshit Finally');
            }
        );
    
    }
   
}



//     const dataset = [{
//         id: 1,
//         text: 'If I bring me back.',
//         user: 'jon',
//         date: new Date()
//       },{
//         id: 1,
//         text: 'If I bring me back.',
//         user: 'jon',
//         date: new Date()
//       }]
    
// const operations = dataset.flatMap(doc => [{ index: { _index: 'mongo-users'} }, doc])


// async function addDocument(){

//     console.log(operations);

//     // if(operations.length > 0){
//     //     client.bulk({  
//     //         refresh: true,
//     //         operations 
//     //       }).then(
//     //         ...handlers
//     //     ).finally(
//     //         ()=>{
//     //             console.log('Harshit Finally');
//     //         }
//     //     );
    
//     // }
   

//     //{ acknowledged: true, shards_acknowledged: true, index: 'testindex' }
// }

// addDocument();
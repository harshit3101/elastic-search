const client = require('./es-connection.js');
const handlers = require('./errorHandle.js');


async function addDocument(){

    client.index({  
        index: 'gov',
        body: {
          "ConstituencyName": "Tony",
          "ConstituencyID": "E14000762",
          "ConstituencyType": "Borough",
          "Electorate": 74499,
          "ValidVotes": 4833443694,
        }
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
const client = require('./es-connection.js');
const handlers = require('./errorHandle.js');


async function addDocument(){

    client.index({  
        index: 'gov',
        body: {
          "ConstituencyName": "Ipswich",
          "ConstituencyID": "E14000761",
          "ConstituencyType": "Borough",
          "Electorate": 74499,
          "ValidVotes": 48334694,
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
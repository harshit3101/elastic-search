const client = require('./es-connection.js');
const handlers = require('./errorHandle.js');



async function deleteDocument(){

    let id_to_be_deleted;

    try {

        let res = await client.search({
            index: 'gov',
            query: {
                match: {
                    ConstituencyID: 'E14000761'
                }
            }
        });
        

        console.log("Harshit ES res hits");

        console.log(res);

    
        id_to_be_deleted = res?.hits?.hits[0]?._id;
        
        
    } catch (error) {
        console.log(error);
    }
    


if(id_to_be_deleted){

    console.log("Harshit ES delete document with"+ id_to_be_deleted);

    const doc = await client.get({
        index: 'gov',
        id: id_to_be_deleted
    });

    console.log(doc);
            
    
   client.delete({  
        index: 'gov',
        id: id_to_be_deleted
      }).then(
        ...handlers
      )
}else{
    console.log("Harshit ES nothing to delete");

}


}

deleteDocument();

// res?.hits
// [
//     {
//       _index: 'gov',
//       _id: 'kZ7WeX8BkPIfKWom-iQm',
//       _score: 0.35667494,
//       _source: {
//         ConstituencyName: 'Ipswich',
//         ConstituencyID: 'E14000761',
//         ConstituencyType: 'Borough',
//         Electorate: 74499,
//         ValidVotes: 48694
//       }
//     }
//   ]
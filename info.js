var client = require('./es-connection.js');


async function run () {
  // await client.index({
  //   index: 'gov',
  //   id: '1',
  //   document: {
  //     character: 'Ned Stark',
  //     quote: 'Winter is coming.'
  //   }
  // })

  // const exists = await client.exists({
  //   index: 'gov',
  //   id: 1
  // })

  // console.log(exists) // true

  // const test = await client.cat.indices({format: 'json'});
  // console.log(test)

  const test2 = await client.get({
      index: 'gov',
      id: 1
    });

  console.log(test2)
}

run().catch(console.log)
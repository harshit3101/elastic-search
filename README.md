

# Elastic search basic functions in js with different js handling styles such as Promises, async await, callback.

Examples: 

Promise -> https://github.com/harshit3101/elastic-search/blob/main/addDocument.js

async await -> https://github.com/harshit3101/elastic-search/blob/main/delete-document.js




## Installation 
https://www.elastic.co/guide/en/elasticsearch/reference/current/zip-windows.html

Or If you love cloud, follow below or skip to next step.

Provision a free cluster in sanbox envrionment 
https://app.bonsai.io/login

At this time: version of cluster is "7.10.2",
If you start different version then please update "@elastic/elasticsearch": "7.10"  version in package.json for avoiding client compataibility issues.

## Commands to get started

start ES cluster in local host (update es-connection for any other server)

(for bonsai add connection string into Envrionment variable 'BONSAI_ELASTIC_SEARCH_CONNECTION_STRING' )

after running you will get password 

add password into Envrionment variable 'elasticPass' 

Clone the code

1) Run NPM install

2) execute different scripts and play

#### EXample:
node info.js
 

#### Connection Client file
https://github.com/harshit3101/elastic-search/blob/main/es-connection.js

## APis to use in browser

https://www.elastic.co/guide/en/elasticsearch/reference/current/rest-apis.html


https://dzone.com/articles/23-useful-elasticsearch-example-queries

https://localhost:9200/gov

https://localhost:9200/gov/_doc/1

https://localhost:9200/gov/_source/1

https://localhost:9200/gov/_search?q='winter'

https://localhost:9200/gov/_search?q=character:Ned Stark

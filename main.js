// import axios from "axios";

// var axios = require('axios');
var data = JSON.stringify({
    "collection": "Users",
    "database": "UniSYNC",
    "dataSource": "Uni-SYNC",
    "projection": {
        "_id": 1
    }
});

let urls=[]

function logTabs(tabs) {
    const element = document.getElementById("tab_table")

    for (const tab of tabs) {
      urls.push(tab.url)
      const node = document.createTextNode(tab.title)
      const tr = document.createElement("tr")
      const td = document.createElement("td")
      const div = document.createElement("div")
      const a = document.createElement("a")
      const h5 = document.createElement("h5")

      div.setAttribute("class","active_tab")
      a.setAttribute("href",tab.url)
      
      h5.appendChild(node)
      a.appendChild(h5)
      div.appendChild(a)
      td.appendChild(div)
      tr.appendChild(td)
      
      element.appendChild(tr)

      
    }

    var config = {
      method: 'post',
      url: 'https://data.mongodb-api.com/app/data-kcqqe/endpoint/data/v1/action/insertOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'api-key': 'ON7CfbL2PTB2I1RINIeWdwLgxu38aZY2g2ff21PNJZPxrFkCF8u866kAyuL8Akyx',
      },
      data: {
        "collection":"Users",
        "database":"UniSYNC",
        "dataSource":"Uni-SYNC",
        "document": {
          "Urls": urls,
      }
      }
  };
              
      axios(config)
          .then(function (response) {
              console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
              console.log(error);
          });
  

  }
  

browser.tabs.query({}).then(logTabs);

console.log(urls)
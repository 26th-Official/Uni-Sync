let urls=[]

function logTabs(tabs) {
    for (const tab of tabs) {
      urls.push(tab.url)
    }
  }
  

  
browser.tabs.query({}).then(logTabs);



console.log(urls)






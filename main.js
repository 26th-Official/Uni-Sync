let urls=[]

function logTabs(tabs) {
    for (const tab of tabs) {
    //   console.log(tab.url);
      urls.push(tab.url)
    }
  }
  

  
browser.tabs.query({}).then(logTabs);

console.log(urls)


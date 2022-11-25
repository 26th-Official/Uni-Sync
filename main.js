let urls=[]

function logTabs(tabs) {
    const element = document.getElementById("tab_table")

    for (const tab of tabs) {
      urls.push(tab.url)
      const node = document.createTextNode(tab.url)
      const tr = document.createElement("tr")
      const div = document.createElement("div")
      div.classList.add("active_tab")
      const h5 = document.createElement("h5")

      h5.appendChild(node)
      div.appendChild(h5)
      tr.appendChild(div)
      
      element.appendChild(tr)
    }
  }
  

browser.tabs.query({}).then(logTabs);

console.log(urls)











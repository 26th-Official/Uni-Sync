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
  }
  

browser.tabs.query({}).then(logTabs);

console.log(urls)











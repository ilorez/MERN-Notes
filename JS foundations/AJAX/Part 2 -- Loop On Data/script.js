/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/ilorez/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        // console.log(this.responseText);
        let jsData = JSON.parse(this.responseText);
        console.log(jsData);
        for (let i = 0; i < jsData.length; i++) {
            let div = document.createElement("div");
            let a = document.createElement("a")
            a.setAttribute("href", jsData[i].html_url)
            console.log(a)
            let repoName = document.createTextNode(jsData[i].name);
            a.appendChild(repoName);
            div.appendChild(a)
            document.body.appendChild(div);
        }
    }
};
LoadData();
var options = {
    valueNames: ['company-city']
};

var userList = new List('data', options);

async function LoadData() {
    let data = await drive('1jRtK3XXZm9ZkyqZQjKJcFF2Rbt2A8Ai-9CxiT2-Dyf0')
    let dataTable = document.querySelector('#data');
    for (let dataContent = 0; dataContent < data.length; dataContent++) {

        dataTable.innerHTML += "<div class='company font-mont'>" + "<p class='company-name'><span class='hide'>Company Name:</span> " + data[dataContent].companyname + "</p>" + "<p class='company-person'><span class='hide'>Person Name:</span> " + data[dataContent].personname + "</p>" + "<p class='company-number'><span class='hide'>Contact No. :</span> " + data[dataContent].contactnumber + "</p>" + "<p class='company-city'><span class='hide'>City:</span>" + data[dataContent].city + "</p>" + "</div>"
    }
}
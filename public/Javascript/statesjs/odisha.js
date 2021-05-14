LoadData();
async function LoadData() {
    let data = await drive('18P5qA4gGwg1jKMEv9ja833mj3lkCQqe5L8JOJakXbss')
    let dataTable = document.querySelector('#data');
    for (let dataContent = 0; dataContent < data.length; dataContent++) {

        dataTable.innerHTML += "<div class='company font-mont'>" + "<p class='company-name'><span class='hide'>Company Name:</span> " + data[dataContent].companyname + "</p>" + "<p class='company-person'><span class='hide'>Person Name:</span> " + data[dataContent].personname + "</p>" + "<p class='company-number'><span class='hide'>Contact No. :</span> " + data[dataContent].contactnumber + "</p>" + "<p class='company-city'><span class='hide'>City:</span>" + data[dataContent].city + "</p>" + "</div>"
    }
}
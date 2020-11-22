var totalEmail, keys, alldata;
var contactUsRef = firebase.database().ref("messages/");

contactUsRef.on('value', data => {
  alldata = data.val();
  if (alldata === null || alldata === undefined) {
    var table = document.getElementById('contactus-table-data');
    table.innerHTML = `<tr><td colspan="4" style="text-align:center">No Data Found!</td></tr>`;

  } else {
    keys = Object.keys(alldata);
    totalEmail = keys.length;
    createTable();
  }
}, errEmailsData);

function createTable() {
  var table = document.getElementById('contactus-table-data');
  var data = "";
  for (var i = 0; i < totalEmail; i++) {
    var index = keys[i];
    data += `<tr><th scope="row">${i+1}</th><td>${alldata[index].name}</td><td>${alldata[index].email}</td>
    <td>${alldata[index].message}</td></tr>`;
  }
  table.innerHTML = data;
}


function errEmailsData(err) {
  console.log("Error!! id: ", err);
}
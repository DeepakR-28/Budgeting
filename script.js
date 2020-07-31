var balance = parseInt(prompt("Enter your Budget"));
console.log(balance);
if (balance == NaN) {
  alert("Enter your budget ya");
}
var things = [];
function calculate() {
  var amount = document.getElementById("cost").value;
  var what = document.getElementById("item").value;
  balance -= parseInt(amount);
  if (what != "" || amount != "") {
    things.push(what + " " + amount);
  } else {
    window.alert("you missed an entry yo");
  }
  document.getElementById("balance").innerHTML = "Your Balance is " + balance;
}

function displayTable() {
  if (things.length == 0) {
    window.alert("Please enter some data macha.");
  }
  var table = document.getElementById("myTable");
  for (var i = 0; i < things.length; i++) {
    arr = things[i].split(" ");
    console.log(arr);
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = i + 1 + ":";
    cell2.innerHTML = arr[0];
    cell3.innerHTML = arr[1];
  }
}

function deleteRow() {
  var index = parseInt(prompt("Enter the position you want to delete "));
  if (index > things.length) {
    window.alert("Naaah, enter a valid position");
    deleteRow();
  }
  document.getElementById("myTable").deleteRow(index - 1);
  things.splice(index - 1, 1);
  arr = things[index - 1].split(" ");
  balance += parseInt(arr[1]);
  console.log(balance);
  document.getElementById("balance").innerHTML = "Your Balance is " + balance;
}

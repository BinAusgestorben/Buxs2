

document.addEventListener("DOMContentLoaded", function () {
  console.log("ProfileDom");
  profiledataload();
  profilelevelload();
});


function getbalance() {
    if (localStorage.getItem("balance") === null) {
      balance = 250;
      storebalance();
    }
    else {
     balance = parseFloat(localStorage.getItem("balance")); 
    }
  }
  
  function storebalance(){
    localStorage.setItem("balance", balance);
  }

function balanceonload() {
    document.getElementById("balanceamount").innerHTML = balance.toFixed(2);
  }

function profiledataload() {
  document.getElementById("profileupperusername").innerHTML = username;
}

function profilelevelload(){
  document.getElementById("profileupperlevel").innerHTML = userlevel;
  document.getElementById("profiletoprightspan").innerHTML = userwager.toFixed(0);
  if (calculatesum()<10){
    document.getElementById("profiletoprightspangoal"). innerHTML =  "/ 10";
  }
  else {
    document.getElementById("profiletoprightspangoal"). innerHTML =  "/ "+calculatesum().toFixed(0) + " XP";
  }
  
  document.getElementById("profilestatwagered").innerHTML = userwager.toFixed(2);
  document.getElementById("profilestatwithdrawn").innerHTML = userwithdraw.toFixed(2);
  document.getElementById("profilestatdeposited").innerHTML = userdeposit.toFixed(2);
  document.getElementById("profilestatprofit").innerHTML = ((balance + userwithdraw) - userdeposit).toFixed(2); 
}

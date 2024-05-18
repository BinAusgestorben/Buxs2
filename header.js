//userlevel = calculatelevel();


let balance = 0;
let isfirst = true;


document.addEventListener("DOMContentLoaded", function () {
    console.log("ja");
    userlevel = calculatelevel();
    starter();
  });


function checklogin(){
    if (localStorage.getItem("loggedin") == "true") {
      return true;
    }
    else {
      return false;
    }
  }
  
  function starter(){
    if (checklogin()){
      getUserData();
      loggedinheader();
      getbalance();
      balanceonload();
      changebalancelistener();
      gamesbuttonlistener();
    }
  }
  
  function getUserData(){
    username = localStorage.getItem("username");
  }
  
  function loggedinheader(){
    document.getElementById("bignavbarrightnotlogged").remove();
    balancefieldcreate();
    loggedrightcreate();
  }
  
  function balancefieldcreate(){
    let bignavbarsplitter = document.getElementById("bignavbarsplitter");
  
    let balancefieldcontainer = document.createElement("div");
    balancefieldcontainer.id = "balancefieldcontainer";
    balancefieldcontainer.className = "balancefieldcontainer";
    bignavbarsplitter.appendChild(balancefieldcontainer);
  
    let balancebutton = document.createElement("button");
    balancebutton.className = "balancebutton";
    balancebutton.type = "button";
    balancebutton.setAttribute("aria-expanded", "false");
    balancefieldcontainer.appendChild(balancebutton);
  
    let balancecontainer = document.createElement("div");
    balancecontainer.className = "balancecontainer";
    balancebutton.appendChild(balancecontainer);
  
    let balancegemimgcontainer = document.createElement("div");
    balancegemimgcontainer.className = "balancegemimgcontainer";
    balancecontainer.appendChild(balancegemimgcontainer);
  
    let balanceimgwrapper = document.createElement("div");
    balanceimgwrapper.className = "balanceimgwrapper";
    balancegemimgcontainer.appendChild(balanceimgwrapper);
  
    let balanceimage = document.createElement("img");
    balanceimage.setAttribute("src", "/images/gem.svg");
    balanceimgwrapper.appendChild(balanceimage);
  
    let balanceamount = document.createElement("span");
    balanceamount.className = "balanceamount";
    balanceamount.id = "balanceamount";
    balanceamount.innerHTML = "0.00";
    balancecontainer.appendChild(balanceamount);
  
    /*let balancegems = document.createElement("div");
    balancegems.className = "balancegems";
    balancegems.innerHTML = "gems";
    balancebutton.appendChild(balancegems);*/
  }
  
  function loggedrightcreate(){
    let bignavbarsplitter = document.getElementById("bignavbarsplitter");
  
    let logrightcontainer = document.createElement("div");
    logrightcontainer.className = "logrightcontainer";
    bignavbarsplitter.appendChild(logrightcontainer);
  
    let lognotificationcontainer = document.createElement("div");
    lognotificationcontainer.className = "lognotificationcontainer";
    logrightcontainer.appendChild(lognotificationcontainer);
  
    let lognotificationcontainerinner = document.createElement("div");
    lognotificationcontainerinner.className = "lognotificationcontainerinner";
    lognotificationcontainer.appendChild(lognotificationcontainerinner);
  
    let lognotificationbutton = document.createElement("button");
    lognotificationbutton.type = "button";
    lognotificationbutton.setAttribute("aria-expanded", "false");
    lognotificationbutton.className = "lognotificationbutton";
    lognotificationcontainerinner.appendChild(lognotificationbutton);
  
    const notificationsvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    notificationsvg.setAttribute("stroke", "currentColor");
    notificationsvg.setAttribute("fill", "currentColor");
    notificationsvg.setAttribute("stroke-width", "0");
    notificationsvg.setAttribute("viewBox", "0 0 512 512");
    notificationsvg.setAttribute("height", "1em");
    notificationsvg.setAttribute("width", "1em");
    notificationsvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    lognotificationbutton.appendChild(notificationsvg);
  
  
    const notificationpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    notificationpath.setAttribute("d", "M255.9 456c31.1 0 48.1-22 48.1-53h-96.3c0 31 17 53 48.2 53zM412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.4-11-24.7-24.4-24.6-13.4-.2-24.4 11.2-24.4 24.6v2.9c0 3.7-2.6 5-6.2 5.9-38.5 9.1-79.6 46.5-79.6 139.8 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h280.1c16.3 0 25.7-18.8 15.8-31.8z");
    notificationsvg.appendChild(notificationpath);
  
    let headlessuidiv = document.createElement("div");
    headlessuidiv.id = "headlessuidiv";
    headlessuidiv.style.position = "fixed";
    headlessuidiv.style.top = "1px";
    headlessuidiv.style.left = "1px";
    headlessuidiv.style.width = "1px";
    headlessuidiv.style.height = "1px";
    headlessuidiv.style.padding = "0px";
    headlessuidiv.style.margin = "-1px";
    headlessuidiv.style.overflow = "hidden";
    headlessuidiv.setAttribute("clip", "rect(0px, 0px, 0px, 0px)");
    headlessuidiv.setAttribute("white-space", "nowrap");
    headlessuidiv.setAttribute("border-width", "0px");
    lognotificationcontainer.appendChild(headlessuidiv);
  
    let loguserdisplaylinker = document.createElement("a");
    loguserdisplaylinker.setAttribute("href", "profile.html");
    logrightcontainer.appendChild(loguserdisplaylinker);

    let loguserdisplaycontainer = document.createElement("div");
    loguserdisplaycontainer.className = "loguserdisplaycontainer";
    loguserdisplaylinker.appendChild(loguserdisplaycontainer);
  
    let loguserdisplayinner = document.createElement("div");
    loguserdisplayinner.className = "loguserdisplayinner";
    loguserdisplayinner.setAttribute("aria-expanded", "false");
    loguserdisplaycontainer.appendChild(loguserdisplayinner);
  
    let loguserprofilecontainer = document.createElement("a");
    loguserprofilecontainer.className = "loguserprofilecontainer";
    loguserdisplayinner.appendChild(loguserprofilecontainer);
  
    let loguserprofilepicturecontainer = document.createElement("div");
    loguserprofilepicturecontainer.className = "loguserprofilepicturecontainer";
    loguserprofilecontainer.appendChild(loguserprofilepicturecontainer);
  
    let loguserprofilepicture = document.createElement("img");
    loguserprofilepicture.setAttribute("alt", username);
    loguserprofilepicture.setAttribute("srcset", "/images/Anonymous.webp");
    loguserprofilepicture.setAttribute("src", "/images/Anonymous.webp");
    loguserprofilepicture.setAttribute("width", "32");
    loguserprofilepicture.setAttribute("height", "32");
    loguserprofilepicture.setAttribute("decoding", "async");
    loguserprofilepicture.className = "loguserprofilepicture";
    loguserprofilepicture.setAttribute("loading", "lazy");
    loguserprofilepicture.style.color = "transparent";
    loguserprofilepicturecontainer.appendChild(loguserprofilepicture);
  
    let loguserinformationcontainer = document.createElement("div");
    loguserinformationcontainer.className = "loguserinformationcontainer";
    loguserdisplayinner.appendChild(loguserinformationcontainer);
  
    let loguserinformationnamecontainer = document.createElement("div");
    loguserinformationnamecontainer.className = "loguserinformationnamecontainer";
    loguserinformationcontainer.appendChild(loguserinformationnamecontainer);
  
    let loguserinformationlevel = document.createElement("span");
    loguserinformationlevel.className = "loguserinformationlevel";
    loguserinformationlevel.innerHTML = userlevel;
    loguserinformationnamecontainer.appendChild(loguserinformationlevel);
  
    let loguserinformationusername = document.createElement("span");
    loguserinformationusername.className = "loguserinformationusername";
    loguserinformationusername.innerHTML = username;
    loguserinformationnamecontainer.appendChild(loguserinformationusername);
  
    let loguserinformationlevelbarcontainer = document.createElement("div");
    loguserinformationlevelbarcontainer.className = "loguserinformationlevelbarcontainer";
    loguserinformationcontainer.appendChild(loguserinformationlevelbarcontainer);
  
    let loguserinformationlevelbar = document.createElement("div");
    loguserinformationlevelbar.id = "loguserinformationlevelbar";
    loguserinformationlevelbar.className = "loguserinformationlevelbar";
    if(currentlevelprogress() == 1){
      loguserinformationlevelbar.style.width = "0%";
    }
    else {
    loguserinformationlevelbar.style.width = ((currentlevelprogress().toFixed(2))*100)+"%";  
    }
    
    loguserinformationlevelbarcontainer.appendChild(loguserinformationlevelbar);
  
    let loguserdisplayarrow = document.createElement("div");
    loguserdisplayarrow.className = "loguserdisplayarrow";
    loguserdisplayinner.appendChild(loguserdisplayarrow);
  
    const loguserdisplayarrowsvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    loguserdisplayarrowsvg.setAttribute("stroke", "currentColor");
    loguserdisplayarrowsvg.setAttribute("fill", "currentColor");
    loguserdisplayarrowsvg.setAttribute("stroke-width", "0");
    loguserdisplayarrowsvg.setAttribute("viewBox", "0 0 16 16");
    loguserdisplayarrowsvg.setAttribute("class", "loguserdisplayarrowsvg");
    loguserdisplayarrowsvg.setAttribute("height", "1em");
    loguserdisplayarrowsvg.setAttribute("width", "1em");
    loguserdisplayarrowsvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    loguserdisplayarrow.appendChild(loguserdisplayarrowsvg);
  
  
    const loguserdisplayarrowpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    loguserdisplayarrowpath.setAttribute("d", "M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z");
    loguserdisplayarrowsvg.appendChild(loguserdisplayarrowpath);
  }



  
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










function changebalancelistener(){
  let bigcontainer = document.getElementById("balancefieldcontainer");

  
  bigcontainer.addEventListener("mouseenter", () => {
    if(isfirst){
      changebalancefield(bigcontainer);
      isfirst = false;
    }
  });


  // Mouse leave event with event delegation
  bigcontainer.addEventListener("mouseleave", (event) => {
    // Check if the relatedTarget is not a child of bigcontainer
    if (!bigcontainer.contains(event.relatedTarget)) {
      bigcontainer.innerHTML = ""; // Clear the content of bigcontainer
      redobalancefield(bigcontainer);
      isfirst = true;
    }
  });
}


function redobalancefield(bigcontainer){
  let balancebutton = document.createElement("button");
    balancebutton.className = "balancebutton";
    balancebutton.type = "button";
    balancebutton.setAttribute("aria-expanded", "false");
    bigcontainer.appendChild(balancebutton);
  
    let balancecontainer = document.createElement("div");
    balancecontainer.className = "balancecontainer";
    balancebutton.appendChild(balancecontainer);
  
    let balancegemimgcontainer = document.createElement("div");
    balancegemimgcontainer.className = "balancegemimgcontainer";
    balancecontainer.appendChild(balancegemimgcontainer);
  
    let balanceimgwrapper = document.createElement("div");
    balanceimgwrapper.className = "balanceimgwrapper";
    balancegemimgcontainer.appendChild(balanceimgwrapper);
  
    let balanceimage = document.createElement("img");
    balanceimage.setAttribute("src", "/images/gem.svg");
    balanceimgwrapper.appendChild(balanceimage);
  
    let balanceamount = document.createElement("span");
    balanceamount.className = "balanceamount";
    balanceamount.id = "balanceamount";
    balanceamount.innerHTML = balance.toFixed(2);
    balancecontainer.appendChild(balanceamount);
  
    /*let balancegems = document.createElement("div");
    balancegems.className = "balancegems";
    balancegems.innerHTML = "gems";
    balancebutton.appendChild(balancegems);*/
}






function changebalancefield(bigcontainer){

  let headlessuibalancecontainer = document.createElement("div");
  headlessuibalancecontainer.className = "headlessuibalancecontainer";
  headlessuibalancecontainer.id = "headlessui-popover-panel";
  bigcontainer.appendChild(headlessuibalancecontainer);

  let balancepanel = document.createElement("div");
  balancepanel.className = "balancepanel";
  headlessuibalancecontainer.appendChild(balancepanel);

  let balancepanelinner = document.createElement("div");
  balancepanelinner.className ="balancepanelinner";
  balancepanel.appendChild(balancepanelinner);

  let newbalanceinput = document.createElement("input");
  newbalanceinput.type = "number";
  newbalanceinput.setAttribute("name", "balance");
  newbalanceinput.className = "newbalanceinput";
  newbalanceinput.id = "newbalanceinput";
  balancepanelinner.appendChild(newbalanceinput);


  let newbalancebutton = document.createElement("button");
  newbalancebutton.className = "newbalancebutton";
  newbalancebutton.id = "newbalancebutton";
  balancepanelinner.appendChild(newbalancebutton);

  let newbalancebuttoninner = document.createElement("div");
  newbalancebuttoninner.className = "newbalancebuttoninner";
  newbalancebutton.appendChild(newbalancebuttoninner);

  let newbalancebuttoninnersplitter = document.createElement("div");
  newbalancebuttoninnersplitter.className = "newbalancebuttoninnersplitter";
  newbalancebuttoninner.appendChild(newbalancebuttoninnersplitter);

  let newbalancebuttonchangeicon = document.createElement("img");
  newbalancebuttonchangeicon.setAttribute("src", "/images/ChangeIcon.svg");
  newbalancebuttoninnersplitter.appendChild(newbalancebuttonchangeicon);

  /*let newbalancebuttontext = document.createTextNode("Change");
  newbalancebuttoninnersplitter.appendChild(newbalancebuttontext);*/


  balanceinputlistener(newbalancebutton, newbalanceinput, bigcontainer);
}



function balanceinputlistener(newbalancebutton, newbalanceinput, bigcontainer){
  newbalancebutton.addEventListener("click", function () {
    console.log("ausgefo");
    let newbalancevalue = newbalanceinput.value;
    console.log(newbalancevalue + "==== Newbalnc");
    if (newbalancevalue <= 1000000){
     balance = parseInt(newbalancevalue);
      storebalance();

      bigcontainer.innerHTML = "";
      redobalancefield(bigcontainer);
      isfirst = true;
      balanceonload();
    }
    else {
      errorcreate(-74,  "Please enter a Value smaller than 1.000.000");
    }


    //redobalancefield();

  });
}










// Games panel



let gamesdata = [["Battles", "PvP Case Opening", "Battles.html", "25", "33", 3, ["M31.7982 5.72844L27.1699 4.65229L26.1419 3.96308L26.6771 3.22979C26.9656 2.83462 26.8651 2.29009 26.4527 2.01365L24.741 0.866094C24.3287 0.589654 23.7605 0.685924 23.472 1.0811L22.9368 1.81438L22.453 1.49008C22.0188 1.19899 21.4207 1.30036 21.1169 1.71643L18.2827 5.59926C17.9789 6.01533 18.0847 6.58863 18.5189 6.87966L19.0027 7.20397L17.3262 9.5007L19.7129 12.7704L22.2077 9.3526L23.2356 10.0418L25.8774 13.8394C25.9785 13.9849 26.1742 14.0401 26.3413 13.9699C27.0875 13.6565 29.0956 12.6867 30.4336 10.8537C31.7716 9.02061 32.0337 6.88032 32.085 6.10109C32.0966 5.92639 31.9758 5.7697 31.7982 5.72844Z", "M12.373 16.2862L8.56843 21.4984C8.27998 21.8936 8.38043 22.4381 8.79278 22.7145L10.5045 23.862C10.9168 24.1385 11.485 24.0422 11.7735 23.647L14.7597 19.556L12.373 16.2862Z", "M23.5173 21.4985L13.0833 7.20422L13.5671 6.87991C14.0013 6.58882 14.107 6.01558 13.8033 5.59951L10.969 1.71662C10.6653 1.30055 10.0671 1.19918 9.63295 1.49027L9.14916 1.81458L8.61391 1.08129C8.32545 0.686177 7.75737 0.589787 7.34489 0.866287L5.63319 2.01372C5.22084 2.29016 5.12038 2.83463 5.40884 3.22987L5.94409 3.96315L4.91609 4.6523L4.0311 4.85805L0.287712 5.72845C0.110426 5.76971 -0.0107731 5.92682 0.000757703 6.10128C0.0520824 6.88057 0.314221 9.0208 1.65224 10.8538C2.99025 12.6869 4.99831 13.6567 5.74455 13.9701C5.91194 14.0404 6.10702 13.9854 6.20842 13.8396L8.34507 10.7681L8.85017 10.0419L9.87817 9.35273L20.3122 23.6471C20.6006 24.0422 21.1687 24.1385 21.5812 23.8621L23.2929 22.7146C23.7053 22.4382 23.8057 21.8936 23.5173 21.4985Z"]],
["Upgrader", "Upgrade your skins", "upgrader.html" , "23", "21" , 3, ["M4 20.1944V22.75L10.4606 17.6389L17 22.75V20.1944L10.4606 15.0833L4 20.1944Z", "M2 14.7639V17.9583L10.4485 11.5694L19 17.9583V14.7639L10.4485 8.375L2 14.7639Z", "M0 8.62407L0 12.5819L10.2623 4.66621L20.6498 12.5819V8.62407L10.2623 0.708355L0 8.62407Z"]],
["Mines", "Uncover the mines", "mines.html" , "35", "28" ,1, ["M27.6994 3.78998C28.8447 6.60048 26.4105 10.0261 25.5887 11.0664L27.0704 12.5481C27.5894 13.0664 27.5894 13.9055 27.0704 14.4233L25.4657 16.028C26.3268 17.7867 26.7783 19.7187 26.7783 21.6716C26.7783 28.7801 20.995 34.5635 13.8865 34.5635C6.77793 34.5635 0.994629 28.7801 0.994629 21.6716C0.994629 14.563 6.77793 8.77963 13.8865 8.77963C15.5341 8.77963 17.136 9.09202 18.6636 9.70775L20.509 7.86117C21.0272 7.3434 21.8663 7.3434 22.3841 7.86117L23.6981 9.17507C24.5664 7.99971 25.7154 5.94238 25.2424 4.7891C24.8388 3.80251 23.053 3.49798 22.0229 3.40479C20.6551 3.2709 18.9371 4.12746 17.1141 5.03638L17.0458 5.07046L17.0433 5.07169C13.8042 6.68514 9.77351 8.69286 6.21034 5.36365C5.67528 4.86439 5.64773 4.02539 6.14679 3.49082C6.64695 2.95575 7.48605 2.92711 8.02112 3.42697C10.0908 5.35948 12.3649 4.44031 15.8627 2.69776L15.9157 2.67135C17.9978 1.63375 20.1436 0.564365 22.2636 0.76456C25.1594 1.02851 26.9881 2.04614 27.6994 3.78998ZM13.5422 28.2302C19.3062 28.2302 23.9995 23.646 24.1751 17.9246C24.5323 19.0037 24.7257 20.1575 24.7257 21.3564C24.7257 27.3822 19.8408 32.2672 13.815 32.2672C7.78911 32.2672 2.9042 27.3822 2.9042 21.3564C2.9042 20.7104 2.96035 20.0775 3.06803 19.4623C3.95175 24.4457 8.305 28.2302 13.5422 28.2302ZM12.7241 12.0601C12.7241 12.738 11.9914 13.2876 11.0875 13.2876C10.1836 13.2876 9.4509 12.738 9.4509 12.0601C9.4509 11.3822 10.1836 10.8326 11.0875 10.8326C11.9914 10.8326 12.7241 11.3822 12.7241 12.0601ZM17.6336 18.743C20.0439 18.743 21.9979 17.2775 21.9979 15.4697C21.9979 13.662 20.0439 12.1965 17.6336 12.1965C15.2233 12.1965 13.2693 13.662 13.2693 15.4697C13.2693 17.2775 15.2233 18.743 17.6336 18.743Z"]],
["Cases", "Open Skins", "CaseNav.html" , "24", "30" , 1, ["M21 4.23529H24V24H6V4.23529H9V2.82353C9 2.07468 9.31607 1.35651 9.87868 0.826993C10.4413 0.297478 11.2044 0 12 0H18C18.7957 0 19.5587 0.297478 20.1213 0.826993C20.6839 1.35651 21 2.07468 21 2.82353V4.23529ZM25.5 4.23529H27C27.7957 4.23529 28.5587 4.53277 29.1213 5.06229C29.6839 5.5918 30 6.30998 30 7.05882V21.1765C30 21.9253 29.6839 22.6435 29.1213 23.173C28.5587 23.7025 27.7957 24 27 24H25.5V4.23529ZM4.5 4.23529V24H3C2.20435 24 1.44129 23.7025 0.87868 23.173C0.316071 22.6435 0 21.9253 0 21.1765V7.05882C0 5.50588 1.35 4.23529 3 4.23529H4.5ZM12 2.82353V4.23529H18V2.82353H12Z"]]
];


function gamesbuttonlistener(){
  let gamesbutton = document.getElementById("gamesdropdownbutton");

  gamesbutton.addEventListener("click", function () {
    headlessFocusSentinel(0);
    headlessFocusSentinel(1);
    gamesdropdowncreate();
    //headlessFocusSentinel(2);
  });
}



function gamesdropdowncreate(){
  let gamescontainer = document.getElementById("gamesdropdown");

  let gamesuipanel = document.createElement("div");
  gamesuipanel.id = "gamesuipanel";
  gamesuipanel.className = "gamesuipanel";
  gamescontainer.appendChild(gamesuipanel);

  let gamesuinav = document.createElement("nav");
  gamesuipanel.appendChild(gamesuinav);

  let gamesuiul = document.createElement("ul");
  gamesuinav.appendChild(gamesuiul);

  for (let i = 0; i < gamesdata.length; i++){
    let gamesuibutton = document.createElement("button");
    gamesuibutton.className = "gamesuibutton";
    gamesuibutton.type = "button";
    gamesuiul.appendChild(gamesuibutton);

    let gamesuili = document.createElement("li");
    gamesuibutton.appendChild(gamesuili);

    let gamesuilinker = document.createElement("a");
    gamesuilinker.className = "gamesuilinker";
    gamesuilinker.setAttribute("href", gamesdata[i][2]);
    gamesuili.appendChild(gamesuilinker);

    let gamesuibuttoninner = document.createElement("div");
    gamesuibuttoninner.className = "gamesuibuttoninner";
    gamesuilinker.appendChild(gamesuibuttoninner);

    let gamesuibuttonsvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    gamesuibuttonsvg.setAttribute("viewBox", "0 0 "+gamesdata[i][4]+" "+gamesdata[i][3]);
    gamesuibuttonsvg.setAttribute("class", "gamesuibuttonsvg");
    gamesuibuttonsvg.setAttribute("height", gamesdata[i][3]);
    gamesuibuttonsvg.setAttribute("width", gamesdata[i][4]);
    gamesuibuttonsvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    gamesuibuttoninner.appendChild(gamesuibuttonsvg);

    for (let z = 0; z<gamesdata[i][5]; z++) {
      let gamesuibuttonpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      gamesuibuttonpath.setAttribute("d", gamesdata[i][6][z]);
      gamesuibuttonsvg.appendChild(gamesuibuttonpath);
    }


    let gamesuibuttontextcontainer = document.createElement("div");
    gamesuibuttoninner.appendChild(gamesuibuttontextcontainer);

    let gamesuibuttontextmain = document.createElement("div");
    gamesuibuttontextmain.className = "gamesuibuttontextmain";
    gamesuibuttontextmain.innerHTML = gamesdata[i][0];
    gamesuibuttontextcontainer.appendChild(gamesuibuttontextmain);

    let gamesuibuttontextdescription = document.createElement("div");
    gamesuibuttontextdescription.className = "gamesuibuttontextdescription";
    gamesuibuttontextdescription.innerHTML = gamesdata[i][1];
    gamesuibuttontextcontainer.appendChild(gamesuibuttontextdescription);
  }







  let divElement = document.createElement("div");
    document.getElementById("headlessui-portal-clicker").appendChild(divElement);

    let headlessuidialog = document.createElement("div");
    headlessuidialog.className = "uiDiv positionerClassClicker";
    headlessuidialog.id = "headlessui-dialog-clicker";
    headlessuidialog.setAttribute("role", "dialog");
    headlessuidialog.setAttribute("aria-modal", "true");
    divElement.appendChild(headlessuidialog);

    let headlessuidialogoverlay = document.createElement("div");
    headlessuidialogoverlay.className = "dialogOverlayClicker enter-to entered";
    headlessuidialogoverlay.id = "dialog-Overlay-clicker";
    headlessuidialogoverlay.setAttribute("aria-hidden", "true");
    headlessuidialog.appendChild(headlessuidialogoverlay);

    document.getElementById("dialog-Overlay-clicker").addEventListener("click", function () {
      headlessClickHandler();
    });
}




function headlessClickHandler() {
  document.getElementById("headlessui-portal-clicker").innerHTML = "";
  document.getElementById("focusGuard-0").remove();
  document.getElementById("focusGuard-1").remove();
  document.getElementById("gamesuipanel").remove();
  //document.getElementById("focusGuard-2").remove();
}






function headlessFocusSentinel(wich) {
  let thefocuscontainer = document.getElementById("gamesdropdown");
    let focusGuard = document.createElement("button");
    focusGuard.id = "focusGuard-"+wich;
    focusGuard.type = "button";
    focusGuard.setAttribute("aria-hidden", "true");
    focusGuard.style.position = "fixed";
    focusGuard.style.top = "1px";
    focusGuard.style.left = "1px";
    focusGuard.style.width = "1px";
    focusGuard.style.height = "0px";
    focusGuard.style.padding = "0px";
    focusGuard.style.margin = "-1px";
    focusGuard.style.overflow = "hidden";
    focusGuard.setAttribute("clip", "rect(0px, 0px, 0px, 0px)");
    focusGuard.setAttribute("white-space", "nowrap");
    focusGuard.setAttribute("border-width", "0px");
    thefocuscontainer.appendChild(focusGuard);
  }




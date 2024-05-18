

let gamemodes = ["battle", "upgrade", "roulette"]
let username = "";

document.addEventListener("DOMContentLoaded", function () {
  console.log("ja");
  userlevel = calculatelevel();
  starter();
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



  function gamevideolistenerstarter(){
    for (let i = 0; i<5; i++) {
      gamevideolistener(i);
    }
  }



function gamevideolistener(i) {
  let gamecontainer = document.getElementById("gamecontainer-" + i);
  let video = document.getElementById("video-" + i);
  let isLeaving = false;

  gamecontainer.addEventListener("mouseenter", () => {
      isLeaving = false;
      if (!video.ended) {
          video.play().catch(error => {
              console.error("Video could not play:", error);
          });
      }
  });

  gamecontainer.addEventListener("mouseleave", () => {
      if (!isLeaving) {
          video.pause();
          video.currentTime = 0;
          isLeaving = true;
      }
  });

  video.addEventListener("ended", () => {
      if (!video.loop && !isLeaving) {
          video.pause();
      }
  });
}







function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function setAutoplayCookie() {
    const expires = new Date();
    expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = "autoplayAccepted=true;expires=" + expires.toUTCString() + ";path=/";
}

function hasAutoplayPermission() {
    return document.cookie.indexOf("autoplayAccepted=true") !== -1;
}


function checkVideo() {
  for (let i = 0; i <5; i++) {
    if (hasAutoplayPermission()) {
        let video = document.getElementById("video-"+i);
        video.autoplay = true;
        video.muted = true;
    }
  }
    
}

function acceptCookies() {
    const cookiePopup = document.getElementById("cookiePopup");
    cookiePopup.style.display = "none";
    setCookie("cookiesAccepted", "true", 365);
    setAutoplayCookie();

    checkVideo();
}

function checkCookie() {
    if (document.cookie.indexOf("cookiesAccepted=true") === -1) {
        const cookiePopup = document.getElementById("cookiePopup");
        cookiePopup.style.display = "block";
    }
}

const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", acceptCookies);

window.addEventListener("load", () => {
    checkCookie();
    checkVideo();
    gamevideolistenerstarter();
});














/*Sign In */

document.getElementById("accountdisplaybutton").addEventListener("click", function(){
  uiPreparation ();
  console.log("Test");
  headlessFocusGuard("headlessui-portal-root");
  uiCreate();
  headlessFocusGuard("headlessui-portal-root");
});




function uiPreparation (){
  let htmlElement = document.documentElement;
  htmlElement.style.overflow = "hidden";
  htmlElement.style.paddingRight = "0px";

  //let innerApp = document.getElementById("innerApp");
  //innerApp.setAttribute("aria-hidden", "true");
  //headlessFocusGuard("innerApp");
}


function headlessFocusGuard(parent) {
  let focusGuard = document.createElement("button");
  focusGuard.type = "button";
  focusGuard.setAttribute("aria-hidden", "true");
  focusGuard.style.position = "fixed";
  focusGuard.style.top = "1px";
  focusGuard.style.left = "1px";
  focusGuard.style.width = "1px";
  focusGuard.style.height = "1px";
  focusGuard.style.padding = "0px";
  focusGuard.style.margin = "-1px";
  focusGuard.style.overflow = "hidden";
  focusGuard.setAttribute("clip", "rect(0px, 0px, 0px, 0px)");
  focusGuard.setAttribute("white-space", "nowrap");
  focusGuard.setAttribute("border-width", "0px");
  document.getElementById(parent).appendChild(focusGuard);

}

function uiCreate() {
  let divElement = document.createElement("div");
  document.getElementById("headlessui-portal-root").appendChild(divElement);

  let headlessuidialog = document.createElement("div");
  headlessuidialog.className = "uiDivindex";
  headlessuidialog.id = "headlessui-dialog";
  headlessuidialog.setAttribute("role", "dialog");
  headlessuidialog.setAttribute("aria-modal", "true");
  divElement.appendChild(headlessuidialog);

  let headlessuidialogoverlay = document.createElement("div");
  headlessuidialogoverlay.className = "dialogOverlay enter-to entered";
  headlessuidialogoverlay.id = "dialog-Overlay";
  headlessuidialogoverlay.setAttribute("aria-hidden", "true");
  headlessuidialog.appendChild(headlessuidialogoverlay);

  let dialogPanel = document.createElement("div");
  dialogPanel.className = "dialogPanelindex enter-to entered";
  headlessuidialog.appendChild(dialogPanel);

  let signinleftcontainer = document.createElement("div");
  signinleftcontainer.className = "signinleftcontainer";
  dialogPanel.appendChild(signinleftcontainer);

  let signinleft = document.createElement("div");
  signinleft.className = "signinleft";
  signinleftcontainer.appendChild(signinleft);

  let leftsitename = document.createElement("a");
  leftsitename.className = "leftsitename";
  leftsitename.setAttribute("href", "/");
  signinleft.appendChild(leftsitename);

  let leftsitenametext = document.createElement("span");
  leftsitenametext.className = "leftsitenametext";
  leftsitenametext.innerHTML = "BUXS";
  leftsitename.appendChild(leftsitenametext);

  let leftsitenamevideo = document.createElement("video");
  leftsitenamevideo.setAttribute("autoplay", "true");
  leftsitenamevideo.setAttribute("loop", "true");
  leftsitenamevideo.setAttribute("playsinline", "true");
  leftsitenamevideo.className = "leftsitenamevideo";
  leftsitename.appendChild(leftsitenamevideo);

  let leftsitevideomov = document.createElement("source");
  leftsitevideomov.setAttribute("src", "/videos/gemspin.mov");
  leftsitevideomov.type = "video/mp4";
  leftsitenamevideo.appendChild(leftsitevideomov);

  let leftsitevideowebm = document.createElement("source");
  leftsitevideomov.setAttribute("src", "/videos/gemspin.webm");
  leftsitevideomov.type = "video/webm";
  leftsitenamevideo.appendChild(leftsitevideowebm);

  let leftsiteimg = document.createElement("img");
  leftsiteimg.setAttribute("alt", "Buxs Gems");
  leftsiteimg.setAttribute("srcset", "/images/BuxsGemsBlue.png");
  leftsiteimg.setAttribute("src", "/images/BuxsGemsBlue.png");
  leftsiteimg.setAttribute("width", "172");
  leftsiteimg.setAttribute("height", "196");
  leftsiteimg.setAttribute("decoding", "async");
  leftsiteimg.className = "leftsiteimg";
  leftsiteimg.setAttribute("loading", "lazy");
  leftsiteimg.style.color = "transparent";
  signinleft.appendChild(leftsiteimg);

  let leftinfoscontainer = document.createElement("div");
  leftinfoscontainer.className = "leftinfoscontainer";
  signinleft.appendChild(leftinfoscontainer);

  let leftinfospacer = document.createElement("div");
  leftinfospacer.className = "leftinfospacer";
  leftinfoscontainer.appendChild(leftinfospacer);

  let leftinfotos = document.createElement("div");
  leftinfotos.className = "leftinfotos";
  leftinfoscontainer.appendChild(leftinfotos);

  let leftinfotostext = document.createTextNode("By accessing this site I attest that I am at least 18 years old and have read and agree with the ");
  leftinfotos.appendChild(leftinfotostext);

  let leftinfotoslink = document.createElement("a");
  leftinfotoslink.className = "leftinfotoslink";
  leftinfotoslink.setAttribute("href", "TermsOfService.html");
  leftinfotoslink.innerHTML = "Terms of Service";
  leftinfotos.appendChild(leftinfotoslink);

  let leftinfotostext2 = document.createTextNode(".");
  leftinfotos.appendChild(leftinfotostext2);




  /*Right */
  let signinrightcontainer = document.createElement("div");
  signinrightcontainer.className = "signinrightcontainer";
  dialogPanel.appendChild(signinrightcontainer);

  let rightswitcher = document.createElement("div");
  rightswitcher.className = "rightswitcher";
  rightswitcher.setAttribute("role", "tablist");
  rightswitcher.setAttribute("aria-orientation", "horizontal");
  signinrightcontainer.appendChild(rightswitcher);

  let rightswitcherloginbutton = document.createElement("button");
  rightswitcherloginbutton.id = "rightswitcherbutton-0";
  rightswitcherloginbutton.role = "button";
  rightswitcherloginbutton.type = "button";
  rightswitcherloginbutton.setAttribute("aria-selected", "true");
  rightswitcher.appendChild(rightswitcherloginbutton);

  let rightswitcherbuttonactive = document.createElement("div");
  rightswitcherbuttonactive.id = "rightswitcherbuttonstyle-0";
  rightswitcherbuttonactive.className = "rightswitcherbuttonactive";
  rightswitcherbuttonactive.innerHTML = "Login";
  rightswitcherloginbutton.appendChild(rightswitcherbuttonactive);

  let rightswitcherregisterbutton = document.createElement("button");
  rightswitcherregisterbutton.id = "rightswitcherbutton-0";
  rightswitcherregisterbutton.role = "button";
  rightswitcherregisterbutton.type = "button";
  rightswitcherregisterbutton.setAttribute("aria-selected", "true");
  rightswitcher.appendChild(rightswitcherregisterbutton);

  let rightswitcherbuttoninactive = document.createElement("div");
  rightswitcherbuttoninactive.id = "rightswitcherbuttonstyle-1";
  rightswitcherbuttoninactive.className = "rightswitcherbutton";
  rightswitcherbuttoninactive.innerHTML = "Register";
  rightswitcherregisterbutton.appendChild(rightswitcherbuttoninactive);











  let signinrightcontent = document.createElement("div");
  signinrightcontent.id = "signinrightcontent";
  signinrightcontainer.appendChild(signinrightcontent);

  rightcontentlogin(signinrightcontent);


  document.getElementById("dialog-Overlay").addEventListener("click", overlayClickHandler);

  //document.getElementById("uiCaseNav-Navigation-Search").addEventListener("input", function(event) {
  //    const searchTerm = event.target.value.toLowerCase();
  //    filterCaseItems(searchTerm);
  //});

  rightswitcherloginbutton.addEventListener("click", function() {
    document.getElementById("signinrightcontent").innerHTML = "";
    rightswitcherbuttonactive.className = "rightswitcherbuttonactive";
    rightswitcherbuttoninactive.className = "rightswitcherbutton";

    rightcontentlogin(signinrightcontent);
  });
  
  rightswitcherregisterbutton.addEventListener("click", function() {
    document.getElementById("signinrightcontent").innerHTML = "";
    rightswitcherbuttonactive.className = "rightswitcherbutton";
    rightswitcherbuttoninactive.className = "rightswitcherbuttonactive";

    rightcontentregister(signinrightcontent);
  });
}

function overlayClickHandler() {
  document.getElementById("headlessui-portal-root").innerHTML = "";
  //document.getElementById("dialog-Overlay").removeEventListener("click", overlayClickHandler);
}


function rightcontentlogin(signinrightcontent){
    let headlessuitabspanel = document.createElement("div");
    headlessuitabspanel.role = "tabpanel";
    headlessuitabspanel.id = "headlessuitabspanel-0"
    signinrightcontent.appendChild(headlessuitabspanel);

    let uiform = document.createElement("form");
    uiform.className = "uiform";
    headlessuitabspanel.appendChild(uiform);

    let uilabel1 = document.createElement("label");
    uilabel1.className = "uilabel";
    uilabel1.id = "uilabel1";
    uiform.appendChild(uilabel1);

    let uilabel1text = document.createTextNode("E-mail");
    uilabel1.appendChild(uilabel1text);

    let uilabel1input = document.createElement("input");
    uilabel1input.setAttribute("name", "username");
    uilabel1input.className = "uilabelinput";
    uilabel1input.id = "uilabel1input";
    uilabel1.appendChild(uilabel1input);

    let uilabel2 = document.createElement("label");
    uilabel2.className = "uilabel";
    uilabel2.id = "uilabel2";
    uiform.appendChild(uilabel2);

    let uilabel2text = document.createTextNode("Password");
    uilabel2.appendChild(uilabel2text);

    let uilabel2input = document.createElement("input");
    uilabel2input.setAttribute("type", "password");
    uilabel2input.setAttribute("name", "password");
    uilabel2input.className = "uilabelinput";
    uilabel2input.id = "uilabel2input";
    uilabel2.appendChild(uilabel2input);

    let uiforgotbutton = document.createElement("button");
    uiforgotbutton.type = "button";
    uiforgotbutton.id = "uiforgotbutton";
    uiforgotbutton.className = "uiforgotbutton";
    uiforgotbutton.innerHTML = "Forgot Password?";
    uiform.appendChild(uiforgotbutton);

    let uisubmitbutton = document.createElement("button");
    uisubmitbutton.type = "button";
    uisubmitbutton.id = "uisubmitbutton";
    uisubmitbutton.className = "uisubmitbutton";
    uiform.appendChild(uisubmitbutton);

    let uisubmitbuttoninner = document.createElement("div");
    uisubmitbuttoninner.className = "uisubmitbuttoninner";
    uisubmitbuttoninner.innerHTML = "Sign in";
    uisubmitbutton.appendChild(uisubmitbuttoninner);


    let headlessuispan = document.createElement("span");
    headlessuispan.id = "headlessuispan";
    headlessuispan.role = "tabpanel";
    headlessuispan.style.position = "fixed";
    headlessuispan.style.top = "1px";
    headlessuispan.style.left = "1px";
    headlessuispan.style.width = "1px";
    headlessuispan.style.height = "1px";
    headlessuispan.style.padding = "0px";
    headlessuispan.style.margin = "-1px";
    headlessuispan.style.overflow = "hidden";
    headlessuispan.setAttribute("clip", "rect(0px, 0px, 0px, 0px)");
    headlessuispan.setAttribute("white-space", "nowrap");
    headlessuispan.setAttribute("border-width", "0px");
    signinrightcontent.appendChild(headlessuispan);


    uisubmitbutton.addEventListener("click", function() {
      signincheck();
    });

}

function signincheck(){

  inputnormal(1);
  inputnormal(2);


  if (inputsfilled(3)){
    
    if(mailcheck(1)){
      if(datacheck()){
        console.log("how?")
      }
      else {
        errorcreate(-74, "Invalid email or password");
      }
    }
    else {
      errorcreate(-74, "Enter a real email");
    }
  }
  else {
    errorcreate(-74, "Enter an email or password");
  }
}

function registercheck(){

  inputnormal(1);
  inputnormal(2);
  inputnormal(3);
  inputnormal(4);
  document.getElementById("labelattest").className = "labelattest";
  document.getElementById("attestinput").className = "attestinput";

if(checkerchecked()){
  if (inputsfilled(5)){
    
    if(mailcheck(2)){
      if(passwordscheck()){
        console.log("everything right!!!");
        return true;
      }
      else {
        console.log("error");
        return false;
      }
    }
    else {
      errorcreate(-74, "Enter a real email");
      return false;
    }
  }
  else {
    errorcreate(-74, "Enter every field");
    return false;
  }
}
else{
  console.log("error");
  return false;
}
  
}

function checkerchecked(){
  let input = document.getElementById("attestinput");
  if(input.checked){
    return true;
  }
  else {
    input.className = "attestinputred";
    document.getElementById("labelattest").className = "labelattestred";
    return false;
  }
}


function passwordscheck(){
  if (passwordcheck(3)){
    if(passwordsmatch()){
      return true;
    }
    else {
      inputred(4);
      errorcreate(-74, "Passwords must match");
      return false;
    }
  }
  else {
  errorcreate(-74, "Password must be longer than or equal to 8 characters");
  return false;  
  }
  
}

function passwordcheck(number){
let input = document.getElementById("uilabel"+number+"input");
if (input.value.length >= 8){
return true;
}
else {
inputred(number);
inputred(number+1);
return false;
}
}

function passwordsmatch(){
  console.log("executed");
  let input1 = document.getElementById("uilabel3input");
  let input2 = document.getElementById("uilabel4input");
  let password2 = input2.value;
  console.log(password2 + "=== password2");

  if(input1.value == password2){
    return true;
  }
  else {
    inputred(3);
    inputred(4);
    return false;
  }
}


function inputsfilled(amount){
  console.log("inputsfilled");
  let right = true;
  for (let i = 1; i<amount ; i++) {
    inputcheck(i);
    console.log("inputcheck :="+i);
  }
  return right;
}

function datacheck(){
  return false;
}


function mailcheck(wich) {

  let input = document.getElementById("uilabel"+wich+"input");
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    return true;
  } else {
    inputred(wich);
    return false;
  }
}

function inputcheck(wich){
  let input = document.getElementById("uilabel"+wich+"input");
  if (input.value == ""){
    inputred(wich);
    right = false;
  }
  else {
    right = true;
  }
}


function inputred(number){
  let label = document.getElementById("uilabel"+number);
  label.className = "uilabelred";

  let input = document.getElementById("uilabel"+number+"input");
  input.className = "uilabelinputred";
}

function inputnormal(number){
  let label = document.getElementById("uilabel"+number);
  label.className = "uilabel";

  let input = document.getElementById("uilabel"+number+"input");
  input.className = "uilabelinput";
}




function rightcontentregister(signinrightcontent){
  let headlessuispan = document.createElement("span");
  headlessuispan.id = "headlessuispan";
  headlessuispan.role = "tabpanel";
  headlessuispan.style.position = "fixed";
  headlessuispan.style.top = "1px";
  headlessuispan.style.left = "1px";
  headlessuispan.style.width = "1px";
  headlessuispan.style.height = "1px";
  headlessuispan.style.padding = "0px";
  headlessuispan.style.margin = "-1px";
  headlessuispan.style.overflow = "hidden";
  headlessuispan.setAttribute("clip", "rect(0px, 0px, 0px, 0px)");
  headlessuispan.setAttribute("white-space", "nowrap");
  headlessuispan.setAttribute("border-width", "0px");
  signinrightcontent.appendChild(headlessuispan);



  let headlessuitabspanel = document.createElement("div");
    headlessuitabspanel.role = "tabpanel";
    headlessuitabspanel.id = "headlessuitabspanel-0"
    signinrightcontent.appendChild(headlessuitabspanel);

    let uiform = document.createElement("form");
    uiform.className = "uiform";
    headlessuitabspanel.appendChild(uiform);

    let uilabel1 = document.createElement("label");
    uilabel1.className = "uilabel";
    uilabel1.id = "uilabel1";
    uiform.appendChild(uilabel1);

    let uilabel1text = document.createTextNode("Username");
    uilabel1.appendChild(uilabel1text);

    let uilabel1input = document.createElement("input");
    uilabel1input.setAttribute("name", "username");
    uilabel1input.className = "uilabelinput";
    uilabel1input.id = "uilabel1input";
    uilabel1.appendChild(uilabel1input);

    let uilabel2 = document.createElement("label");
    uilabel2.className = "uilabel";
    uilabel2.id = "uilabel2";
    uiform.appendChild(uilabel2);

    let uilabel2text = document.createTextNode("E-mail");
    uilabel2.appendChild(uilabel2text);

    let uilabel2input = document.createElement("input");
    uilabel2input.setAttribute("name", "username");
    uilabel2input.className = "uilabelinput";
    uilabel2input.id = "uilabel2input";
    uilabel2.appendChild(uilabel2input);

    let uilabel3 = document.createElement("label");
    uilabel3.className = "uilabel";
    uilabel3.id = "uilabel3";
    uiform.appendChild(uilabel3);

    let uilabel3text = document.createTextNode("Password");
    uilabel3.appendChild(uilabel3text);

    let uilabel3input = document.createElement("input");
    uilabel3input.setAttribute("name", "username");
    uilabel3input.type = "password";
    uilabel3input.className = "uilabelinput";
    uilabel3input.id = "uilabel3input";
    uilabel3.appendChild(uilabel3input);

    let uilabel4 = document.createElement("label");
    uilabel4.className = "uilabel";
    uilabel4.id = "uilabel4";
    uiform.appendChild(uilabel4);

    let uilabel4text = document.createTextNode("Repeat Password");
    uilabel4.appendChild(uilabel4text);

    let uilabel4input = document.createElement("input");
    uilabel4input.setAttribute("name", "username");
    uilabel4input.type = "password";
    uilabel4input.className = "uilabelinput";
    uilabel4input.id = "uilabel4input";
    uilabel4.appendChild(uilabel4input);


    let labelattest = document.createElement("label");
    labelattest.className = "labelattest";
    labelattest.id = "labelattest";
    uiform.appendChild(labelattest);

    let attestinput = document.createElement("input");
    attestinput.type = "checkbox";
    attestinput.name = "agreedToTerms";
    attestinput.className = "attestinput";
    attestinput.id = "attestinput";
    labelattest.appendChild(attestinput);

    let attesttext = document.createElement("span");
    attesttext.className = "attesttext";
    attesttext.innerHTML = "I attest that I am at least 18 years old and have read and agree with the Terms of Service.";
    labelattest.appendChild(attesttext);

    let submitregisterbutton = document.createElement("button");
    submitregisterbutton.type = "button";
    submitregisterbutton.className = "submitregisterbutton";
    uiform.appendChild(submitregisterbutton);

    let submitregisterbuttontext = document.createElement("div");
    submitregisterbuttontext.className = "submitregisterbuttontext";
    submitregisterbuttontext.innerHTML = "Register";
    submitregisterbutton.appendChild(submitregisterbuttontext);

    submitregisterbutton.addEventListener("click", function() {
      if (registercheck()){
        register();
      }
    });
}











function errorcreate(offset, message){
  let container = document.getElementById("errorscontainer");

  let errorcontainer = document.createElement("div");
  errorcontainer.className = "errorcontainer";
  errorcontainer.id = "errorcontainer-" + currentError;
  errorcontainer.style.left = "0px";
  errorcontainer.style.right = "0px";
  errorcontainer.style.display = "flex";
  errorcontainer.style.position = "absolute";
  errorcontainer.style.transition = "all 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s";
  //errorcontainer.style.transform = "translateY(" + offset * currentError + "px)";
  if (currentError !== 0){
    errorcontainer.style.transform = "translateY(" + offset * (currentError-1) + "px)"; 
  }
  else {
    errorcontainer.style.transform = "translateY(0px)";
  }
  
  errorcontainer.style.bottom = "0px";
  errorcontainer.style.justifyContent = "flex-end";
  container.appendChild(errorcontainer);

  let innererrorcontainer = document.createElement("div");
  innererrorcontainer.className = "innererrorcontainer";
  errorcontainer.appendChild(innererrorcontainer);

  const errorsvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  errorsvg.setAttribute("stroke", "currentColor");
  errorsvg.setAttribute("fill", "currentColor");
  errorsvg.setAttribute("stroke-width", "0");
  errorsvg.setAttribute("viewBox", "0 0 24 24");
  errorsvg.setAttribute("class", "errorsvg");
  errorsvg.setAttribute("height", "1em");
  errorsvg.setAttribute("width", "1em");
  errorsvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  innererrorcontainer.appendChild(errorsvg);


  const errorpath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  errorpath1.setAttribute("d", "M11.001 10h2v5h-2zM11 16h2v2h-2z");
  errorsvg.appendChild(errorpath1);


  const errorpath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  errorpath2.setAttribute("d", "M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z");
  errorsvg.appendChild(errorpath2);

  let errorinfocontainer = document.createElement("div");
  innererrorcontainer.appendChild(errorinfocontainer);

  let errorinfoerror = document.createElement("div");
  errorinfoerror.className = "errorinfoerror";
  errorinfoerror.innerHTML = "Error";
  errorinfocontainer.appendChild(errorinfoerror);

  let errorinfomessage = document.createElement("div");
  errorinfomessage.className = "errorinfomessage";
  errorinfomessage.innerHTML = message;
  errorinfocontainer.appendChild(errorinfomessage);

  let thiserror = currentError;
  erroranimate(offset,errorcontainer, thiserror);

  console.log("Current:==="+currentError);
  currentError += 1;

  removetimer();
}

function erroranimate(offset,errorcontainer,thiserror){
  console.log("started");
  setTimeout(function() {
  errorcontainer.style.transform = "translateY(" + offset * thiserror + "px)";
}, 10);
}


function removetimer() {
  setTimeout(function() {
    removeerror();
  }, 5000);
}

function removeerror() {
  console.log(currentError-1);
  document.getElementById("errorcontainer-"+ (currentError-1)).remove();
  currentError -= 1;
}



function register(){
  username = document.getElementById("uilabel1input").value;
  localStorage.setItem("username", username);
  localStorage.setItem("loggedin", true);
  starter();
  closeSignIn();
}

function closeSignIn() {
  document.getElementById("headlessui-portal-root").innerHTML ="";
}


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

  let balancegems = document.createElement("div");
  balancegems.className = "balancegems";
  balancegems.innerHTML = "gems";
  balancebutton.appendChild(balancegems);
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

  let loguserdisplaycontainer = document.createElement("div");
  loguserdisplaycontainer.className = "loguserdisplaycontainer";
  logrightcontainer.appendChild(loguserdisplaycontainer);

  let loguserdisplayinner = document.createElement("div");
  loguserdisplayinner.className = "loguserdisplayinner";
  loguserdisplayinner.setAttribute("aria-expanded", "false");
  loguserdisplaycontainer.appendChild(loguserdisplayinner);

  let loguserprofilecontainer = document.createElement("a");
  loguserprofilecontainer.className = "loguserprofilecontainer";
  loguserprofilecontainer.setAttribute("href", "profile.html");
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

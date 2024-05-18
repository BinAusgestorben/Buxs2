
/*Sign In */


function loggedcheck(){
  if(checklogin()){
    document.getElementById("bignavbarrightsigninbutton").addEventListener("click", function(){
    uiPreparation ();
    console.log("Test");
    headlessFocusGuard("headlessui-portal-root");
    uiCreate();
    headlessFocusGuard("headlessui-portal-root");
  });
  }
}




  
  
  
  
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
    leftsiteimg.setAttribute("srcset", "/images/BuxsGems.webp");
    leftsiteimg.setAttribute("src", "/images/BuxsGems.webp");
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
  
    let leftinfosocialscontainer = document.createElement("div");
    leftinfosocialscontainer.className = "leftinfosocialscontainer";
    leftinfoscontainer.appendChild(leftinfosocialscontainer);
  
    let infosocialtext = document.createTextNode("Socials");
    leftinfosocialscontainer.appendChild(infosocialtext);
  
    let infosocialspan = document.createElement("span");
    infosocialspan.className = "infosocialspan";
    infosocialspan.innerHTML = "-";
    leftinfosocialscontainer.appendChild(infosocialspan);
  
    let infosocialtwitter = document.createElement("a");
    infosocialtwitter.setAttribute("target", "_blank");
    infosocialtwitter.setAttribute("href", "http://twitter.com");
    infosocialtwitter.className = "infosociallink";
    leftinfosocialscontainer.appendChild(infosocialtwitter);
  
    const infosocialtwittericon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    infosocialtwittericon.setAttribute("stroke", "currentColor");
    infosocialtwittericon.setAttribute("fill", "currentColor");
    infosocialtwittericon.setAttribute("stroke-width", "0");
    infosocialtwittericon.setAttribute("viewBox", "0 0 512 512");
    infosocialtwittericon.setAttribute("class", "infosocialicon");
    infosocialtwittericon.setAttribute("height", "1em");
    infosocialtwittericon.setAttribute("width", "1em");
    infosocialtwittericon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    infosocialtwitter.appendChild(infosocialtwittericon);
  
    const infosocialtwittericonpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    infosocialtwittericonpath.setAttribute("d", "M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z");
    infosocialtwittericon.appendChild(infosocialtwittericonpath);
  
    let infosocialdiscord = document.createElement("a");
    infosocialdiscord.setAttribute("target", "_blank");
    infosocialdiscord.setAttribute("href", "https://discord.gg");
    infosocialdiscord.className = "infosociallink";
    leftinfosocialscontainer.appendChild(infosocialdiscord);
  
    const infosocialdiscordicon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    infosocialdiscordicon.setAttribute("stroke", "currentColor");
    infosocialdiscordicon.setAttribute("fill", "currentColor");
    infosocialdiscordicon.setAttribute("stroke-width", "0");
    infosocialdiscordicon.setAttribute("viewBox", "0 0 512 512");
    infosocialdiscordicon.setAttribute("class", "infosocialicon");
    infosocialdiscordicon.setAttribute("height", "1em");
    infosocialdiscordicon.setAttribute("width", "1em");
    infosocialdiscordicon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    infosocialdiscord.appendChild(infosocialdiscordicon);
  
    const infosocialdiscordiconpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    infosocialdiscordiconpath.setAttribute("d", "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z");
    infosocialdiscordicon.appendChild(infosocialdiscordiconpath);
  
  
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
  
      let uispacer = document.createElement("hr");
      uispacer.className = "uispacer";
      headlessuitabspanel.appendChild(uispacer);
  
      let uiauthcontainer = document.createElement("div");
      uiauthcontainer.className = "uiauthcontainer";
      headlessuitabspanel.appendChild(uiauthcontainer);
  
      let uisteamauth = document.createElement("a");
      uiauthcontainer.appendChild(uisteamauth);
  
      let uisteambutton = document.createElement("button");
      uisteambutton.className = "uisteambutton";
      uisteambutton.type = "button";
      uisteambutton.innerHTML = "Sign in with Steam";
      uisteamauth.appendChild(uisteambutton);
  
      let uigoogleauth = document.createElement("a");
      uiauthcontainer.appendChild(uigoogleauth);
  
      let uigooglebutton = document.createElement("button");
      uigooglebutton.className = "uigooglebutton";
      uigooglebutton.type = "button";
      uigooglebutton.innerHTML = "Sign in with Google";
      uigoogleauth.appendChild(uigooglebutton);
  
      let uiprotectioninfo = document.createElement("div");
      uiprotectioninfo.className = "uiprotectioninfo";
      uiprotectioninfo.innerHTML = "This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.";
      headlessuitabspanel.appendChild(uiprotectioninfo);
  
  
  
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
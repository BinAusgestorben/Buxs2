let currentError = 0;


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
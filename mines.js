
document.addEventListener("DOMContentLoaded", function () {
    minesfiller();
} );


function minesfiller(){
    let minesgrouper = document.getElementById("minesrightgrouper");
    for (let i = 0; i<25 ; i++) {
        let minebutton = document.createElement("button");
        minebutton.id = "minebutton-"+i;
        minebutton.className = "minebutton";
        minebutton.type = "button";
        minesgrouper.appendChild(minebutton);

        let minebuttoninner = document.createElement("div");
        minebuttoninner.className = "minebuttoninner";
        minebutton.appendChild(minebuttoninner);

        let minebuttonimage = document.createElement("div");
        minebuttonimage.style.backgroundImage = "url(/images/minespre.png)";
        minebuttonimage.className = "minebuttonimage";
        minebuttoninner.appendChild(minebuttonimage);
    }
}
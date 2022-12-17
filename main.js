//  Create header element :
//**************************/
let htmlEl = document.querySelector("html");
let bodyEl = document.querySelector('body');
let header = document.createElement("header");
let logoDiv = document.createElement("div");
let logoH1 = document.createElement("h1");
let logoTxt = document.createTextNode("Elzero");

let ulist = document.createElement("ul");
let item1 = document.createElement("li");
let item2 = document.createElement("li");
let item3 = document.createElement("li");
let item4 = document.createElement("li");

let menu1 = document.createTextNode("Home");
let menu2 = document.createTextNode("About");
let menu3 = document.createTextNode("Services");
let menu4 = document.createTextNode("Contact");
// CONTENT BODY
let contentDiv = document.createElement("div");
let footer = document.createElement("footer");




header.className = "website-head";
footer.className = "footer";
// header.classList.add("website-head");
logoDiv.className = "logo";
ulist.className = "menu";
contentDiv.className = "content";


logoDiv.setAttribute("title", "Website-logo");
logoH1.appendChild(logoTxt);
logoDiv.appendChild(logoH1);
header.append(logoDiv);


item1.appendChild(menu1);
item2.appendChild(menu2);
item3.appendChild(menu3);
item4.appendChild(menu4);

ulist.append(item1);
ulist.append(item2);
ulist.append(item3);
ulist.append(item4);

header.append(ulist);


console.log("before");

for (let i = 1; i < 16; i++) {

    let productDiv = document.createElement("div");
    let mySpan = document.createElement("span");
    let h2 = document.createElement("h2");

    productDiv.className = "product";

    h2.append(`${i}`);
    mySpan.append(h2);
    productDiv.append(h2);
    productDiv.append("Product");
    productDiv.style.cssText = "width:calc(( 100% - 40px ) / 3); padding:20px; background-color:rgb(255,255,255); border:1px solid rgb(221,221,221);box-sizing:border-box;text-align:center;color:rgb(136,136,136);border-radius:6px;";

    contentDiv.append(productDiv)


}
console.log("after");

// styling ................
htmlEl.style.cssText = "margin: 0; padding:0 ;";
bodyEl.style.cssText = "margin: 0; padding:0 ;background-color:rgb(236,236,236);font-family:Tahoma,Arial;";


//****** */
header.style.cssText = "padding:20px;background-color:rgb(255,255,255);display:flex;justify-content:space-between;align-items:center;";
logoDiv.style.cssText = "font-weight:bold;color:rgb(35,169,110);font-size:26px;";
logoH1.style.cssText = "margin: 0; padding:0 ;";
ulist.style.cssText = "list-style:none; padding:0;margin:0;display:flex;";

item1.style.marginLeft = "15px";
item2.style.marginLeft = "15px";
item3.style.marginLeft = "15px";
item4.style.marginLeft = "15px";

contentDiv.style.cssText = " display:flex;padding:20px; flex-wrap:wrap;justify-content:center;gap:20px;min-height:calc(100vh - 142px);box-sizing:border-box";

footer.style.cssText = " background-color:rgb(36,169,110);font-size:26px;text-align:center;padding:20px;color:rgb(255,255,255):";
footer.append("Copyright 2022");
bodyEl.prepend(header);
header.after(contentDiv);
contentDiv.after(footer);
























////////////////////////////////
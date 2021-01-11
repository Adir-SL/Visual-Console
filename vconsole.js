// logs
console.defaultLog = console.log.bind(console);
console.logs = [];
console.log = function(){
    console.defaultLog.apply(console, arguments);
    console.logs.push(Array.from(arguments));
    if(window.checkCode == undefined){
        toVConsole("<div class='vconlog vConUndetect' title='console.log()'>" + Array.from(arguments) + "</div>");
    }else{
        toVConsole("<div class='vconlog vConUndetect' title='"+window.checkCode+"'>" + Array.from(arguments) + "</div>");
        window.checkCode = undefined;
    }
}

// error
console.defaultError = console.error.bind(console);
console.errors = [];
console.error = function(){
    console.defaultError.apply(console, arguments);
    console.errors.push(Array.from(arguments));
    if(window.checkCode == undefined){
        toVConsole("<div class='vconerror vConUndetect' title='console.error()'>" + Array.from(arguments) + "</div>");
    }else{
        toVConsole("<div class='vconerror vConUndetect' title='"+window.checkCode+"'>" + Array.from(arguments) + "</div>");
        window.checkCode = undefined;
    }
}

// warn
console.defaultWarn = console.warn.bind(console);
console.warns = [];
console.warn = function(){
    console.defaultWarn.apply(console, arguments);
    console.warns.push(Array.from(arguments));
    if(window.checkCode == undefined){
        toVConsole("<div class='vconwarn vConUndetect' title='console.warn()'>" + Array.from(arguments) + "</div>");
    }else{
        toVConsole("<div class='vconwarn vConUndetect' title='"+window.checkCode+"'>" + Array.from(arguments) + "</div>");
        window.checkCode = undefined;
    }
}

// debug
console.defaultDebug = console.debug.bind(console);
console.debugs = [];
console.debug = function(){
    console.defaultDebug.apply(console, arguments);
    console.debugs.push(Array.from(arguments));
    if(window.checkCode == undefined){
        toVConsole("<div class='vcondebug vConUndetect' title='console.debug()'>" + Array.from(arguments) + "</div>");
    }else{
        toVConsole("<div class='vcondebug vConUndetect' title='"+window.checkCode+"'>" + Array.from(arguments) + "</div>");
        window.checkCode = undefined;
    }
}

// clear
console.defaultClear = console.clear.bind(console);
console.clears = [];
console.clear = function(){
    toVConsole("<hr>");
}

// alert
function alert(x){
    if(window.checkCode == undefined){
        toVConsole("<div class='vconalert vConUndetect' title='alert()'>" + x + "</div>");
    }else{
        toVConsole("<div class='vconalert vConUndetect' title='"+window.checkCode+"'>" + x + "</div>");
        window.checkCode = undefined;
    }
}

function toVConsole(y){
    if(y == "<hr>"){
        var currentdate = new Date();
        document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("details")[document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("details").length-1].open = false;
        document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("summary")[document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("summary").length-1].innerHTML = "Cleared at "+currentdate.getHours()+":"+currentdate.getMinutes();
        document.getElementById("vconsole_"+window.checkTime).innerHTML += "<details class='vConUndetect' open><summary class='vConUndetect'></summary></details>";
    }else{
        document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("details")[document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("details").length-1].innerHTML += y;
        setTimeout(function(){ 
            checkForChars();
        }, 50);
    }
    document.getElementById("vconsole_"+window.checkTime).scrollTop = document.getElementById("vconsole_"+window.checkTime).scrollHeight;
}
function checkForChars(){
    var x = document.getElementsByClassName("vconlog");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].innerHTML.slice(0,1) == "%"){
            x[i].innerHTML = x[i].innerHTML.slice(x[i].innerHTML.indexOf(";,")+2,x[i].innerHTML.length);
        }
    }
}
function addConsole(){
    window.chevSvgIcon = '<svg style="width:24px;height:24px;pointer-events:none;" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>';
    window.pickSvgIcon = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>';
    document.body.innerHTML += "<div id='vconsole_"+window.checkTime+"' class='vConUndetect'><details class='vConUndetect' open><summary class='vConUndetect'></summary></details></div><div class='flexDiv vConUndetect' id='flex_"+window.checkTime+"'><input class='vConUndetect' spellcheck='false' autocapitalize='none' placeholder='Type code here...'></input><button id=ibutton_"+window.checkTime+" class='vConUndetect' onclick='iFunc(event);' title='Run code'>"+window.chevSvgIcon+"</button><button id=pbutton_"+window.checkTime+" class='vConUndetect' onclick='selectFromPage();' title='Select an element from the page'>"+window.pickSvgIcon+"</button></div><button id='vbutton_"+window.checkTime+"' class='vConUndetect' onclick='toggleConsole();' title='~ to toggle'>"+window.chevSvgIcon+"</button>";

    //Console CSS
    const ConsoleStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    ConsoleStyles("#vconsole_"+window.checkTime+"{ position:fixed; font-weight:normal; right:16px; top:16px; width:300px; max-width:50%; height:150px; max-height:25%; padding:8px; overflow:auto; scroll-behavior:smooth; background-color:#ffffff; box-shadow:0 4px 16px 0 rgba(0,0,0,.4); font-family:sans-serif; border-radius: 8px;transition:height 200ms ease-in-out, opacity 200ms ease-in-out; }"+"#vconsole_"+window.checkTime+" div{ margin-bottom:4px; padding:8px; border-radius:4px; color:#000000; background-color:#ededed; }"+"#vconsole_"+window.checkTime+" summary:empty ~ div:last-of-type{ animation:slideOver 100ms ease-out; }"+window.checkTime+" summary:empty{ height:0; }"+"#vbutton_"+window.checkTime+"{ position:fixed; right:32px; top:32px; padding:1px; margin:0; opacity:1; width:32px; height:32px; border:none; transform:translate(80%,-80%); outline:none; background-color:skyblue; color:#ffffff; font-weight:bold; border-radius:50%; display: flex; align-items: center; justify-content: center; cursor:pointer; box-shadow:0 4px 8px 0 rgba(0,0,0,.4); } @keyframes slideOver{ 0%{transform: translateX(-100%);} 100%{transform: translateX(0px);}}"+"#vconsole_"+window.checkTime+" + .flexDiv{ display:flex; align-items:stretch; position:fixed; top:180px; right:16px; width: 300px; padding: 8px; margin-top: 8px; border-radius:8px; box-shadow:0 4px 16px 0 rgba(0,0,0,.4); background-color:#ffffff;transition:opacity 200ms ease-in-out; }"+"#vconsole_"+window.checkTime+" + .flexDiv input{ width:calc(100% - 64px); background-color:#ffffff; border-radius:4px; padding: 8px; border:1px solid #cccccc; outline:none;margin-right:4px; font-size: 16px; -webkit-appearance: none; -moz-appearance: none; appearance: none; }"+"#ibutton_"+window.checkTime+"{ border-radius:4px; border:none; box-shadow:0 0 0 2px skyblue inset; outline:none; background-color:#ffffff; color:#ffffff; padding:1px; margin:0; opacity:1; width:36px; font-weight:bold; display: flex; align-items: center; justify-content: center; cursor:pointer; }"+"#pbutton_"+window.checkTime+"{ border-radius:4px; border:none; outline:none; background-color:#ffffff; color:grey; padding:1px; margin:0; opacity:1; width:36px; font-weight:bold; display: flex; align-items: center; justify-content: center; cursor:pointer;margin-right: 4px; }"+"#vbutton_"+window.checkTime+" svg{ transition:transform 200ms ease-in-out; }"+"#ibutton_"+window.checkTime+" svg{ transform:rotate(-90deg); }"+"#ibutton_"+window.checkTime+" path{ fill:skyblue; }"+"#ibutton_"+window.checkTime+":active, #ibutton_"+window.checkTime+":focus, #vbutton_"+window.checkTime+":active, #vbutton_"+window.checkTime+":focus{ box-shadow: 0 0 0 2px cornflowerblue inset, 0 4px 8px 0 rgba(0,0,0,.4); }"+"#ibutton_"+window.checkTime+":hover, #vbutton_"+window.checkTime+":hover{ filter:brightness(104%); }"+"#pbutton_"+window.checkTime+":hover{ filter:brightness(115%); }"+"#ibutton_"+window.checkTime+":focus path, #vbutton_"+window.checkTime+":focus path{ fill:cornflowerblue; }"+"#pbutton_"+window.checkTime+":focus{ color:#ffffff; background-color:grey; }"+"#vbutton_"+window.checkTime+" svg, #ibutton_"+window.checkTime+" svg, #pbutton_"+window.checkTime+" svg{ pointer-events:none; }")

    //Console CSS - Mobile
    const mobileStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    mobileStyles("@media only screen and (max-width: 990px) {#vconsole_"+window.checkTime+"{ width:calc(100% - 48px); max-width:calc(100% - 48px); } "+"#vbutton"+window.checkTime+"{ right:20px; top:20px; }"+"#vconsole_"+window.checkTime+" + .flexDiv{ width:calc(100% - 48px); }"+"}")

    //Logs CSS
    const LogStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    LogStyles(".vconlog{ border-bottom:2px solid skyblue; }")
    
    //Errors CSS
    const ErrorStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    ErrorStyles(".vconerror{ border-bottom:2px solid red; }")

    //Warn CSS
    const WarnStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    WarnStyles(".vconwarn{ border-bottom:2px solid gold; }")

    //Debug CSS
    const DebugStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    DebugStyles(".vcondebug{ border-bottom:2px solid orange; }")

    //Alert CSS
    const AlertStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    AlertStyles(".vconalert{ border-bottom:2px solid pink; }")

    //Summary CSS
    const SumStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    SumStyles("#vconsole_"+window.checkTime+" summary::marker {  font-size: 0; } "+"#vconsole_"+window.checkTime+" summary::-webkit-details-marker {  display: none; }"+"#vconsole_"+window.checkTime+" details {  margin-bottom: 16px; }"+"#vconsole_"+window.checkTime+" details:last-of-type {  margin-bottom: 0; }"+"#vconsole_"+window.checkTime+" summary {  margin-bottom:4px; color:#333333; cursor:pointer; }"+"#vconsole_"+window.checkTime+" details[open] summary { color:#bbbbbb; }"+"#vconsole_"+window.checkTime+" summary:focus {  outline:none; }"+"#vconsole_"+window.checkTime+" summary:hover { opacity:0.8; }")
}
function toggleConsole(){
    if(window.hideConsole != true){
        document.getElementById('vconsole_'+window.checkTime).style.height = '48px';
        document.getElementById('vconsole_'+window.checkTime).style.opacity = 0;
        document.getElementById('vconsole_'+window.checkTime).style.pointerEvents = "none";
        document.getElementById('vconsole_'+window.checkTime).style.overflow = "hidden";
        document.getElementById('flex_'+window.checkTime).style.opacity = 0;
        document.getElementById('flex_'+window.checkTime).style.pointerEvents = "none";
        document.getElementById('vbutton_'+window.checkTime).getElementsByTagName("svg")[0].style.transform = "rotate(-90deg)";
        window.hideConsole = true;
    }else{
        document.getElementById('vconsole_'+window.checkTime).style.height = '150px';
        document.getElementById('vconsole_'+window.checkTime).style.opacity = 1;
        document.getElementById('vconsole_'+window.checkTime).style.pointerEvents = "all";
        document.getElementById('flex_'+window.checkTime).style.opacity = 1;
        document.getElementById('flex_'+window.checkTime).style.pointerEvents = "all";
        document.getElementById('vbutton_'+window.checkTime).getElementsByTagName("svg")[0].style.transform = "rotate(0deg)";
        window.hideConsole = false;
        setTimeout(function(){ 
            document.getElementById('vconsole_'+window.checkTime).style.overflow = "auto";
            setTimeout(function(){ 
                document.getElementById("vconsole_"+window.checkTime).scrollTop = document.getElementById("vconsole_"+window.checkTime).scrollHeight;
            }, 200);
        }, 100);
    }
}
function runCode(r){
    if(r !== ''){
        window.checkCode = r;
        document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].placeholder = 'Running...';
        setTimeout(function(){ document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].placeholder = 'Type code here...'; }, 400);
        document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].value = '';
        eval(r);
    }
}

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        runCode(document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].value);
    }
    if (event.keyCode === 192) {
        event.preventDefault();
        toggleConsole();
    }
});

function iFunc(e){
    if(e.target.parentNode.getElementsByTagName('input')[0].value !== ''){
        runCode(e.target.parentNode.getElementsByTagName('input')[0].value);
    }
}

function selectFromPage(){
    //Selects an Element from Page by Clicking it.
    window.stopSelecting = 1;
    document.addEventListener("click", function(e) {
        if(e.target.className.indexOf("vConUndetect") < 0){
            window.vConSelection = e.target;
            vcon = window.vConSelection;
            if(document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].value.slice(-10) !== 'nSelection' && window.stopSelecting == 1){
                document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].value += 'window.vConSelection';
                // window.vConSelection = '';
                window.stopSelecting = 0;
                document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].focus();
            }
        }
      });
}

window.checkTime = new Date().valueOf();
addConsole();
console.log('Hello World!');
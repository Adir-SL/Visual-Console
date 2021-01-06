// logs
console.defaultLog = console.log.bind(console);
console.logs = [];
console.log = function(){
    console.defaultLog.apply(console, arguments);
    console.logs.push(Array.from(arguments));
    toVConsole("<div class='vconlog'>" + Array.from(arguments) + "</div>");
}

// error
console.defaultError = console.error.bind(console);
console.errors = [];
console.error = function(){
    console.defaultError.apply(console, arguments);
    console.errors.push(Array.from(arguments));
    toVConsole("<div class='vconerror'>" + Array.from(arguments) + "</div>");
}

// warn
console.defaultWarn = console.warn.bind(console);
console.warns = [];
console.warn = function(){
    console.defaultWarn.apply(console, arguments);
    console.warns.push(Array.from(arguments));
    toVConsole("<div class='vconwarn'>" + Array.from(arguments) + "</div>");
}

// debug
console.defaultDebug = console.debug.bind(console);
console.debugs = [];
console.debug = function(){
    console.defaultDebug.apply(console, arguments);
    console.debugs.push(Array.from(arguments));
    toVConsole("<div class='vcondebug'>" + Array.from(arguments) + "</div>");
}

// clear
console.defaultClear = console.clear.bind(console);
console.clears = [];
console.clear = function(){
    toVConsole("<hr>");
}

// alert
function alert(x){
    toVConsole("<div class='vconalert'>" + x + "</div>");
}

function toVConsole(y){
    if(y == "<hr>"){
        var currentdate = new Date();
        document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("details")[document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("details").length-1].open = false;
        document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("summary")[document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("summary").length-1].innerHTML = "Cleared at "+currentdate.getHours()+":"+currentdate.getMinutes();
        document.getElementById("vconsole_"+window.checkTime).innerHTML += "<details open><summary></summary></details>";
    }else{
        document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("details")[document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("details").length-1].innerHTML += y;
    }
    document.getElementById("vconsole_"+window.checkTime).scrollTop = document.getElementById("vconsole_"+window.checkTime).scrollHeight;
}

function addConsole(){
    document.body.innerHTML += "<div id='vconsole_"+window.checkTime+"'><details open><summary></summary></details></div><div class='flexDiv' id='flex_"+window.checkTime+"'><input spellcheck='false' autocapitalize='none'></input><button id="+"ibutton_"+window.checkTime+" onclick='iFunc(event);'>></button></div><button id='vbutton_"+window.checkTime+"' onclick='toggleConsole();'>X</button>";

    //Console CSS
    const ConsoleStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    ConsoleStyles("#vconsole_"+window.checkTime+"{ position:absolute; right:16px; top:16px; width:300px; max-width:50%; height:150px; max-height:25%; padding:8px; overflow:auto; scroll-behavior:smooth; background-color:#ffffff; box-shadow:0 4px 16px 0 rgba(0,0,0,.4); font-family:sans-serif; border-radius: 8px;transition:height 200ms ease-in-out, opacity 200ms ease-in-out; }"+"#vconsole_"+window.checkTime+" div{ margin-bottom:4px; padding:8px; border-radius:8px; background-color:#ededed; }"+"#vconsole_"+window.checkTime+" summary:empty ~ div:last-of-type{ animation:slideOver 100ms ease-out; }"+"#vbutton_"+window.checkTime+"{ position:fixed; right:32px; top:32px; width: 32px; height:32px; border:none; outline:none; background-color:skyblue; color:#ffffff; font-weight:bold; border-radius:50%; cursor:pointer; box-shadow:0 4px 8px 0 rgba(0,0,0,.4); } @keyframes slideOver{ 0%{transform: translateX(-100%);} 100%{transform: translateX(0px);}}"+"#vconsole_"+window.checkTime+" + .flexDiv{ display:flex; align-items:stretch; position:absolute; top:180px; right:16px; width: 300px; padding: 8px; margin-top: 8px; border-radius:8px; box-shadow:0 4px 16px 0 rgba(0,0,0,.4); background-color:#ffffff; }"+"#vconsole_"+window.checkTime+" + .flexDiv input{ width:100%; border-radius:8px; padding: 8px 16px; border:1px solid #cccccc; outline:none;margin-right:8px; }")

    //Console CSS - Mobile
    const mobileStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    mobileStyles("@media only screen and (max-width: 990px) {#vconsole_"+window.checkTime+"{ width:calc(100% - 48px); max-width:calc(100% - 48px); } "+"#vbutton"+window.checkTime+"{ right:20px; top:20px; }"+"}")

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
    SumStyles("#vconsole_"+window.checkTime+" summary::marker {  font-size: 0; } "+"#vconsole_"+window.checkTime+" summary::-webkit-details-marker {  display: none; }"+"#vconsole_"+window.checkTime+" details {  margin-bottom: 16px; }"+"#vconsole_"+window.checkTime+" details:last-of-type {  margin-bottom: 0; }"+"#vconsole_"+window.checkTime+" summary {  margin-bottom:4px; color:#333333; cursor:pointer; }"+"#vconsole_"+window.checkTime+" details[open] summary { color:#bbbbbb; }"+"#vconsole_"+window.checkTime+" summary:focus {  outline:none; }")
}
function toggleConsole(){
    if(window.hideConsole != true){
        document.getElementById('vconsole_'+window.checkTime).style.height = '48px';
        document.getElementById('vconsole_'+window.checkTime).style.opacity = 0;
        document.getElementById('vconsole_'+window.checkTime).style.pointerEvents = "none";
        window.hideConsole = true;
    }else{
        document.getElementById('vconsole_'+window.checkTime).style.height = '150px';
        document.getElementById('vconsole_'+window.checkTime).style.opacity = 1;
        document.getElementById('vconsole_'+window.checkTime).style.pointerEvents = "all";
        window.hideConsole = false;
        setTimeout(function(){ 
            document.getElementById("vconsole_"+window.checkTime).scrollTop = document.getElementById("vconsole_"+window.checkTime).scrollHeight;
        }, 300);
    }
}
function runCode(r){
    // document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("input")[0].value = '';
    document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].value = '';
    eval(r);
}

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        // eval(document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("input")[0].value);
        // runCode(document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("input")[0].value);
        runCode(document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].value);
        // document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("input")[0].value = '';
    }
});

function iFunc(e){
    if(e.target.parentNode.getElementsByTagName('input')[0].value !== ''){
        runCode(e.target.parentNode.getElementsByTagName('input')[0].value);
    }
}

window.checkTime = new Date().valueOf();
addConsole();
console.log('welcome');
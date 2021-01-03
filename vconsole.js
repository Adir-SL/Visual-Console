// logs
console.defaultLog = console.log.bind(console);
console.logs = [];
console.log = function(){
    // default &  console.log()
    console.defaultLog.apply(console, arguments);
    // new & array data
    console.logs.push(Array.from(arguments));
    toVConsole("<div class='vconlog'>" + Array.from(arguments) + "</div>");
}

// error
console.defaultError = console.error.bind(console);
console.errors = [];
console.error = function(){
    // default &  console.error()
    console.defaultError.apply(console, arguments);
    // new & array data
    console.errors.push(Array.from(arguments));
    toVConsole("<div class='vconerror'>" + Array.from(arguments) + "</div>");
}

// warn
console.defaultWarn = console.warn.bind(console);
console.warns = [];
console.warn = function(){
    // default &  console.warn()
    console.defaultWarn.apply(console, arguments);
    // new & array data
    console.warns.push(Array.from(arguments));
    // toVConsole(Array.from(arguments));
    toVConsole("<div class='vconwarn'>" + Array.from(arguments) + "</div>");
}

// debug
console.defaultDebug = console.debug.bind(console);
console.debugs = [];
console.debug = function(){
    // default &  console.debug()
    console.defaultDebug.apply(console, arguments);
    // new & array data
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
    // console.log("ALERT: "+x);
    toVConsole("<div class='vconalert'>" + x + "</div>");
}

function toVConsole(y){
    document.getElementById("vconsole_"+window.checkTime).innerHTML += y;
    document.getElementById("vconsole_"+window.checkTime).scrollTop = document.getElementById("vconsole_"+window.checkTime).scrollHeight;
}

function addConsole(){
    document.body.innerHTML += "<div id='vconsole_"+window.checkTime+"'></div><button id='vbutton"+window.checkTime+"' onclick='toggleConsole();'>X</button>";

    //Console CSS
    const ConsoleStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    ConsoleStyles("#vconsole_"+window.checkTime+"{ position:absolute; right:16px; top:16px; width:300px; max-width:50%; height:150px; max-height:25%; padding:8px; overflow:auto; scroll-behavior:smooth; background-color:#ffffff; box-shadow:0 4px 16px 0 rgba(0,0,0,.4); font-family:sans-serif; border-radius: 8px;transition:width 200ms ease-in-out, height 200ms ease-in-out, opacity 200ms ease-in-out, background-color 200ms ease-in-out, box-shadow 200ms ease-in-out; }"+"#vconsole_"+window.checkTime+" div{ margin-bottom:4px; padding:8px; border-radius:8px; background-color:#ededed; }"+"#vbutton"+window.checkTime+"{ position:fixed; right:32px; top:32px; width: 32px; height:32px; border:none; outline:none; background-color:skyblue; color:#ffffff; font-weight:bold; border-radius:50%; cursor:pointer; box-shadow:0 4px 8px 0 rgba(0,0,0,.4); }")

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
}
function toggleConsole(){
    if(window.hideConsole != true){
        document.getElementById('vconsole_'+window.checkTime).style.width = '48px';
        document.getElementById('vconsole_'+window.checkTime).style.height = '48px';
        document.getElementById('vconsole_'+window.checkTime).style.backgroundColor = 'transparent';
        document.getElementById('vconsole_'+window.checkTime).style.boxShadow = '0 4px 16px 0 rgba(0,0,0,0)';
        document.getElementById('vconsole_'+window.checkTime).style.opacity = 0;
        window.hideConsole = true;
    }else{
        document.getElementById('vconsole_'+window.checkTime).style.width = '300px';
        document.getElementById('vconsole_'+window.checkTime).style.height = '150px';
        document.getElementById('vconsole_'+window.checkTime).style.backgroundColor = '#ffffff';
        document.getElementById('vconsole_'+window.checkTime).style.boxShadow = '0 4px 16px 0 rgba(0,0,0,.4)';
        document.getElementById('vconsole_'+window.checkTime).style.opacity = 1;
        window.hideConsole = false;
        setTimeout(function(){ 
            document.getElementById("vconsole_"+window.checkTime).scrollTop = document.getElementById("vconsole_"+window.checkTime).scrollHeight;
        }, 300);
    }
}

window.checkTime = new Date().valueOf();
addConsole();
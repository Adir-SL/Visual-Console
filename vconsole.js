// logs
console.defaultLog = console.log.bind(console);
console.logs = [];
console.log = function(){
    // default &  console.log()
    console.defaultLog.apply(console, arguments);
    // new & array data
    console.logs.push(Array.from(arguments));
    toVConsole("<div class='vconlog'>" + Array.from(arguments) + "/div>");
}

// error
console.defaultError = console.error.bind(console);
console.errors = [];
console.error = function(){
    // default &  console.error()
    console.defaultError.apply(console, arguments);
    // new & array data
    console.errors.push(Array.from(arguments));
    toVConsole("<div class='vconerror'>" + Array.from(arguments) + "/div>");
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
    toVConsole("<div class='vconwarn'>" + Array.from(arguments) + "/div>");
}

// debug
console.defaultDebug = console.debug.bind(console);
console.debugs = [];
console.debug = function(){
    // default &  console.debug()
    console.defaultDebug.apply(console, arguments);
    // new & array data
    console.debugs.push(Array.from(arguments));
    toVConsole("<div class='vcondebug'>" + Array.from(arguments) + "/div>");
}

// clear
console.defaultClear = console.clear.bind(console);
console.clears = [];
console.clear = function(){
   
    toVConsole("<hr>");
}

// alert
function alert(x){
    console.log("ALERT: "+x);
}

function toVConsole(y){
    document.getElementById("vconsole_"+window.checkTime).innerHTML += y;
    document.getElementById("vconsole_"+window.checkTime).scrollTop = document.getElementById("vconsole_"+window.checkTime).scrollHeight;
}

function addConsole(){
    document.body.innerHTML += "<div id='vconsole_"+window.checkTime+"'></div>";

    //Console CSS
    const ConsoleStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    ConsoleStyles("#vconsole_"+window.checkTime+"{ position:absolute; right:16px; top:16px; width:300px; max-width:50%; height:150px; max-height:25%; padding:16px; overflow:auto; scroll-behavior:smooth; background-color:#ffffff; box-shadow:0 4px 16px 0 rgba(0,0,0,.4); font-family:sans-serif; border-radius: 8px; }")

    //Logs CSS
    const LogStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    LogStyles(".vconlog{ background-color:skyblue; }")
    
    //Errors CSS
    const ErrorStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    ErrorStyles(".vconerror{ background-color:red; }")

    //Warn CSS
    const WarnStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    WarnStyles(".vconwarn{ background-color:yellow; }")

    //Debug CSS
    const DebugStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    DebugStyles(".vcondebug{ background-color:orange; }")
}


window.checkTime = new Date().valueOf();
addConsole();
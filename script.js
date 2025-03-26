//your JS code here. If required.
const browserName = navigator.appName; 
const browserVersion = navigator.appVersion; 
const userAgent = navigator.userAgent; 
const browserInfoMessage = "You are using " + browserName + " version " + browserVersion;
document.getElementById("browser-info").textContent = browserInfoMessage;

alert("load battery.js");
//window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(info) {
	alert("Level: " + info.level + " isPlugged: " + info.isPlugged);
}

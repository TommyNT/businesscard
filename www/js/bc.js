function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function businessCard(){
	
	info = 'Hi, this is my businesscard app :-)' + '\n' +
			'=====' + '\n' +
			'Name : Duong' + '\n' + 
			'Surname : Nguyen Tuan' + '\n' + 
			'Email: tommynt@outlook.com' + '\n' + 
			'Website : https://github.com/TommyNT' + '\n' + 
			'Dean’s group number: KrDUIs1012' + '\n' + 
			'Field of study: Informatyka Stosowana' + '\n';
	navigator.notification.alert(info);
}
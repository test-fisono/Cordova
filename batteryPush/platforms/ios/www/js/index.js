var app = {
	// コンストラクタ
	initialize: function() {
		this.bindEvents();
	},
	// devicereadyはCordovaを全部読み込んでから発火
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// バッテリーの残量が変化したら呼ばれるように設定
	onDeviceReady: function() {
		window.addEventListener("batterystatus", onBatteryStatus, false);
	},
};

app.initialize();


function onBatteryStatus(info) {
	alert("バッテリー残量：" + info.level + ", デバイスの接続：" + info.isPlugged)
}

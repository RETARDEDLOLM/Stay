const { Plugin } = require('powercord/entities');
window.lil = new Audio('https://v3-fastupload.s3-accelerate.amazonaws.com/1636503203-The%20Kid%20LAROI%2C%20Justin%20Bieber%20-%20Stay%20%28Lyrics%29.mp3?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASQBHBZCRVR4NVFHK%2F20211110%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20211110T001333Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=304dc7f722a2c102e06384a7a32776294e52fb9660370793ec4e545106bef889');
const Settings = require('./Settings');

module.exports = class Lofi extends Plugin {
	updateVolume() {
		window.lil.volume = this.settings.get('volume', 1);
	}

	startPlugin() {
		window.lil.pause();
		window.lil.loop = true;
		window.lil.volume = this.settings.get('volume', 1);
		window.lil.play();
		powercord.api.settings.registerSettings(this.entityID, {
			category: this.entityID,
			label: 'Industry Baby',
			render: Settings,
		});
	}

	pluginWillUnload() {
		window.lil.pause();
		powercord.api.settings.unregisterSettings(this.entityID);
	}
};

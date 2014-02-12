/**
 * Container of main controls
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @class
 * @constructor
 * @extends vjs.Component
 */
vjs.ControlBar = vjs.Component.extend();

// hide volume control and mute toggle if ios and android devices
if(vjs.IS_IOS || vjs.IS_ANDROID){
	vjs.ControlBar.prototype.options_ = {
  loadEvent: 'play',
  children: {
    'playToggle': {},
    'currentTimeDisplay': {},
    'timeDivider': {},
    'durationDisplay': {},
    'remainingTimeDisplay': {},
    'progressControl': {},
    'fullscreenToggle': {}
    // 'volumeMenuButton': {}
  }
};
}
else {
	vjs.ControlBar.prototype.options_ = {
  loadEvent: 'play',
  children: {
    'playToggle': {},
    'currentTimeDisplay': {},
    'timeDivider': {},
    'durationDisplay': {},
    'remainingTimeDisplay': {},
    'progressControl': {},
    'fullscreenToggle': {},
    'volumeControl': {},
    'muteToggle': {}
    // 'volumeMenuButton': {}
  }
};
}

vjs.ControlBar.prototype.createEl = function(){
  return vjs.createEl('div', {
    className: 'vjs-control-bar'
  });
};

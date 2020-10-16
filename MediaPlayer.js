// object function
function MediaPlayer(config) {
    // in this case 'this' points the object it self
    // 'this.media' creates an attrib inside the MediaPlayer object
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
  }

  MediaPlayer.prototype._initPlugins = function() {
      this.plugins.forEach(plugin => {
        plugin.run(this);
      });
  }
  
  // adding object attribs/methods with prototype
  MediaPlayer.prototype.togglePlay = function () {
    this.media.paused ? this.media.play() : this.media.pause();
  };

  MediaPlayer.prototype.toggleMute = function() {
      this.media.muted = !this.media.muted;
  }


export default MediaPlayer;
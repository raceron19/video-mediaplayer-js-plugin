// object function
class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config) {
    // in this case 'this' points the object it self
    // 'this.media' creates an attrib inside the MediaPlayer object
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  private initPlayer() {
    this.container = document.createElement('div');
this.container.style.position = 'relative';
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media)
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  // adding object attribs/methods with prototype
  togglePlay() {
    this.media.paused ? this.media.play() : this.media.pause();
  }
  toggleMute() {
    this.media.muted = !this.media.muted;
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
}

export default MediaPlayer;
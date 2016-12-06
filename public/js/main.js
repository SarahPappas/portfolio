function GifPlayer(el) {
	this.el = el;
	this.isPlaying = false;

	this.el.addEventListener("click", this._changeVisibleEl.bind(this));
}

GifPlayer.prototype = {
	_changeVisibleEl: function () {
		var gifEl = this.el.getElementsByClassName("gif")[0];
		var pauseEl = this.el.getElementsByClassName("pause-img")[0];
		var showEl = null;
		var hideEl = null;
		
		if (!this.isPlaying) {
			showEl = gifEl;
			hideEl = pauseEl;
			this.isPlaying = true;
		} else {
			showEl = pauseEl;
			hideEl = gifEl;
			this.isPlaying = false;
		}

		hideEl.style.display = "none";
		showEl.style.display = "block";	
	}
}

function makeGifPalyers() {
	var containerEls = document.getElementsByClassName("gif-container");
	for (var i = 0; i < containerEls.length; i++) {
		var el = containerEls[i];
		return new GifPlayer(el);
	};
}

makeGifPalyers();
